import './App.css';
import { Colors } from './theme/Colors/Colors';

function App() {

  const textStyle= {
    color: Colors.pridefault,
  }

  return (
    <div className="App">
      <h1 style={textStyle}>Testing</h1>
      
    </div>
  );
}

export default App;
