import React from 'react'

function Search({handleChange, handleItmeClick, input, open, searchCountries}) {
  return (<>
        <div className='container-search'>
          <img src="../public/search.svg" alt="" />
            <input 
              type="text" 
              placeholder='Search in the country'
              value={input} 
              onChange={handleChange}
            />
        </div>

      <ul className='autocomplete' 
        style={{boxShadow: input && open ? '1px 1px 5px #cdc4c4' : 'none'}}>
          { input && open ?
          searchCountries.map(({name}, index)=>{
            return <li key={index} className='autocomplete-itme' 
            onClick={handleItmeClick}>{name.common}</li>
          })
          : null }
      </ul>
  </>)
}

export default Search