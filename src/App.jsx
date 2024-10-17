import { useEffect, useState } from 'react';
import elementsData from '../src/assets/pd_updated.json';
//import elementsData from "../src/assets/periodicTable.json"

import Table from './components/Table.jsx';
import { Phase, Category, Period } from './components/ControlePanel.jsx';
import  {PhaseIndex, CategoryIndex,PeriodIndex } from './components/PhaseIndex.jsx';

const App = () => {
    const [elementPeriod, setElementPeriod] = useState(true);
    const [elementPhase, setElementPhase] = useState(false);
    const [elementCategory, setElementCategory] = useState(false);
    const [showPhaseIndex,setShowPhaseIndex] = useState(false)
    const [showCatIndex,setShowCatIndex] = useState(true)
    const [showPeriodIndex,setShowPeriodIndex] = useState(false)

    const handlePhase = () => {
        setElementPhase(true);
        setElementCategory(false);
        setElementPeriod(false);
        setShowPhaseIndex(true)
        setShowCatIndex(false)
        setShowPeriodIndex(false)
    };
    const handleCategory = () => {
        setElementCategory(true);
        setElementPhase(false);
        setElementPeriod(false);
        setShowPhaseIndex(false)
        setShowCatIndex(true)
        setShowPeriodIndex(false)
    };
    const handleElementPeriod = () => {
        setElementPeriod(true);
        setElementPhase(false);
        setElementCategory(false);
        setShowPhaseIndex(false)
        setShowCatIndex(false)
        setShowPeriodIndex(true)
    };
    return (
        <>

<div className="controle-panel">
                <Phase handlePhase={handlePhase} />
                <Category
                    elementCategory={elementCategory}
                    handleCategory={handleCategory}
                />
                <Period
                    elementPeriod={elementPeriod}
                    handleElementPeriod={handleElementPeriod}
                />
            </div>
            <PhaseIndex showPhaseIndex={showPhaseIndex}/>
            <CategoryIndex showCatIndex={showCatIndex}/>
            <PeriodIndex showPeriodIndex={showPeriodIndex}/>
            <Table
                elementsData={elementsData}
                elementPhase={elementPhase}
                elementCategory={elementCategory}
                elementPeriod={elementPeriod}
            />

           
          
        </>
    );
};

export default App;
