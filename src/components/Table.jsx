import './table.css';

function Table({ elementsData,elementPhase,elementCategory,elementPeriod }) {
     
    
    
    const filters = [
        { min: 0, max: 54 },  
        { min: 55, max: 56 }, 
        { min: 72, max: 88 }, 
        { min: 104, max: 118 }, 
        { min: 57, max: 71 }, 
        { min: 89, max: 103 }  
    ];

    
    const filteredElements = filters.map(filter => 
        elementsData.elements.filter(el => el.number >= filter.min && el.number <= filter.max)
    );

    return (
        <div>
            <ul className="table">
                {filteredElements.flat().map((el) => (
                    <div
                        className={`el ${elementPhase?el.phase.toLowerCase(): '' } ${elementCategory?el.modified_category:''}
                        p${elementPeriod?el.period:''}
                        ${el.modified_category==='lanthanide'? 'lanthanide-class':''}
                        `}
                         
                        id={el.symbol.toLowerCase()}
                        key={el.number}
                    >
                        <p className='symbol'>{el.symbol}</p>
                        <p className='number'>{el.number}</p>
                        <p className="name"> {el.name} </p>
                         
                      
                         
                         
                          
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Table;
