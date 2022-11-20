const navbar = document.querySelector('#navbar')
navbar.innerHTML = `
<nav class="navbar navbar-expand-lg bg-dark">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="./img/minzkelogol.png" alt="" width="60" height="60">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Cotizaciones</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Calculador de Consumo</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Texturas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Empresa</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
            </li>
        </ul>
    </div>
</div>
</nav>
`