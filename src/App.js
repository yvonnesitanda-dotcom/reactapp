
import './App.css';
import Firstcomponent from './components/First component';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Seventhcomponent from './components/Seventhcomponent';
import Eighthcomponent from './components/Eighthcomponent';
import { BrowserRouter  as Router , Routes , Route  , Link} from 'react-router-dom';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router>
      <div className="App">

        <nav>
          <Link to ="/first" className='navlinks'>First</Link>
          <Link to ="/second" className='navlinks'>Second</Link>
          <Link to="/third" className='navlinks'>Third</Link>
          <Link to="Fourth" className='navlinks'>Fourth</Link>
          <Link to ="/fifth" className='navlinks'>Fifth</Link>
          <Link to="/sixth" className='navlinks' >Sixth</Link>
          <Link to ="/seventh" className='navlinks'>Seventh</Link>
          <Link to= "/eighth" className='navlinks'>Eighth</Link>
        </nav>
      <header className="App-header">
        <h1>Welcome to learning React JS</h1>
        <h2>React is fun</h2>

        
        </header>
        {/* Below we render/ display/ show our components*/}
        <Routes>
         <Route path = "/first" element ={<Firstcomponent/>} />
         <Route path = "/second" element ={<Secondcomponent/>} />
         <Route path= "/third" element={<Thirdcomponent/>}/>
         <Route path ="/fourth" element= {<Fourthcomponent/>}/>
         <Route path="/fifth" element={<Fifthcomponent/>
         }/>
         <Route path="/sixth" element={<Sixthcomponent/>}/>
         <Route path="/seventh" element={<Seventhcomponent/>}/>
        <Route path= "/eighth" element={<Eighthcomponent/>}/>
        <Route path="*" element={<Notfound/>}/>
        </Routes>
        
        
    </div>
    </Router>
  );
}

export default App;

//jsx

// Create two other components i.e contact us and help component and style them with your own content then you render them on App.js component
