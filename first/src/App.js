import logo from './logo.svg';
import './App.css';


function App() {
  let a = "Krishna";
  let obj = {
    'name' : "Krishna",
    'class' : "BA"
  }
  let j = true;
  return (
    <div className="main">
     { a }
     {obj.class}
    { (j) ?
    <h1 style={{ color:"red",backgroundColor:"yellow"}}>ok</h1>
     :
     ""
     }

    </div>
  );
}

export default App;
