import './style.app.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Search from './components/Search'
import Pagination from './components/Pagination'

function App() {

  const [countries, setCountries] = useState([])
  const [input, setInput] = useState('')
  const [open, setOpen] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageColor, setPageColor] = useState([])
  const countriesPerPage = 20
  const lastCountryIndex = currentPage * countriesPerPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

  useEffect(()=>{

    async function fetchData() {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(res.data)

          const arr = new Array(Math.ceil(res.data.length / countriesPerPage)).fill(false)
          const initialPageColors = arr.map((_, i) => i === 0) 
            setPageColor(initialPageColors)

      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

  },[])  
  

  function handleChange(e){
    setInput(e.target.value)
    setOpen(true)
  }

  function handleItmeClick(e){
    setInput(e.target.textContent)
    setOpen(!open)
  }

  const searchCountries = countries.filter(({name})=>{
    return name.common.toLowerCase().includes(input.toLowerCase())
  })

  const paginate = (pageNumber, index) => {
    setPageColor(pageColor.map((_, i) => i === index ? true : false))
    setInput('')
    setCurrentPage(pageNumber)     
    window.scrollTo({ top: 0, behavior: 'smooth', })
  } 

  function goOnePage(arr){
    if(arr[arr.length - 1] === true) return
    else {
      const index = pageColor.indexOf(true) + 1
      setPageColor(pageColor.map((_, i) => i === index ? true : false))
      setInput('')
      setCurrentPage(currentPage => currentPage + 1) 
      window.scrollTo({ top: 0, behavior: 'smooth', })
    }
  }
  
  function backOnePage(arr){
    if(arr[0] === true) return
    else {
      const index = pageColor.indexOf(true) - 1
      setPageColor(pageColor.map((_, i) => i === index ? true : false))
      setInput('')
      setCurrentPage(currentPage => currentPage - 1) 
      window.scrollTo({ top: 0, behavior: 'smooth', })
    }
  }

  return (<>
    <Search 
      handleChange={handleChange}
      handleItmeClick={handleItmeClick}
      input={input} 
      open={open}
      searchCountries={searchCountries}
    />
    <Countries 
      countries={countries}
      currentCountry={currentCountry}
      searchCountries={searchCountries}
      input={input} 
    />
    <Pagination
      countriesPerPage={countriesPerPage}
      totalCountries={countries.length}
      paginate={paginate}
      pageColor={pageColor}
      goOnePage={goOnePage}
      backOnePage={backOnePage}
    />
  </>)
}

export default App