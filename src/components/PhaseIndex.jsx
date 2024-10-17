import './phaseindex.css';

export function PhaseIndex({ showPhaseIndex }) {
    return (
        <div className={`${showPhaseIndex ? 'phaseIndex' : 'hidden'}`}>
            <div className="phase-solid">Solid</div>
            <div className="phase-gas"> Gas </div>
            <div className="phase-liquid"> Liquid </div>
        </div>
    );
}

export function CategoryIndex({ showCatIndex }) {
    return (
        <div className={showCatIndex ? 'cat-index' : 'hidden'}>
            <div className="cat-nonmetal">Nonmetal</div>
            <div className="cat-noble_gas"> noble_gas </div>
            <div className="cat-alkali_metal"> alkali_metal </div>
            <div className="cat-earth_metal">earth_metal </div>
            <div className="cat-metalloid">metalloid </div>
            <div className="cat-transition_metal">transition_metal </div>
            <div className="cat-lanthanide">lanthanide</div>
            <div className="cat-actinide">actinide </div>
        </div>
    );
}

 

export   function PeriodIndex({showPeriodIndex}) {
  return (
    <div className= {showPeriodIndex?'per-index':'hidden'}>
         <div className="pp pp1">1</div>
         <div className="pp pp2">2</div>
         <div className="pp pp3">3</div>
         <div className="pp pp4">4</div>
         <div className="pp pp5">5</div>
         <div className="pp pp6">6</div>
         <div className="pp pp7">7</div>
         <div className="pp pp8">8</div>
        
    </div>
  )
}


