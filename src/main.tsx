import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
baseUrl: 'https://app-j70vd1t6pzja.frontegg.com',
clientId: 'f662a16a-fe65-4139-8ec2-a1f93249ba0a',
appId: 'a74f28dc-a4d8-4a58-bee8-70fe2ec773dc'
};

const authOptions = {
keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<FronteggProvider
  contextOptions={contextOptions}
  hostedLoginBox={true}
  authOptions={authOptions}
>
  <App />
</FronteggProvider>
, document.getElementById('root') ); 