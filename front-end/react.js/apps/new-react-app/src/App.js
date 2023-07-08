import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import ApiUserPortal from './ApiUserPortal';
import ApiUserDetails from './ApiUserDetails';
import AdminPortal from './AdminPortal';
import UserPortal from './UserPortal';
import UserDetails from './UserDetails';
import CounterWithSideEffect from './CounterWithSideEffect';

function App() {
  const users = [
    {
      id: 1,
      firstName: "Akash",
      lastName: "Das",
      email: "akash.das@xyz.com",
      password: "PASSWORD"
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@xyz.com",
      password: "PASSWORD"
    },
    {
      id: 3,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@xyz.com",
      password: "PASSWORD"
    }
  ];

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          |
          <li><a href="/counter">Counter</a></li>
          |
          <li><a href="/api/users">API Users</a></li>
          <li><a href="/api/users/1">API User 1</a></li>
          <li><a href="/api/users/2">API User 2</a></li>
          |
          <li><a href="/admin">Admin</a></li>
          <li><a href="/users">Users</a></li>
          <li><a href="/users/1">User 1</a></li>
          <li><a href="/users/2">User 2</a></li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route exact path="/" element={
            <>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Our React app works!</h1>
              </header>
            </>
          } />

          <Route exact path="/counter" element={<CounterWithSideEffect />} />

          <Route exact path="/api/users" element={<ApiUserPortal />} />
          <Route exact path="/api/users/:id" element={<ApiUserDetails />} />

          <Route exact path="/users/:id" element={<UserDetails users={users} />} />
          <Route exact path="/users" element={<UserPortal users={users} />} />
          <Route exact path="/admin" element={<AdminPortal />} />
        </Routes>
      </main>

      <footer>
        Created by Akash
      </footer>
    </div>
  );
}

export default App;
