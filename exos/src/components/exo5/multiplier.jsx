import { useEffect } from "react";
import { useState } from "react";

const Multiplier = ()=>{
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [valTarget,setValTarget] = useState(0);
  const [output,setOutput] = useState("");
  
  const changeTarget = (e)=>setValTarget(e.target.value);
  const changeVal1 = (e) => setVal1(e.target.value);
  const changeVal2 = (e) => setVal2(e.target.value);

  useEffect(()=>{
    if(val1*val2==valTarget)
        setOutput(`La multiplication des deux nombres fait bien ${valTarget}.`);
    else
    setOutput(`Les deux nombres multipliés ne font pas ${valTarget}.`);

  });

  return (
    <>
    <p>Valeur ciblée:&nbsp;
        <input
        className="valTarget"
        type="number"
        value={valTarget}
        onInput={changeTarget}
      />
    </p>

    <div style={{display:"flex", justifyContent:"center"}}>
    <input
        className="val1"
        type="number"
        value={val1}
        onInput={changeVal1}
      />
      <h2>&nbsp;x&nbsp;</h2>
      <input
        className="val2"
        type="number"
        value={val2}
        onInput={changeVal2}
      />
      </div>
      <h2>{output}</h2>
      </>
    );
}
export default Multiplier;