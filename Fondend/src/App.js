import { useContext } from 'react';
import './App.scss';
import { Router } from './Routers/routers';
import { UserContext } from './context/Providercontext';
function App() {
  const { user } = useContext(UserContext);
  console.log('user', user)
  return (
    <Router />
  );
}

export default App;
