import { Header } from './components/header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <FeaturedSection /> */}
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          title="TESTINGAL"
          src="https://player.vimeo.com/video/397382446?h=2eab52b806&autoplay=1&loop=1&color=ffffff&byline=0&portrait=0"
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
      <script src="https://player.vimeo.com/api/player.js"></script>
      <div className="projectInfo">
        <h3>Iberia, cada día es el primer día.</h3>
        <h6>Director: Alberto Gross</h6>
        <h6>Cinematographer: Alan Douglas</h6>
        <h6>Producer: Lauriii ❤️</h6>
      </div>
      {/* <section className="firstSection">
        <div className="firstSectionContainer">
          <iframe
            className="firstIframe"
            title="TESTINGAL"
            src="https://player.vimeo.com/video/397382446?h=4d6ae4c834&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
          <div className="projectDescription">
            <div className="projectInfo">
              <h3>Iberia, cada día es el primer día.</h3>
              <h6>Director: Alberto Gross</h6>
              <h6>Cinematographer: Alan Douglas</h6>
              <h6>Producer: Lauriii ❤️</h6>
            </div>
          </div>
        </div>
      </section> */}
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          title="TESTINGAL"
          src="https://player.vimeo.com/video/411000287?h=4d6ae4c834&autoplay=0&loop=1&color=ffffff&byline=0&portrait=0&muted=1"
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
      <div style={{ padding: '42.6% 0 0 0', position: 'relative' }}>
        <iframe
          title="TESTINGAL"
          src="https://player.vimeo.com/video/554307374?h=f00a6ce73a&autoplay=0&loop=1&byline=0&portrait=0&color=ffffff&muted=1"
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
        <h3>CaixaBank, Insights Center.</h3>
        <h6>Director: Denise Villeneuve</h6>
        <h6>Cinematographer: Roger Deakins</h6>
        <h6>Producer: Lauriii the best</h6>
      </div>
      {/* <section className="secondSection">
        <div>
          <iframe
            title="TESTINGAL-1"
            src="https://player.vimeo.com/video/411000287?h=4d6ae4c834"
            width="640"
            height="360"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
          <div>
            <h3>Chupa chups, XXL playlist.</h3>
          </div>
        </div>
        <div>
          <iframe
            title="TESTINGAL-2"
            src="https://player.vimeo.com/video/554307374?h=f00a6ce73a"
            width="640"
            height="273"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
          <div>
            <h3>CaixaBank, Insights Center.</h3>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default App
