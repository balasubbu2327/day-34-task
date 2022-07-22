export function Navbar() {
    return <nav className="navbar navbar-light  nav-bar">
      <div className="container-fluid">
        <h4 className="navbar-brand text-white">Admin</h4>
        <div className="d-flex">
          <form className="d-flex ">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white" type="submit">Search</button>
          </form>
          <div className="mx-2 vr"></div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="35" height="35" class="rounded-circle" alt="profile picture" />
        </div>
  
  
      </div>
    </nav>;
  }