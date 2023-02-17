import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Topbar from './components/Topbar'
import Searchbar from './components/Searchbar'
import WordDetails from './components/WordDetails'
import Meanings from './components/Meanings'

export function App() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <section className='appContainer'>
      <div className='app'>
        <Topbar />
        <Searchbar />
        <WordDetails />
        <Meanings />
      </div>
    </section>
  )
}
