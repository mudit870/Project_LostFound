import './App.css';
import Information from './components/info/Information';
import Dashboard from './Dashboard';
import Login from './Login';
import Navbar from './Navbar';
import SearchOption from './SearchOption';

function App() {
  return (
    <div className="">
      <Navbar />
      <Information />
      <Login />
      <SearchOption />
      <Dashboard />
    </div>
  );
}

export default App;
