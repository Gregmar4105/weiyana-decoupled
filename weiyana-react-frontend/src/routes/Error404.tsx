import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Frown } from 'lucide-react';

export const Error404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-illustration">
          <Frown size={64} className="icon-frown" />
        </div>

        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        <div className="button-group">
          <button onClick={() => navigate(-1)} className="btn-back">
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
          <button onClick={() => navigate('/')} className="btn-home">
            <Home size={18} />
            <span>Go to Home</span>
          </button>
        </div>
      </div>

      <style>{`
        .error-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100%;
          background: var(--bg-primary);
          font-family: var(--sans);
          box-sizing: border-box;
          padding: 24px;
        }

        /* Card Container */
        .error-card {
          width: 100%;
          max-width: 480px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 0;
          padding: 48px 40px;
          box-shadow: var(--shadow);
          box-sizing: border-box;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Illustration styling */
        .error-illustration {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          margin-bottom: 16px;
        }
        
        .icon-frown {
          color: var(--text-primary);
        }

        /* Error Code */
        .error-code {
          font-family: var(--heading);
          font-size: 80px;
          font-weight: 800;
          line-height: 1;
          margin: 0 0 8px;
          letter-spacing: -2px;
          color: var(--text-primary);
        }
        
        .error-title {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 16px;
          color: var(--text-primary);
        }
        
        .error-message {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 32px;
        }

        /* Buttons styling */
        .button-group {
          display: flex;
          gap: 16px;
          width: 100%;
        }
        
        .btn-back,
        .btn-home {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 46px;
          border-radius: 0;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }
        
        .btn-back {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
        }
        
        .btn-back:hover {
          background: var(--border-color);
        }
        
        .btn-home {
          background: var(--button-bg);
          border: 1px solid var(--button-bg);
          color: var(--button-text);
        }
        
        .btn-home:hover {
          background: var(--button-hover-bg);
          border-color: var(--button-hover-bg);
        }
      `}</style>
    </div>
  );
};

export default Error404;
