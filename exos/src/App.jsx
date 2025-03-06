import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonTable from './components/exo1/personTable';
import Listing from "./components/exo2/listing";
import FizzBuzz from "./components/exo3/fizzbuzz";

function App() {
  return (
    <>
      <h1>Répertoire</h1>
      <PersonTable/>
      <hr/>
      <h1>Listing</h1>
      <Listing/>
      <hr/>
      <h1>FizzBuzz</h1>
      <FizzBuzz/>
    </>
  );
}

export default App;
