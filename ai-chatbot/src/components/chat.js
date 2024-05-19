import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { getChatbotResponse } from './openaiService';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const newMessages = [...messages, { sender: 'user', text: message }];
    setMessages(newMessages);

    try {
      const aiMessage = await getChatbotResponse(message);
      setMessages([...newMessages, { sender: 'ai', text: aiMessage }]);
    } catch (error) {
      setMessages([...newMessages, { sender: 'ai', text: 'Error getting response from AI.' }]);
    }
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
