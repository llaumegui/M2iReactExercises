import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonTable from "./components/exo1/personTable";
import Listing from "./components/exo2/listing";
import FizzBuzz from "./components/exo3/fizzbuzz";
import RealTimeName from "./components/exo4/realTimeName";
import Multiplier from "./components/exo5/multiplier";
import FormRepertory from "./components/exo6/repertoryForm";
import RepertoryTable from "./components/exo6/repertoryTable";
import { useState } from "react";
import LoginForm from "./components/exo7/loginForm";

function App() {
  const width = window.screen.width;

  // Exo 6
  let formContacts = [];
  const [formArray,setFormArray] = useState([])
  function addToRepertory(firstName,lastName){
    formContacts.push({"firstname":firstName,"lastname":lastName});
    setFormArray(formContacts)
  }

  // Exo 7
  function printUser(username, password){
    console.log(`username: ${username}\npassword: ${password}`);
  }

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
      <hr />
      <h1> Multiplicateur</h1>
      <Multiplier/>
      {/* Exo 6*/ }
      <hr />
      <h1>Formulaire</h1>
      <RepertoryTable contacts={formArray}/>
      <FormRepertory parentFunction={addToRepertory}/>
      {/* Exo 7*/ }
      <hr />
      <h1>Formulaire Login</h1>
      <LoginForm parentFunction={printUser}/>
      </>
  );
}

export default App;
