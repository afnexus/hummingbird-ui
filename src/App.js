import './App.css';
import { Colors } from './theme/Colors/Colors';
import ButtonWithMUI from './components/ButtonWithMUI/ButtonWithMUI';
function App() {

  
  const bodyStyles ={
    backgroundColor: 'black',
    
  }

  return (
    <div className="App" style={bodyStyles}>
      
      <ButtonWithMUI text='nice'/>
      
    </div>
  );
}

export default App;
