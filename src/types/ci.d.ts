declare module 'ci-client' {
  interface Configuration {
    name: string;
    serverHost: string;
    serverPort: number;
    myHost: string;
    myPort: number;
    proxyPort?: number | undefined;
    authKey: string;
    actions?: Actions;
    commands?: string[];
    trustedUserGroups: string;
  }

  interface UserGroupObject {
    [groupName: string]: 'all' | string[];
  }

  interface Actions {
    [actionName: string]: Action;
  }

  interface Action {
    keywords: Keyword[];
  }

  type KeywordType = 'noun';

  interface Keyword {
    word: string;
    type: KeywordType;
  }

  class Client {
    constructor(config: Configuration);

    sendMessage: (message: string, context?: any) => void;
    sendCommand: (command: string, parameters: string, context?: any) => void;
    setReceiver: (callback: (action: any, message: string, context: any) => void) => void;
    setUserParser: (callback: (context: any) => string) => void;
    setPrivateChatParser: (callback: (context: any) => boolean) => void;
  }

  export = Client;
}
