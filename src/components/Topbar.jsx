import { useState, useContext } from 'react'
import { BiBook } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFillMoonFill } from 'react-icons/bs'
import { ThemeContext } from '../context/ThemeContext'

const options = ['serif', 'sans-serif', 'monospace']

const Topbar = () => {
  const { theme, setTheme, setFonts } = useContext(ThemeContext)
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const [selectedFont, setSelectedFont] = useState('sans-serif')
  const [isSwitchboxActive, setIsSwitchboxActive] = useState(false)

  return (
    <div className='topbar'>
      <div className='left'>
        <BiBook />
      </div>
      <div className='right'>
        <div
          className={`${
            isDropdownActive
              ? 'dropdownContainer activeDropdown'
              : 'dropdownContainer'
          }`}>
          <div
            className='dropdownBtn'
            onClick={() => setIsDropdownActive(!isDropdownActive)}>
            <span>{selectedFont}</span>
            <IoIosArrowDown />
          </div>
          <div className='dropdown'>
            {options.map(option => (
              <div
                className='item'
                key={option}
                onClick={() => {
                  setSelectedFont(option)
                  setIsDropdownActive(false)
                  setFonts(option)
                }}>
                {option}
              </div>
            ))}
          </div>
        </div>
        <div className='line'></div>
        <div
          className={`${
            isSwitchboxActive
              ? 'switchboxContainer activeSwitchbox'
              : 'switchboxContainer'
          }`}>
          <div
            className='switchbox'
            onClick={() => (
              setIsSwitchboxActive(!isSwitchboxActive),
              theme === 'dark' ? setTheme('light') : setTheme('dark')
            )}>
            <div className='dot'></div>
          </div>
          <BsFillMoonFill />
        </div>
      </div>
    </div>
  )
}

export default Topbar
