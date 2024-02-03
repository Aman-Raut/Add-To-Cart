
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>App Component with Redux.</h1>
      <User data={{name:'Aman Raut'}} />
    </div>
  );
}

export default App;
