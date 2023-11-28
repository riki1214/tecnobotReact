import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';



const Chatbot = ({userId}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);


  const chatWithGPT = async (userInput) => {

    const endopoint = "https://voz46p1nbh.execute-api.eu-south-1.amazonaws.com/fase1"
    const data = {
      user: userId,
      message: userInput
    };

    try {
      const response = await axios.post(endopoint, JSON.stringify(data));
      console.log(response);
    } catch (error) {
      console.error('Error communicating with the API:', error.message);
      return '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { text: input, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const aiMessage = { text: '...', user: false };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    const response = await chatWithGPT(input);
    const newAiMessage = { text: response, user: false };
    setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? 'user-message' : 'ai-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="chatbot-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;