import './App.css';
import React from 'react';
import Chatbot from './Chatbot';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const newId = uuidv4();

  return (
    <div>
      <h1>TecnoBot</h1>
      <Chatbot userId = {newId} />
    </div>
  );
}
 
export default App;
