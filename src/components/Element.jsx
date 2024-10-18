import './element.css';

function Element({ elementsData, elementName, handleShowTable, showTable }) {
    const element = elementsData.elements.filter(
        (el) => el.name === elementName
    );

    return (
        <div className={`element ${showTable ? 'hidden' : ''}`}>
            <button className='table-btn' onClick={handleShowTable}>Table</button>
            {element.map((el) => (
                <div key={el.number}>
                    <p className="elname">{el.name}</p>
                    <p className="elsymbol">{el.symbol}</p>
                    <div className="firstrow">
                        <div className="firstdiv">
                            <p className="number_">
                                <b>Number</b> : {el.number}
                            </p>
                            <p className="appearance">
                                <b>Appearance : </b> {el.appearance}
                            </p>
                            <p className="atomic_mass">
                                <b>Atomic Mass : </b>
                                {el.atomic_mass}
                            </p>
                            <p className="boil">
                                <b>Boiling Point : </b>
                                {el.boil}
                            </p>
                            <p className="category">
                                <b>Category : </b> {el.category}{' '}
                            </p>
                            <p className="density">
                                <b>Density : </b>
                                {el.density}
                            </p>
                        </div>

                        <div className="seconddiv">
                            <p className="discovered_by">
                                <b> Discovered By</b> : {el.discovered_by}{' '}
                            </p>
                            <p className="melt">
                                <b>Melting Point</b> : {el.melt}
                            </p>
                            <p className="molar_heat">
                                <b>Molar Heat</b> : {el.molar_heat}
                            </p>
                            <p className="named_by">
                                <b>Named By</b> : {el.named_by}
                            </p>

                            <p className="period">
                                <b>Period</b> : {el.period}
                            </p>
                        </div>
                    </div>

                    <div className="thirddiv">
                        <p className="group">
                            <b>Group</b> : {el.group}{' '}
                        </p>
                        <p className="phase">Phase : {el.phase}</p>
                        <p>
                            {' '}
                            <a className="source" href={el.source}>
                                Source 🧾️
                            </a>
                        </p>
                    </div>
                    <div className="fourthdiv">
                        <img
                            className="bohr_model_image"
                            src={el.bohr_model_image}
                            alt={el.name}
                        />

                        <p className="summary">{el.summary}</p>
                    </div>

                   <div className="fifthdiv">
                    <p className='xpos'>XPOS : {el.xpos}</p>
                    <p className='ypos'>YPOS : {el.ypos}</p>
                    <p className='wxpos'> WXPOS : {el.wxpos}</p>
                    <p className='wypos'>WYPOS : {el.wypos}</p>
                   </div>

                   <div className="sixthdiv">
                   <p className='electron_configuration'> <p className='con-title'>Electron Configuration </p> <p className='config'>{el.electron_configuration}</p></p>
                   <p className='electron_configuration_semantic'> <p className='ecs-title'>Electron Configuration Semantic </p> <p className='ecs'>{el.electron_configuration_semantic}</p></p>
                   </div>

                    <div className="seventhdiv">
                    <p className='shells'>Shells : {el.shells}</p>
                    <p className='electron_affinity'>Electron Affinity : {el.electron_affinity}</p>
                    <p className='electronegativity_pauling'> Electronegativity Pauling : {el.electronegativity_pauling}</p>
                    <p className='ionization_energies'>Ionization Energies : {el.ionization_energies}</p>
                    <p className='block'>Block : {el.block}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Element;

 