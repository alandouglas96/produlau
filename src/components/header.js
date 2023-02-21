import './header.css'

function Header() {
  return (
    <header>
      <div className="headerContainer">
        <div className="name">
          <h1>Laura Cusí</h1>
          <h3>Productora</h3>
        </div>
        <div className="navigator">
          <div className="title">work</div>
          <div className="title">contact</div>
        </div>
      </div>
    </header>
  )
}

export { Header }
