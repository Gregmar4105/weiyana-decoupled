import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { RefreshCw, Home, AlertOctagon } from 'lucide-react';

export const Error500: React.FC = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();

  console.error("Route error boundary caught error:", error);

  const status = error?.status || 500;
  const statusText = error?.statusText || 'Internal Server Error';
  const errorMessage = error?.message || error?.data || 'An unexpected error has occurred. Please try again or contact support.';

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-illustration">
          <AlertOctagon size={64} className="icon-error" />
        </div>

        <h1 className="error-code">{status}</h1>
        <h2 className="error-title">{statusText}</h2>
        <p className="error-message">{errorMessage}</p>

        {import.meta.env.DEV && error?.stack && (
          <div className="error-diagnostics">
            <details>
              <summary>Diagnostics details (Development only)</summary>
              <pre>{error.stack}</pre>
            </details>
          </div>
        )}

        <div className="button-group">
          <button onClick={handleRefresh} className="btn-back">
            <RefreshCw size={18} />
            <span>Reload Page</span>
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
          max-width: 520px;
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
        
        .icon-error {
          color: #ef4444;
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
          margin: 0 0 24px;
        }

        /* Diagnostics details for developers */
        .error-diagnostics {
          width: 100%;
          text-align: left;
          margin-bottom: 24px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 12px;
          box-sizing: border-box;
          font-size: 13px;
        }
        
        .error-diagnostics details summary {
          cursor: pointer;
          color: #ef4444;
          font-weight: 500;
          outline: none;
        }
        
        .error-diagnostics pre {
          margin-top: 10px;
          margin-bottom: 0;
          white-space: pre-wrap;
          word-break: break-all;
          font-family: var(--mono);
          color: #ef4444;
          max-height: 150px;
          overflow-y: auto;
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

export default Error500;
