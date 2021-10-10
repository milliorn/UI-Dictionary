import { Container, Switch, withStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Definitions from './components/Definitions/Definitions'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const App = () => {
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState('en')
    const [LightMode, setLightMode] = useState(false)
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      )
      setMeanings(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dictionaryApi()
    // eslint-disable-next-line
  }, [word, category])

  const DarkMode = withStyles({
    switchBase: {
      color: grey[50],
      '&$checked': {
        color: grey[900]
      },
      '&$checked + $track': {
        backgroundColor: grey[500]
      },
    },
    checked: {},
    track: {},
    })(Switch)

  return (
    <div
      className='App'
      style={{
        height: '100vh',
        backgroundColor: LightMode ? '#fff' : '#282c34',
        color: LightMode ? 'black' : 'white',
        transition: 'all 0.8s linear'
      }}
    >
      <Container
        maxWidth='md'
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-evenly'
        }}
      >
        <div
          style={{ position: 'absolute', top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightMode ? 'Light' : 'Dark'} Mode</span>
          <DarkMode
            checked={LightMode}
            onChange={() => setLightMode(!LightMode)}
          />
        </div>
        <Header
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          word={word}
          setMeanings={setMeanings}
          LightMode={LightMode}
        />
        {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            LightMode={LightMode}
            category={category}
          />
        )}
      </Container>
      <Footer />
    </div>
  )
}

export default App
