import { CLIENT_EVENTS, RTM_EVENTS, RtmClient } from '@slack/client';
import CIClient = require('ci-client');
import head = require('lodash/head');
import startsWith = require('lodash/startsWith');
import tail = require('lodash/tail');
import trim = require('lodash/trim');

import * as Config from './config';
import {
  IContext,
} from './types';
import createLogger from './utils/logger';

const logger = createLogger(__filename);

const rtm = new RtmClient(Config.SLACK_BOT_TOKEN);
const ciClient = new CIClient({
  authKey: Config.AUTH_KEY,
  myHost: Config.MY_HOST,
  myPort: Config.MY_PORT,
  name: 'slackbot',
  proxyPort: Config.MY_PROXY_PORT,
  serverHost: Config.SERVER_HOST,
  serverPort: Config.SERVER_PORT,
  trustedUserGroups: Config.TRUSTED_USER_GROUPS,
});

function receiveCiMessage(action: any, message: string, context: IContext) {
  logger.silly('Received action:', action);
  logger.silly('Received message:', message);
  logger.silly('Received context:', context);

  rtm.sendMessage(message, context.message.channel);
}
ciClient.setReceiver(receiveCiMessage);

function userParser(context: IContext): string {
  return context.message.user;
}
ciClient.setUserParser(userParser);

function privateChatParser(context: IContext): boolean {
  return startsWith(context.message.channel, 'D');
}
ciClient.setPrivateChatParser(privateChatParser);

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
  logger.info(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}`);
});

rtm.on(RTM_EVENTS.MESSAGE, (message) => {
  logger.silly('Received message:', message);
  const isSubtypeMessage = message.subtype !== undefined;
  const isCommand = startsWith(message.text, '.');
  const isHighlightingBot = startsWith(message.text, `<@${rtm.activeUserId}>`);
  const isDirectMessage = startsWith(message.channel, 'D');

  // Ignore subtype messages like channel archivals, invites etc.
  if (isSubtypeMessage) {
    return;
  }

  if (isDirectMessage && isCommand) {
    const trimmedMessage = trim(message.text.replace('.', ''));
    const parts = trimmedMessage.split(' ');
    const command = head(parts) || '';
    const parameters = tail(parts).join(' ');
    return ciClient.sendCommand(command, parameters, { message });
  }

  if (isHighlightingBot || isDirectMessage) {
    const trimmedMessage = trim(message.text.replace(`<@${rtm.activeUserId}>`, ''));
    ciClient.sendMessage(trimmedMessage, { message });
  }
});

function stop(signal: string) {
  logger.info(`Received ${signal}, stopping bot`);
  rtm.disconnect();
  process.exit();
}

if (require.main === module) {
  rtm.start();

  process.on('SIGINT', () => stop('SIGINT'));
  process.on('SIGTERM', () => stop('SIGTERM'));
}
