import { Header } from './components/header'
import './App.css'
import gif from './assets/mygif.gif'

function App() {
  return (
    <div className="App">
      <Header />
      <script src="https://player.vimeo.com/api/player.js"></script>
      <section className="firstSection">
        <div className="firstSectionContainer">
          <iframe
            className="firstIframe"
            title="TESTINGAL"
            src="https://player.vimeo.com/video/797661333?h=4d6ae4c834&byline=0&portrait=0&autoplay=1&loop=1&color=ffffff"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
          <div className="projectDescription">
            <div className="projectInfo">
              <h3>Iberia - We're united by much more than a language</h3>
              <h6>Director: Alberto Gross</h6>
              <h6>Cinematographer: Alan Douglas</h6>
              <h6>Producer: Lauriii ❤️</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="firstSection">
        <div className="firstSectionContainer">
          <iframe
            className="firstIframe"
            title="TESTINGAL"
            src="https://player.vimeo.com/video/797664104?h=4d6ae4c834&byline=0&portrait=0&autoplay=0&loop=1&color=ffffff"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
          <div className="projectDescription">
            <div className="projectInfo">
              <h3>Chupa chups, XXL playlist.</h3>
              <h6>Director: Rodrigo Sorogoyen</h6>
              <h6>Cinematographer: Bradford Young</h6>
              <h6>Producer: Who that chick</h6>
            </div>
          </div>
        </div>
      </section>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          title="TESTINGAL"
          src="https://player.vimeo.com/video/797664104?h=4d6ae4c834&autoplay=0&loop=1&color=ffffff&byline=0&portrait=0&muted=1"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="projectInfo">
        <h3>Chupa chups, XXL playlist.</h3>
        <h6>Director: Rodrigo Sorogoyen</h6>
        <h6>Cinematographer: Bradford Young</h6>
        <h6>Producer: Who that chick</h6>
      </div>
      <img src={gif} alt="loading..." />
    </div>
  )
}

export default App
