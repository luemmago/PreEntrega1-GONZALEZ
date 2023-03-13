import CartWidget from './CartWidget' 

const Navbar = () => {

  return (
    <div>

      <h1> FUTBOL PASION </h1>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Inicio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://www.adidas.com.ar/argentina">Seleccion Argenina</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.adidas.com.ar/river_plate">Primera Division</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Otras Categorias
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Primera Nacional</a></li>
                  <li><a className="dropdown-item" href="#">Divisiones menores</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><a className="dropdown-item" href="#">Algo más aquí</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar