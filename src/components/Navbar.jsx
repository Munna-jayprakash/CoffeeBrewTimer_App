import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, History } from 'lucide-react';

const Navbar = ({ historyCount }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <Coffee size={28} color="#d4a373" />
        <span>Roast &amp; Timing</span>
      </Link>

      <div className="nav-actions">
        <Link
          to="/history"
          className={`history-btn ${location.pathname === '/history' ? 'active' : ''}`}
          title="View Brew History"
        >
          <History size={22} />
          <span>Brew History</span>
          {historyCount > 0 && <span className="badge">{historyCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;