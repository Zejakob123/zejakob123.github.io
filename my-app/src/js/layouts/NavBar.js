export default function NavBar(){
    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-dark sticky-top py-1 px-1 shadow">
              <div class="container-fluid">
                <a class="navbar-brand py-0" href="#about">
                  <img src="./assets/img/pic_wh.jpg" alt="Logo" class="rounded-circle navbar-img"/>
                </a>
                
                <button class="navbar-toggler" type="button" aria-label="Dropdown" data-bs-toggle="collapse" data-bs-target="#collapsibleBar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="collapsibleBar" class="collapse navbar-collapse justify-content-end">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#project">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
              </div>
            </nav>
        </>
    );
}