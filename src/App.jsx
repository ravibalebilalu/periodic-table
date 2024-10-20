import { useEffect, useState } from 'react';
import elementsData from '../src/assets/pd_updated.json';
//import elementsData from "../src/assets/periodicTable.json"

import Table from './components/Table.jsx';
import { Phase, Category, Period } from './components/ControlePanel.jsx';
import {
    PhaseIndex,
    CategoryIndex,
    PeriodIndex,
} from './components/PhaseIndex.jsx';
import Element from './components/Element.jsx';

const App = () => {
    const [elementPeriod, setElementPeriod] = useState(true);
    const [elementPhase, setElementPhase] = useState(false);
    const [elementCategory, setElementCategory] = useState(false);
    const [showPhaseIndex, setShowPhaseIndex] = useState(false);
    const [showCatIndex, setShowCatIndex] = useState(true);
    const [showPeriodIndex, setShowPeriodIndex] = useState(false);
    const [elementName,setElementName] = useState('')
    const [showTable,setShowTable] = useState(true)

    const handlePhase = () => {
        setElementPhase(true);
        setElementCategory(false);
        setElementPeriod(false);
        setShowPhaseIndex(true);
        setShowCatIndex(false);
        setShowPeriodIndex(false);
    };
    const handleCategory = () => {
        setElementCategory(true);
        setElementPhase(false);
        setElementPeriod(false);
        setShowPhaseIndex(false);
        setShowCatIndex(true);
        setShowPeriodIndex(false);
    };
    const handleElementPeriod = () => {
        setElementPeriod(true);
        setElementPhase(false);
        setElementCategory(false);
        setShowPhaseIndex(false);
        setShowCatIndex(false);
        setShowPeriodIndex(true);
    };

     const getElementName = (elementName)=>{
         setElementName(elementName)
         setShowTable(false)
        
     }
     const handleShowTable = ()=>setShowTable(true)
    return (
        <>
            <Element elementsData={elementsData}
                elementName={elementName}
                 handleShowTable={handleShowTable}
                 showTable={showTable}
                />

           <div className={`mainpage ${!showTable? 'hidden':''}`}>
           <div className="controle-panel">
                <Phase handlePhase={handlePhase} elementPhase={elementPhase} />
                <Category
                    elementCategory={elementCategory}
                    handleCategory={handleCategory}
                />
                <Period
                    elementPeriod={elementPeriod}
                    handleElementPeriod={handleElementPeriod}
                />
            </div>
            <PhaseIndex showPhaseIndex={showPhaseIndex} />
            <CategoryIndex showCatIndex={showCatIndex} />
            <PeriodIndex showPeriodIndex={showPeriodIndex} />
            <Table
                elementsData={elementsData}
                elementPhase={elementPhase}
                elementCategory={elementCategory}
                elementPeriod={elementPeriod}
                getElementName={getElementName}
            />
           </div>
        </>
    );
};

export default App;
