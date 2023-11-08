import React from 'react';


function NavBar(){
  return (
    <div style={{marginTop: '30px'}}>
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" style={{ fontWeight:'revert-layer', fontSize: '40px',position:'sticky', marginTop:'5px',marginLeft:'400px',}}>OUR 10 BEST CHICKEN RECEIPES</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default NavBar;
