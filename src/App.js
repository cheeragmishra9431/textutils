import logo from './logo.svg';
import './App.css';
var name="harry";
function App() {
  return (
    <>
    <nav>
      <li>
        HOME
      </li>
      <li>
        About
      </li>
      <li>
        Contact
      </li>
      <div>
        {name}
      </div>
    </nav>
  </>
  );
}

export default App;
