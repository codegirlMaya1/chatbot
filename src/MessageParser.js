class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const regex = /hello|hi|hey/i;
      if (regex.test(message)) {
        this.actionProvider.handleGreeting();
      }
    }
  }
  
  export default MessageParser;