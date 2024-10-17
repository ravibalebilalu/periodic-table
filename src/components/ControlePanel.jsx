 import './controlePanel.css'

export  function Phase({handlePhase,elementPhase,elementCategory}) {
  return (
    <div>
        <button className={`btn phase-btn ${elementPhase?'active': ''}`} onClick={handlePhase}>Phase</button>
         

    </div>
  )
}

export  function Category({handleCategory,elementCategory}) {
  return (
    <div>
        <button className={`btn category-btn ${elementCategory?'active':''}`} onClick={handleCategory}>Category</button>
    </div>
  )
}

export  function Period({handleElementPeriod,elementPeriod}) {
  return (
    <div>
        <button className= {`btn period-btn ${elementPeriod? 'active': ''}`} onClick={handleElementPeriod}>Period</button>
    </div>
  )
}


 