
import './App.css';
import Firstcomponent from './components/First component';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Seventhcomponent from './components/Seventhcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning React JS</h1>
        <h2>React is fun</h2>

        
        </header>
        {/* Below we render/ display/ show our components*/}
        <Firstcomponent/>
        <Secondcomponent/>
        <Thirdcomponent/>
        <Fourthcomponent/>
        <Fifthcomponent/>
        <Sixthcomponent/>
        <Seventhcomponent/>
        
    </div>
  );
}

export default App;

//jsx

// Create two other components i.e contact us and help component and style them with your own content then you render them on App.js component
