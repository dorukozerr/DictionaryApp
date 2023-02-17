import { useContext } from 'react'
import { DictionaryContext } from '../context/DictionaryContext'

const WordDetails = () => {
  const { data } = useContext(DictionaryContext)

  return (
    <div className='wordDetailsContainer'>
      {data && (
        <>
          <div className='left'>
            <div className='word'>{data.word}</div>
            <div className='phonetics'>{data.phonetics[0].text}</div>
          </div>
          <div className='right'></div>
        </>
      )}
    </div>
  )
}

export default WordDetails
