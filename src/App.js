import React, { useState } from 'react';
import './styles.css';

const EventHandlingExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState('light');

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
    alert('Count reset!');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${name}!`);

    setData([...data, { count, name }]);
    setName('');
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`container ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="header">
        <h1>Header</h1>
      </div>

      <div className="content">
        <p className="count">Count: {count}</p>
        <button className="button" onClick={handleClick}>Increment Count</button>
        <button className="button" onClick={handleDecrement}>Decrement Count</button>
        <button className="button" onClick={handleReset}>Reset Count</button>
        
        <form onSubmit={handleSubmit}>
          <label>
            Enter Your Name:
            <input type="text" value={name} onChange={handleInputChange} className="input" />
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>

        <table className="data-table">
          <thead>
            <tr>
              <th>Count</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.count}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="footer">
        <h3>Footer</h3>
      </div>

      <button className="theme-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default EventHandlingExample;
