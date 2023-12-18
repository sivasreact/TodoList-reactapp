import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
        <input type='text'  role='searchbox' placeholder='search-items' id='search'
        value={search} onChange={(e) => setSearch(e.target.value)}/>
    </form>
  )
}

export default Search;