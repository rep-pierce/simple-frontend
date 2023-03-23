import './App.css';
import { useEffect, useState } from 'react';
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch ('/users')
    .then((r) => r.json())
    .then(setUsers)
  }, [])

  function displayUsers(){
    return users.map(user => <UserCard user={user} key={user} /> )}

  return (
    <div className="App">
      {displayUsers()}
    </div>
  );
}

export default App;
