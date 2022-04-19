import logo from './logo.svg';
import './App.css';
import Progress from './components/ButtonWithMUI/Progress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>

      <Progress value={"84"} BarBackgroundColor={"#385682"} BarColor={"#5297FF"} textColor={"#C7DDFF"}  > </Progress>
    </div>
  );
}

export default App;
