import React from "react";
import Invoice from '../../src/views/invoice';
import Login from '../../src/views/login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// move to component
function Index() {
  return <h2>Home</h2>;
}

// move to component
function About() {
  return <h2>About</h2>;
}

// move to component
function Users() {
  return <h2>Users</h2>;
}

// move to component
function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/invoice">Invoice</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <Header/>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/login/" component={Login} />
        <Route path="/invoice/" component={Invoice} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;
