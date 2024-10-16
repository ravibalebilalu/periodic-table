import React from 'react'

function ControlePanel({handlePhase}) {
  return (
    <div>
        <button onClick={handlePhase}>Phase</button>
    </div>
  )
}

export default ControlePanel