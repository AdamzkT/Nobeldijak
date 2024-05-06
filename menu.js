var menu =
`
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Nobel-díj</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="index.html">Díjazottak</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="kereses.html">Kereses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="kereses_collapse.html">Collapse keresés</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="kereses_nev.html">Név keresés</a>
    </li>
    </ul>
  </div>
</div>
</nav>
`
document.getElementById("menu").innerHTML = menu;