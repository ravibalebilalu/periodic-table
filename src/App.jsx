import { useEffect, useState } from 'react';
import elementsData from '../src/assets/pd_updated.json';
//import elementsData from "../src/assets/periodicTable.json"

import Table from './components/Table.jsx';
import { Phase, Category, Period } from './components/ControlePanel.jsx';

const App = () => {
    const [elementPeriod, setElementPeriod] = useState(true);
    const [elementPhase, setElementPhase] = useState(false);
    const [elementCategory, setElementCategory] = useState(false);

    const handlePhase = () => {
        setElementPhase(true);
        setElementCategory(false);
        setElementPeriod(false);
    };
    const handleCategory = () => {
        setElementCategory(true);
        setElementPhase(false);
        setElementPeriod(false);
    };
    const handleElementPeriod = () => {
        setElementPeriod(true);
        setElementPhase(false);
        setElementCategory(false);
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
