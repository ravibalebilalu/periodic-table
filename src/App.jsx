 import {  useEffect, useState } from "react";
 import elementsData from "../src/assets/pd_updated.json"; 
 //import elementsData from "../src/assets/periodicTable.json"

import Table from "./components/Table.jsx";
import ControlePanel from "./components/ControlePanel.jsx";

const App = () => {
     
    const [elementPhase,setElementPhase] = useState(false)

    const handlePhase = ()=>{
      setElementPhase(!elementPhase)
       
      
    }
    useEffect(()=>{
      console.log(elementPhase);
      
    },[elementPhase])
  
  return (
   <>
    <Table elementsData={elementsData} elementPhase={elementPhase}/>
    <ControlePanel handlePhase={handlePhase}/>
  
     
   </>

  );
};

export default App;
