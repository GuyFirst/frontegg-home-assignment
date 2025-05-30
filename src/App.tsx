import './App.css';
import React, { useEffect } from 'react';
import {
  useAuth,
  useLoginWithRedirect,
  ContextHolder,
  AdminPortal
} from '@frontegg/react';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  useEffect(() => {
    console.log('User metadata:', user?.metadata?.customClaims);
  }, [user]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
  };

  const handleSettingsClick = () => {
    AdminPortal.show();
  };

  const switchTenant = (tenantId: string) => {
    ContextHolder.setTenantId(tenantId);
    window.location.reload();
  };

  const metadata = user?.metadata?.customClaims || {};

  // ➕ דוגמת Tenant IDs — תחליף בנתונים אמיתיים שלך!
  const tenantIds = [
    { id: '540ad493-19a0-450e-81d9-64928709d023', label: 'Main Tenant' },
    { id: 'tenant-id-2', label: 'QA Tenant' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#f7f7f7',
    }}>
      {isAuthenticated ? (
        <div style={{
          textAlign: 'center',
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#ff7f00',
            color: 'white',
            fontSize: '2rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem auto'
          }}>
            {user?.name?.split(' ').map(w => w[0]).join('').toUpperCase()}
          </div>

          <h2>Logged in as: <b>{user?.name}</b></h2>

          {metadata.isTestUser && (
            <div style={{
              marginTop: '0.5rem',
              color: 'white',
              backgroundColor: 'red',
              padding: '0.25rem 0.5rem',
              borderRadius: '5px',
              display: 'inline-block'
            }}>
              TEST USER
            </div>
          )}

          {metadata.accessLevel && (
            <div style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
              Role: {metadata.accessLevel}
            </div>
          )}

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => alert(user?.accessToken)}>What is my access token?</button>
            <button onClick={handleSettingsClick}>Settings</button>
            <button onClick={logout}>Click to logout</button>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <select
              onChange={(e) => switchTenant(e.target.value)}
              defaultValue=""
              style={{ padding: '0.5rem' }}
            >
              <option value="" disabled>Switch Tenant</option>
              {tenantIds.map(t => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>

          <div style={{
            marginTop: '2rem',
            textAlign: 'left',
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            borderRadius: '5px',
            maxWidth: '400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <h4>Metadata:</h4>
            <pre style={{ fontSize: '0.8rem' }}>
              {JSON.stringify(metadata, null, 2)}
            </pre>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
