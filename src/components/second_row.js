import styles from './second_row.module.css'
import gif from '../assets/iberia_1.gif'

function SecondRow() {
  return (
    <section>
      <div className={styles.rowContainer}>
        <div className={styles.element1}>
          <h3>Iberia - We're united by much more than a language</h3>
          <h6>Director: Alberto Gross</h6>
          <h6>Cinematographer: Alan Douglas</h6>
          <h6>Producer: Lauriii ❤️</h6>
        </div>
        <div className={styles.element2}>
          <div className={styles.videoPlayerContainer}>
            <iframe
              title="TESTINGAL"
              src="https://player.vimeo.com/video/797661333?h=4d6ae4c834&byline=0&portrait=0&autoplay=0&loop=1&color=ffffff"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullscreen
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div className={styles.element3}>
          <img src={gif} alt="loading..." />
          <h5>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
            <br />
            Lorem ipsum lorem ipsem ipsum lorem ipsum
            <br />
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
            <br />
            Lorem ipsum lorem ipsum lorem
          </h5>
        </div>
      </div>
    </section>
  )
}

export { SecondRow }
