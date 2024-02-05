import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './styleb/Messages.css';

const Messages = () => {
    const [messages, setMessages] = useState([
        { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 1 },
        { Email: 'amelameur2003@gmail.com', Message: 'i just wanted to say thanks', id: 2 }
    ]);

    const handleDelete = (id) => {
        const updatedMessages = messages.filter(message => message.id !== id);
        setMessages(updatedMessages);
    };

    return (
        
        <div className="Messages">
            <h1>Messages</h1>
            <table className="Table" border="0">
                <thead>
                    <tr>
                        <th className="borderBottom">Email</th>
                        <th className="borderBottom"></th>
                        <th className="borderBottom">Message</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((message) => (
                        <tr key={message.id}>
                            <td className="borderBottom">{message.Email}</td>
                            <td className="borderBottom"></td>
                            <td className="borderBottom">{message.Message}</td>
                            <td><Link to="/PageProfil/messages/answer">
                                    <button className="button1">Check</button>
                                </Link></td>
                            <td><button onClick={() => handleDelete(message.id)} className="button2">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Messages;

