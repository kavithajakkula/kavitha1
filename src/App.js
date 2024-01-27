import logo from './logo.svg';
import './App.css';
import Marks from './components/Marks';

function App() {
  return (
    <div className="App">
    <Marks  tel="93" hindi="92" eng="94" maths="90" sci="92" soc="84"/>
    <Marks name="Sunitha" tel="92" hindi="96" eng="98" maths="92" sci="88" soc="95"/>
    <Marks name="kavitha" tel="93" hindi="93" eng="94" maths="94" sci="90" soc="85"/>
    <Marks  name="vicky" tel="94" hindi="96" eng="96" maths="96" sci="96" soc="84"/>
    </div>
  );
}

export default App;
