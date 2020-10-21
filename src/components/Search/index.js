import React, { useState } from 'react'
import './style.css'
import data from '../../data/blog.json'
import { useSearch, useSearchUpdate } from './SearchContext.js'

/**
* @author
* @function Search
**/

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const darkTheme = useSearch()
  const toggleSearch = useSearchUpdate()
  const searchStyles = {
    backgroundColor: darkTheme ? 'pink': 'blue'
  }

  const handleChange = event => {
     setSearchTerm(event.target.value)
    //  props.onSearchChange
   }
  React.useEffect(() => {
     const results = data.data.filter(post =>
       post.blogText.toLowerCase().includes(searchTerm)
     )
     setSearchResults(results)     
   }, [searchTerm])

  return(
    <div className="search">
      <form onSubmit={props.submitSearch}>
        <input type="text" className={props.searchClass} placeholder="Search" value={searchTerm} onChange={handleChange} onBlur={handleChange} />
        <img onClick={props.openSearch} className="searchIcon" src={require('../../assets/icons/search-32.png')} alt="Search" />
      </form>
    </div>
    )
  }

export default Search