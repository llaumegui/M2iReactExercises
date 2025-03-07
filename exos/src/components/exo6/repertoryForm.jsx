import { useState } from "react";

const RepertoryForm = ({ parentFunction }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const changeFirstName = (e) => setFirstName(e.target.value);
  const changeLastName = (e) => setLastName(e.target.value);

  function addElement() {
    parentFunction(firstName,lastName.toUpperCase());
  }

  return (
    <>
      <input
        className="firstName"
        type="text"
        placeholder="Prénom"
        value={firstName}
        onInput={changeFirstName}
      />
      &nbsp;
      <input
        className="lastName"
        type="text"
        placeholder="Nom"
        value={lastName}
        onInput={changeLastName}
      />
      <button type="submit" onClick={addElement}>
        Valider
      </button>
    </>
  );
};
export default RepertoryForm;
