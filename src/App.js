import HomePage from './HomePage';
import Dashboard from './Dashboard';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/op_dash" component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
