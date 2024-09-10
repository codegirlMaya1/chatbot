import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage("Hi, I'm your chatbot!")],
  botName: "ChatBot",
};

export default config;