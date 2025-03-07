import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonTable from "./components/exo1/personTable";
import Listing from "./components/exo2/listing";
import FizzBuzz from "./components/exo3/fizzbuzz";
import RealTimeName from "./components/exo4/realTimeName";

function App() {
  return (
    <>
      {/* Exo 1*/}
      <h1>Répertoire</h1>
      <PersonTable />
      {/* Exo 2*/}
      <hr />
      <h1>Listing</h1>
      <Listing />
      <hr />
      {/* Exo 3*/}
      <h1>FizzBuzz</h1>
      <FizzBuzz />
      <hr />
      {/* Exo 4*/}
      <h1>RealTimeName</h1>
      <RealTimeName />
    </>
  );
}

export default App;
