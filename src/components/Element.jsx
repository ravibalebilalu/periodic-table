import './element.css';

function Element({ elementsData, elementName, handleShowTable, showTable }) {
    const element = elementsData.elements.filter(
        (el) => el.name === elementName
    );

    return (
        <div className={`element ${showTable ? 'hidden' : ''}`}>
            <button onClick={handleShowTable}>Table</button>
            {element.map((el) => (
                <div key={el.number}>
                      <p className="elname">{el.name}</p>
                    <div className="firstrow">
                        <div className="firstdiv">
                          
                            <p className="appearance">
                                <b>Appearance:</b> {el.appearance}
                            </p>
                            <p className="atomic_mass">
                                <b>Atomic Mass:</b>
                                {el.atomic_mass}
                            </p>
                            <p className="boil">
                                <b>Boiling Point:</b>
                                {el.boil}
                            </p>
                            <p className="category">
                                <b>Category:</b> {el.category}{' '}
                            </p>
                            <p className="density">
                                <b>Density : </b>
                                {el.density}
                            </p>
                        </div>

                        <div className="seconddiv">
                            <p> {el.discovered_by} </p>
                            <p>{el.melt}</p>
                            <p>{el.molar_heat}</p>
                            <p>{el.named_by}</p>
                            <p>{el.number}</p>
                            <p>{el.period}</p>
                        </div>
                    </div>

                    <p>{el.group} </p>
                    <p>{el.phase}</p>
                    <a href={el.source}></a>
                    <img src={el.bohr_model_image} alt={el.name} />

                    <p>{el.summary}</p>
                    <p>{el.symbol}</p>
                    <p>{el.xpos}</p>
                    <p>{el.ypos}</p>
                    <p>{el.wxpos}</p>
                    <p>{el.wypos}</p>

                    <p>{el.shells}</p>
                    <p>{el.electron_configuration}</p>
                    <p>{el.electron_configuration_semantic}</p>

                    <p>{el.electron_affinity}</p>
                    <p>{el.electronegativity_pauling}</p>
                    <p>{el.ionization_energies}</p>

                    <p>{el.block}</p>
                </div>
            ))}
        </div>
    );
}

export default Element;

const filterNobleGases = () => {
    const nobleGases = elements.filter(
        (element) => element.category?.toLowerCase() === 'noble gas'
    );
    setElements(nobleGases);
};
