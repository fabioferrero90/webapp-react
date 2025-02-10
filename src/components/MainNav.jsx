import { NavLink } from "react-router-dom";

function MainNav({ headerMenu }) {

  return (
    <div className="overflow-hidden">
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s" alt="React Logo" height="30" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {headerMenu.map((item, index) => (
                <li key={index} className="nav-item">
                  <NavLink to={item.route} className="nav-link">{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;