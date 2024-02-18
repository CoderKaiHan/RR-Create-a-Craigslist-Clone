// Import data


// Import components
import './App.css';
import Searchbar from './searchbar';
import Sidebar from './sidebar';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Sidebar/>
        <Searchbar/>
      </div>
    </div>
  );
}

export default App;
