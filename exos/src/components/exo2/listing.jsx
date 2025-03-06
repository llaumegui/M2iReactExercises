import { useState } from "react";
import ListingElement from "./listingElement";

const Listing = () => {
  const [elements, setElements] = useState([]);

  function addElement() {
    let firstName = document.querySelector(".firstName");
    let lastName = document.querySelector(".lastName");

    setElements([...elements,{"firstname":firstName.value,"lastname":lastName.value}])
  }

  return (
    <>
      <ul>
        {elements.map((p,id) => (
          <ListingElement firstname={p.firstname} lastname={p.lastname} key={id}/>
        ))}
      </ul>
      <input
        className="firstName"
        type="text"
        placeholder="Prénom"
      />
      <input
        className="lastName"
        type="text"
        placeholder="Nom"
      />
      <button onClick={addElement}>Valider</button>
    </>
  );
};
export default Listing;
