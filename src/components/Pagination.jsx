import React from 'react'

function Pagination({ countriesPerPage, totalCountries, paginate, pageColor, goOnePage, backOnePage }) {
    
    const pageNumbers = []
    
    for(let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++){
        pageNumbers.push(i)
    }
    
  return (
    <div className='container-pagination'>
      <button onClick={()=> backOnePage(pageColor)}>&#x3c;</button>
        {pageNumbers.map((elem, index)=>{            
            return <div key={index} style={{background: pageColor[index] ? '#939191' : ''}}
                    onClick={()=> paginate(elem, index)}>
                        {elem}
                   </div>
        })}
      <button onClick={()=> goOnePage(pageColor)}>&#x3e;</button>  
    </div>
  )
}

export default Pagination