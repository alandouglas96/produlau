import { Header } from './components/header'
import { FirstRow } from './components/first_row'
import { SecondRow } from './components/second_row'
// import styles from './App.module.css'
import underConstructionGif from './assets/under_construction.webp'

// ACTIVATE UNDER CONSTRUCTION
const isUnderConstruction = false

function App() {
  return (
    <div>
      {isUnderConstruction ? (
        <UnderConstruction />
      ) : (
        <>
          <Header />
          <FirstRow />
          <SecondRow />
          <script src="https://player.vimeo.com/api/player.js"></script>
        </>
      )}
    </div>
  )
}

export default App

function UnderConstruction() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
      }}
    >
      <h1 style={{ textAlign: 'center', margin: 0, paddingTop: '15px' }}>
        Under construction ♡
      </h1>
      <img
        style={{ width: '80%', margin: '0 10%' }}
        src={underConstructionGif}
        alt="Under construction..."
      />
    </div>
  )
}
