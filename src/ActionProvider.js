class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleGreeting = () => {
      const message = this.createChatBotMessage("Hello! How can I help you?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  }
  
  export default ActionProvider;