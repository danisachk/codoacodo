let header = `
        <div "empresa">
            <a  href="index.html" id="iconheader">
                <img id="logo" src="static/img/logo.png" alt="Mundo">
            </a>
            <p>Green Solutions</p>
        </div>
        <nav id="nav">
            <a href="index.html">Inicio</a>
            <a href="soluciones.html">Soluciones</a>
            <a href="clientes.html" target="_self">Clientes</a>
            <a href="contacto.html" target="_self">Contacto</a>
            <a href="login.html" target="_self">Log in</a>
            <a href="altas.html" target="_self">Suscripción</a>
        </nav>
`
 document.getElementById ("idheader").innerHTML = header;

 let footer =`

            <nav id="redes">
                <a href="https://www.facebook.com" target="_blank" alt="Facebook"><i class="fa-brands fa-facebook" style="color: #fffff6;"></i></a>
                <a href="https://twitter.com" target="_blank" alt="Twitter"><i class="fa-brands fa-twitter" style="color: #fffff6;"></i></a>
                <a href="https://www.instagram.com" target="_blank" alt="Instagram"><i class="fa-brands fa-instagram" style="color: #fffff6;"></i></a>
                <a href="https://youtube.com" target="_blank" alt="Youtube"><i class="fa-brands fa-youtube" style="color: #fffff6;"></i></a>
            </nav>
            <br>
            <p id="reg">© Green Solutions - 2023</p>
 `

 document.getElementById("idfooter").innerHTML = footer;

            /*<a href="index.html">
                <img src="img/sunsea-wht.png" alt="Summer Exploring Logo">
            Green Solutions
                </a>

            <a href="">
            <img src="img/instagram-w 1.png" alt="Instagram">
            </a>
            <a href="">
                <img src="img/facebook-w 1.png" alt="Facebook">
            </a>
            <a href="">
                <img src="img/twitter-w 1.png" alt="Twitter">
            </a>*/