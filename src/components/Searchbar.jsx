import { useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import { DictionaryContext } from '../context/DictionaryContext'

const Searchbar = () => {
  const { searchInput, setSearchInput } = useContext(DictionaryContext)

  return (
    <div className='searchbarContainer'>
      <input
        value={searchInput}
        placeholder='Search for a word'
        onChange={e => setSearchInput(e.target.value)}
        type='text'
      />
      <div className='icon'>
        <BsSearch />
      </div>
    </div>
  )
}

export default Searchbar
