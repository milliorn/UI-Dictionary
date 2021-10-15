import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/category'

const Header = ({ setCategory, category, word, setWord, LightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightMode ? '#000' : '#fff'
      },
      type: LightMode ? 'light' : 'dark'
    }
  })

  const handleChange = (language) => {
    setCategory(language.target.value)
    setWord('')
  }

  return (
    <div className='header'>
      <span className='title'>{word ? word : 'Word Lexicon'}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            type='text'
            className='search'
            label='Search a Word'
            aria-required='true'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label='Language'
            aria-required='true'
            value={category}
            onChange={(e) => handleChange(e)}
            className='select'
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
