// App.js
import React from 'react';
import Chat from './components/chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Chatbot</h1>
      </header>
      <main>
        <Chat />
      </main>
    </div>
  );
}

export default App;
