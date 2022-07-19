export default function Navbar()
{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Earn Side Money</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active me-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active me-5" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active me-5" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active me-5" href="#">SignUp</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
        </>
    )
}