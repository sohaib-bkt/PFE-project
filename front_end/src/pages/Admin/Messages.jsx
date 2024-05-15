import React, { useState } from 'react';
import AdminNav from './AdminNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';

const staticMessages = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profilePhoto: 'https://via.placeholder.com/150',
    read: false
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    message: 'Nulla facilisi. Sed id nisi ac magna lacinia gravida.',
    profilePhoto: 'https://via.placeholder.com/150',
    read: true
  },
  // Add more static messages as needed
];

const UserMessageCard = ({ id, name, email, message, profilePhoto, read, onMarkAsRead }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className={`card border-left-${read ? 'success' : 'warning'} shadow h-100`}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <img src={profilePhoto} className="rounded-circle mr-3" style={{ width: '50px', height: '50px' }} alt="Profile Photo" />
            <div>
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Email: {email}</p>
            </div>
          </div>
          <p className="card-text mt-3"><span className="font-weight-bold">Message:</span> {message}</p>
          {!read && (
            <button className="btn btn-success" onClick={() => onMarkAsRead(id)}>Mark as Read</button>
          )}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState(staticMessages);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = staticMessages.filter(message =>
      message.name.toLowerCase().includes(query) ||
      message.email.toLowerCase().includes(query) ||
      message.message.toLowerCase().includes(query)
    );
    setMessages(filtered);
  };

  const handleMarkAsRead = (id) => {
    const updatedMessages = messages.map(message =>
      message.id === id ? { ...message, read: true } : message
    );
    setMessages(updatedMessages);
  };

  const handleClearReadMessages = () => {
    const remainingMessages = messages.filter(message => !message.read);
    setMessages(remainingMessages);
  };

  return (
    <>
   
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Emails</h1>
            </div>
            <div className="row mb-3">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search messages"
                  value={searchQuery}
                  onChange={handleSearch}
                  style={{ width: "230px", marginTop: '10px' }}
                />
                <button className="btn btn-success btn-icon-split" onClick={handleClearReadMessages} style={{ marginTop: '10px' }}>
                  <span className="icon text-white-50">
                    <FontAwesomeIcon icon={faBroom} />
                  </span>
                  <span className="text">Clear Read Messages</span>
                </button>
              </div>
            </div>
            <div className="row">
              {messages.map((message, index) => (
                <UserMessageCard
                  key={index}
                  id={message.id}
                  name={message.name}
                  email={message.email}
                  message={message.message}
                  profilePhoto={message.profilePhoto}
                  read={message.read}
                  onMarkAsRead={handleMarkAsRead}
                />
              ))}
            </div>
          </div>
      
    </>
  );
};

export default Dashboard;
