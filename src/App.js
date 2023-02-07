import { Header } from './components/header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <div>
          <div>
            <h3>Project info</h3>
          </div>
          <iframe
            src="https://player.vimeo.com/video/397382446?h=2eab52b806&color=b3b526&byline=0&portrait=0"
            width="640"
            height="360"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
          <div>
            <h3>Iberia, cada día es el primer día.</h3>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h3>Chupa chups, XXL playlist.</h3>
          </div>
          <iframe
            title="TESTINGAL-1"
            src="https://player.vimeo.com/video/411000287?h=4d6ae4c834"
            width="640"
            height="360"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </div>
        <div>
          <div>
            <h3>CaixaBank, Insights Center.</h3>
          </div>
          <iframe
            title="TESTINGAL-2"
            src="https://player.vimeo.com/video/554307374?h=f00a6ce73a"
            width="640"
            height="273"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default App
