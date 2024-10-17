import React from 'react';

function Element({ elementsData, elementName }) {
    const element = elementsData.elements.filter(
        (el) => el.name === elementName
    );

    return (
        <div className="element">
            {element.map((el) => (
                <div key={el.number}>
                    <p>{el.name}</p>
                     
                    <p>{el.appearance  }</p>
                    <p> {el.atomic_mass} </p>  
                    <p>{el.boil  } </p>
                    <p> {el.category}   </p>
                    <p> {el.density } </p> 

                    <p>  {el.discovered_by} </p>  
                    <p>{el.melt}</p>  
                    <p>{el.molar_heat}</p>  
                    <p>{el.named_by}</p>  
                    <p>{el.number}</p>  
                    <p>{el.period }</p> 

                    <p>{el.group} </p>  
                    <p>{el.phase}</p>  
                    <a href={el.source }></a> 
                    <img src={el.bohr_model_image} alt={el.name} />  
                     

                     
                    <p>{el.summary  }</p>
                    <p>{el.symbol}</p>  
                    <p>{el.xpos  }</p>
                    <p>{el.ypos}</p>  
                    <p>{el.wxpos }</p> 
                    <p>{el.wypos}</p>  
 
                    <p>{el.shells  }</p>
                    <p>{el.electron_configuration }</p> 
                    <p>{el.electron_configuration_semantic }</p> 
 
                    <p>{el.electron_affinity  }</p>
                    <p>{el.electronegativity_pauling  }</p>
                    <p>{el.ionization_energies }</p> 
 
                     
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
