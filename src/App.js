import logo from './logo.svg';
import './App.css';
import Progress from './components/Progress/Progress';
import TypographyTextBox from './theme/Typography/TypographyTextBox';

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

      <TypographyTextBox type="h1" text="The quick brown fox jumps ..." />
      <TypographyTextBox type="h2" text="The quick brown fox jumps over the ..." />

      <Progress value={"84"} BarBackgroundColor={"#385682"} BarColor={"#5297FF"} textColor={"#C7DDFF"}  > </Progress>
    </div>
  );
}

export default App;
