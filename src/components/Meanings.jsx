import { useContext } from 'react'
import { DictionaryContext } from '../context/DictionaryContext'

const Meanings = () => {
  const { data } = useContext(DictionaryContext)

  return (
    <div className='meaningsContainer'>
      {data &&
        data.meanings.map((meaning, index) => (
          <div className='meaning' key={index}>
            <div className='c1'>
              <span>{meaning.partOfSpeech}</span>
              <div className='line'></div>
            </div>
            <div className='c2'>Meaning</div>
            <div className='c3'>
              <ul>
                {meaning.definitions.map((definition, index) => (
                  <li key={index}>
                    <span>{definition.definition}</span>
                    <span>{definition.example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Meanings
