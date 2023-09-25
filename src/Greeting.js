// GreetingMessage.js

import React, { useState } from 'react';
import product from './Product';

function Message() {
const [firstName, setFirstName] = useState(''); //Store users firstName

return (
<div className='message'>
    <p>Hello, {firstName ? firstName : 'there'}!</p>
    <input
    type="text"
    placeholder="Enter your first name"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}  //update name
    />
    
    {firstName && (
    <img
        src= {product.image} 
        alt={firstName}
    />
    )}
</div>
);
}

export default Message;
