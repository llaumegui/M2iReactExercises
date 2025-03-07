import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonTable from "./components/exo1/personTable";
import Listing from "./components/exo2/listing";
import FizzBuzz from "./components/exo3/fizzbuzz";
import RealTimeName from "./components/exo4/realTimeName";
import Multiplier from "./components/exo5/multiplier";

function App() {
  const width = window.screen.width;
  return (
    <>
    <div style={{width:width}}></div>
      {/* Exo 1*/}
      <h1>Répertoire</h1>
      <PersonTable />
      {/* Exo 2*/}
      <hr />
      <h1>Listing</h1>
      <Listing />
      {/* Exo 3*/}
      <hr />
      <h1>FizzBuzz</h1>
      <FizzBuzz />
      {/* Exo 4*/}
      <hr />
      <h1>RealTime Name</h1>
      <RealTimeName />
      {/* Exo 5*/ }
      <h1> Multiplicateur</h1>
      <Multiplier/>
    </>
  );
}

export default App;
