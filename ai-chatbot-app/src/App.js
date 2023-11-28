import './App.css';
import React from 'react';
import Chatbot from './Chatbot';
import uuid from "uuid";


function App() {
  const newId = uuid.v4();

  return (
    <div>
      <h1>TecnoBot</h1>
      <Chatbot userId = {newId} />
    </div>
  );
}
 
export default App;
