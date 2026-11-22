import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Coffee } from 'lucide-react';

const History = ({ history, onClearHistory }) => {
  return (
    <main className="history-container">
      <div className="history-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} /> Back to Timer
        </Link>
        {history.length > 0 && (
          <button className="btn-danger" onClick={onClearHistory}>
            <Trash2 size={16} /> Clear Logs
          </button>
        )}
      </div>

      <h2>Your Brew History</h2>

      {history.length === 0 ? (
        <div className="empty-history">
          <Coffee size={40} color="#7f6a5c" />
          <p>No completed brews logged yet. Finish a timer to record your cup!</p>
        </div>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <div key={item.id} className="history-item">
              <div>
                <h4>{item.method}</h4>
                <span className="timestamp">{item.timestamp}</span>
              </div>
              <span className="duration-tag">
  {item.duration}s {item.temp ? `• ${item.temp}°C` : 'brew'}
</span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default History;