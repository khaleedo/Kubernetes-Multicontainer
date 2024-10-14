import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "Client\node_modules\react-router-dom" ;
import OtherPage from './Other';
function App() {
  return (
    <Router>
      <header>
        <div>This is a multicontainer application</div>
        <Link to='/'>Home</Link>
        <Link to='/otherpage'>Other Page</Link>

      </header>
      <div>
      <Route exact  path="/" component={MainComponent} />
       <Route path= "/otherpage" component= {OtherPage} />
      </div>
    </Router>
  
  );
}

export default App;
