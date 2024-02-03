import './App.css';
import User from './User';
import HomeContainer from './container/HomeContainer';

function App() {
  return (
    <div className="App">
      <h1>App Component with Redux.</h1>
      <User data={{name:'Aman Raut', age:21}} />
      <HomeContainer />
    </div>
  );
}

export default App;
