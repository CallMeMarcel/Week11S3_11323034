import React, { useState } from 'react';
import './styles.css';

const EventHandlingExample = () => {
  // State to hold the count
  const [count, setCount] = useState(0);
  // State to hold the input name
  const [name, setName] = useState('');

  // Event handler function to handle button click
  const handleClick = () => {
    // Increment the count when button is clicked
    setCount(count + 1);
  };

  // Event handler function to handle form submission
  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Display an alert with the entered name
    alert(`Hello ${name}!`);
  };

  // Event handler function to handle input change
  const handleInputChange = (event) => {
    // Update the name state with the input value
    setName(event.target.value);
  };

  return (
    <div>
      {/* Display the count */}
      <p className="count">Count: {count}</p>
      {/* Button to trigger the event */}
      <button className="button" onClick={handleClick}>Increment Count</button>

      {/* Form to input name */}
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <label>
          Enter Your Name:
          {/* Input field for name */}
          <input type="text" value={name} onChange={handleInputChange} className="input" />
        </label>
        {/* Button to submit the form */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default EventHandlingExample;
