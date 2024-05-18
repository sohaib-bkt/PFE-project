import { useState, useEffect } from 'react';
import axiosClient from '../../api/axios';
import AdminNav from './AdminNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';

const UserMessageCard = ({ id, name, email, message, read, onMarkAsRead }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className={`card border-left-${read ? 'success' : 'warning'} shadow h-100`}>
        <div className="card-body">
          <div className="d-flex align-items-center">
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
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axiosClient.get('/api/contact/get');
        setMessages(response.data);
        setFilteredMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = messages.filter(message =>
      message.nom.toLowerCase().includes(query) ||
      message.email.toLowerCase().includes(query) ||
      message.commentaire.toLowerCase().includes(query)
    );
    setFilteredMessages(filtered);
  };

  const handleMarkAsRead = async (id) => {
    try {
      const response = await axiosClient.patch(`http://localhost:8000/api/contact/read` , 
        { id }
      );
      if (response.status === 200) {
        const updatedMessages = messages.map(message =>
          message.id === id ? { ...message, read: true } : message
        );
        setMessages(updatedMessages);
        setFilteredMessages(updatedMessages.filter(message =>
          message.nom.toLowerCase().includes(searchQuery) ||
          message.email.toLowerCase().includes(searchQuery) ||
          message.commentaire.toLowerCase().includes(searchQuery)
        ));
      }
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };  

  const handleClearReadMessages = async () => {
    try {
      const response = await axiosClient.delete('http://localhost:8000/api/contact/clear-read');
      if (response.status === 200) {
        const remainingMessages = messages.filter(message => !message.read);
        setMessages(remainingMessages);
        setFilteredMessages(remainingMessages.filter(message =>
          message.nom.toLowerCase().includes(searchQuery) ||
          message.email.toLowerCase().includes(searchQuery) ||
          message.commentaire.toLowerCase().includes(searchQuery)
        ));
      }
    } catch (error) {
      console.error('Error clearing read messages:', error);
    }
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
          {filteredMessages.map((message, index) => (
            <UserMessageCard
              key={index}
              id={message.id}
              name={message.nom}
              email={message.email}
              message={message.commentaire}
              read={message.read ? true : false}
              onMarkAsRead={handleMarkAsRead}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
