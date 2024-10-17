 import './controlePanel.css'

export  function Phase({handlePhase}) {
  return (
    <div>
        <button className='btn phase-btn' onClick={handlePhase}>Phase</button>
    </div>
  )
}

export  function Category({handleCategory}) {
  return (
    <div>
        <button className='btn category-btn' onClick={handleCategory}>Category</button>
    </div>
  )
}

export  function Period({handleElementPeriod}) {
  return (
    <div>
        <button className='btn period-btn' onClick={handleElementPeriod}>Period</button>
    </div>
  )
}


 