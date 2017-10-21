declare module '@slack/client' {
  interface RtmClientEvents {
    CONNECTING: 'connecting';
    AUTHENTICATED: 'authenticated';
    WS_OPENING: 'ws_opening';
    WS_OPENED: 'ws_opened';
    RTM_CONNECTION_OPENED: 'open';
    DISCONNECT: 'disconnect';
    UNABLE_TO_RTM_START: 'unable_to_rtm_start';
    WS_CLOSE: 'ws_close';
    WS_ERROR: 'ws_error';
    ATTEMPTING_RECONNECT: 'attempting_reconnect';
    RAW_MESSAGE: 'raw_message';
  }

  interface WebClientEvents {
    RATE_LIMITED: 'rate_limited';
  }

  interface ClientEvents {
    RTM: RtmClientEvents;
    WEB: WebClientEvents;
  }

  export const CLIENT_EVENTS: ClientEvents;

  export enum RTM_EVENTS {
    ACCOUNTS_CHANGED = 'accounts_changed',
    BOT_ADDED = 'bot_added',
    BOT_CHANGED = 'bot_changed',
    CHANNEL_ARCHIVE = 'channel_archive',
    CHANNEL_CREATED = 'channel_created',
    CHANNEL_DELETED = 'channel_deleted',
    CHANNEL_HISTORY_CHANGED = 'channel_history_changed',
    CHANNEL_JOINED = 'channel_joined',
    CHANNEL_LEFT = 'channel_left',
    CHANNEL_MARKED = 'channel_marked',
    CHANNEL_RENAME = 'channel_rename',
    CHANNEL_UNARCHIVE = 'channel_unarchive',
    COMMANDS_CHANGED = 'commands_changed',
    DND_UPDATED = 'dnd_updated',
    DND_UPDATED_USER = 'dnd_updated_user',
    EMAIL_DOMAIN_CHANGED = 'email_domain_changed',
    EMOJI_CHANGED = 'emoji_changed',
    FILE_CHANGE = 'file_change',
    FILE_COMMENT_ADDED = 'file_comment_added',
    FILE_COMMENT_DELETED = 'file_comment_deleted',
    FILE_COMMENT_EDITED = 'file_comment_edited',
    FILE_CREATED = 'file_created',
    FILE_DELETED = 'file_deleted',
    FILE_PRIVATE = 'file_private',
    FILE_PUBLIC = 'file_public',
    FILE_SHARED = 'file_shared',
    FILE_UNSHARED = 'file_unshared',
    GROUP_ARCHIVE = 'group_archive',
    GROUP_CLOSE = 'group_close',
    GROUP_HISTORY_CHANGED = 'group_history_changed',
    GROUP_JOINED = 'group_joined',
    GROUP_LEFT = 'group_left',
    GROUP_MARKED = 'group_marked',
    GROUP_OPEN = 'group_open',
    GROUP_RENAME = 'group_rename',
    GROUP_UNARCHIVE = 'group_unarchive',
    HELLO = 'hello',
    IM_CLOSE = 'im_close',
    IM_CREATED = 'im_created',
    IM_HISTORY_CHANGED = 'im_history_changed',
    IM_MARKED = 'im_marked',
    IM_OPEN = 'im_open',
    MANUAL_PRESENCE_CHANGE = 'manual_presence_change',
    MESSAGE = 'message',
    MPIM_CLOSE = 'mpim_close',
    MPIM_HISTORY_CHANGED = 'mpim_history_changed',
    MPIM_JOINED = 'mpim_joined',
    MPIM_OPEN = 'mpim_open',
    PIN_ADDED = 'pin_added',
    PIN_REMOVED = 'pin_removed',
    PREF_CHANGE = 'pref_change',
    PRESENCE_CHANGE = 'presence_change',
    REACTION_ADDED = 'reaction_added',
    REACTION_REMOVED = 'reaction_removed',
    RECONNECT_URL = 'reconnect_url',
    STAR_ADDED = 'star_added',
    STAR_REMOVED = 'star_removed',
    SUBTEAM_CREATED = 'subteam_created',
    SUBTEAM_SELF_ADDED = 'subteam_self_added',
    SUBTEAM_SELF_REMOVED = 'subteam_self_removed',
    SUBTEAM_UPDATED = 'subteam_updated',
    TEAM_DOMAIN_CHANGE = 'team_domain_change',
    TEAM_JOIN = 'team_join',
    TEAM_MIGRATION_STARTED = 'team_migration_started',
    TEAM_PLAN_CHANGE = 'team_plan_change',
    TEAM_PREF_CHANGE = 'team_pref_change',
    TEAM_PROFILE_CHANGE = 'team_profile_change',
    TEAM_PROFILE_DELETE = 'team_profile_delete',
    TEAM_PROFILE_REORDER = 'team_profile_reorder',
    TEAM_RENAME = 'team_rename',
    USER_CHANGE = 'user_change',
    USER_TYPING = 'user_typing'
  }

  export enum RTM_MESSAGE_SUBTYPES {
    BOT_MESSAGE = 'bot_message',
    CHANNEL_ARCHIVE ='channel_archive',
    CHANNEL_JOIN = 'channel_join',
    CHANNEL_LEAVE = 'channel_leave',
    CHANNEL_NAME = 'channel_name',
    CHANNEL_PURPOSE = 'channel_purpose',
    CHANNEL_TOPIC = 'channel_topic',
    CHANNEL_UNARCHIVE = 'channel_unarchive',
    FILE_COMMENT = 'file_comment',
    FILE_MENTION = 'file_mention',
    FILE_SHARE = 'file_share',
    GROUP_ARCHIVE = 'group_archive',
    GROUP_JOIN = 'group_join',
    GROUP_LEAVE = 'group_leave',
    GROUP_NAME = 'group_name',
    GROUP_PURPOSE = 'group_purpose',
    GROUP_TOPIC = 'group_topic',
    GROUP_UNARCHIVE = 'group_unarchive',
    ME_MESSAGE = 'me_message',
    MESSAGE_CHANGED = 'message_changed',
    MESSAGE_DELETED = 'message_deleted',
    PINNED_ITEM = 'pinned_item',
    UNPINNED_ITEM = 'unpinned_item'
  }

  type Logger = (logLevel: string, logString: string) => void;

  interface DataStoreOptions {
    logLevel: string;
    logger: Logger;
  }

  class SlackDataStore {
    logger: Logger;

    constructor(options?: DataStoreOptions);

    registerMessageHandler(event: RtmClientEvents, handler: () => void): void;
    clear(): void;
    getUserById(userId: string): object;
    getUserByName(name: string): object;
    getUserByEmail(email: string): object;
    getUserByBotId(botId: string): object;
    getChannelById(channelId: string): object;
    getChannelByName(name: string): object;
    getGroupById(groupId: string): object;
    getGroupByName(name: string): object;
    getDMById(dmId: string): object;
    getDMByName(name: string): object;
    getDMByUserId(userId: string): object;
    getBotById(botId: string): object;
    getBotByName(name: string): object;
    getBotByUserId(userId: string): object;
    getTeamById(teamId: string): object;
    getUnreadCount(): object;
    setChannel(channel: object): void;
    setGroup(group: object): void;
    setDM(dm: object): void;
    setUser(user: object): void;
    setBot(bot: object): void;
    setTeam(team: object): void;
    upsertChannel(channel: object): void;
    upsertGroup(group: object): void;
    upsertDM(dm: object): void;
    upsertUser(user: object): void;
    upsertBot(bot: object): void;
    upsertTeam(team: object): void;
    upsertChannelGroupOrDMById(id: string, obj: object): void;
    getChannelGroupOrDMById(id: string): object;
    getChannelOrGroupByName(id: string): object;
    cacheRtmStart(data: object): void;
    handleRtmMessage(activeUserId: string, activeTeamId: string, messageType: string, message: object): void;
  }

  export class MemoryDataStore extends SlackDataStore {}

  interface RtmClientOptions {
    socketFn?: (url: string) => WebSocket;
    dataStore?: SlackDataStore;
    autoReconnect?: boolean;
    useRtmConnect?: boolean;
    retryConfig?: {
      retries?: number;
      factor?: number;
      minTimeout?: number;
      maxTimeout?: number;
      randomize?: boolean;
      forever?: boolean;
      unref?: boolean;
    }
    wsPingInterval?: number;
    maxPongInterval?: number;
    logLevel?: string;
    logger?: Logger;
  }

  interface UpdateMessage {
    ts: string;
    channel: string;
    text: string;
  }

  interface RtmStartData {
    ok: boolean;
    url: string;
    team: {
      id: string;
      name: string;
      domain: string;
      enterprise_id: string;
      enterprise_name: string;
    };
    self: {
      id: string;
      name: string;
    };
  }

  interface Field {
    title: string;
    value: string;
    short: boolean;
  }

  interface Attachment {
    fallback: string;
    color: string;
    pretext?: string;
    author_name: string;
    author_link: string;
    author_icon: string;
    title: string;
    title_link: string;
    text?: string;
    fields: Field[];
    image_url: string;
    thumb_url: string;
    footer: string;
    footer_icon: string;
    ts: number;
  }

  interface Reaction {
    name: string;
    count: number;
    users: string[];
  }

  export interface MessageData {
    type: 'message';
    subtype?: RTM_MESSAGE_SUBTYPES;
    channel: string;
    user: string;
    text: string;
    ts: string;
    attachments?: Attachment[];
    edited?: {
      user: string;
      ts: string;
    };
    is_starred?: boolean;
    pinned_to?: string[];
    reactions?: Reaction[];
  }

  export class RtmClient extends NodeJS.EventEmitter {
    ws: WebSocket;
    connected: boolean;
    authenticated: boolean;
    activeUserId: string;
    activeTeamId: string;
    dataStore?: SlackDataStore;

    constructor(token: string, opts?: RtmClientOptions);

    start(options?: object): void;
    nextMessageId(): string;
    connect(url: string): void;
    disconnect(reason?: Error, code?: number): void;
    reconnect(): void;
    handleWsOpen(): void;
    handleWsMessage(message: string): void;
    handleWsError(error: object): void;
    handleWsClose(code: string, reason: string): void;
    sendMessage(text: string, channelId: string, callback?: () => void): void;
    updateMessage(message: UpdateMessage, callback?: () => void): void;
    sendTyping(channelId: string): void;
    subscribePresence(userIds: number[]): void;
    send(message: string, callback?: () => void): void;

    // Event listeners
    on(event: RtmClientEvents['AUTHENTICATED'], callback: (data: RtmStartData) => void): this;
    on(event: RTM_EVENTS.MESSAGE, callback: (message: MessageData) => void): this;
  }
}
