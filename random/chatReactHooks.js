import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Chat App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map(message => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
