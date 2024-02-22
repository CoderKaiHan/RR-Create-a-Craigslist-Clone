// Import data


// Import components
import './App.css';
import Searchbar from './searchbar';
import Sidebar from './sidebar';
import Directory from './directory';
import Gallery from './gallery';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">

        <Sidebar/>
        <Searchbar/>
        <Directory/>
        <Gallery/>
        
        
      </div>
    </div>
  );
}

export default App;
