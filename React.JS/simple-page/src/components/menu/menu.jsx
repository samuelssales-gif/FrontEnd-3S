import "./menu.css";
function menu() {
    return(
<nav class="menu">
        <a href="#" class="menu__item">Home</a>
        <a href="#" class="menu__item">Quem Somos</a>
        <a href="#" class="menu__item">Contato</a>
        <a href="#" class="menu__item--success">Entrar</a>
        <a href="#" class="menu__item--buttom-default">Cadastrar</a>

         <div class="card-perfil">
        {/* <!-- elemento/element--> */}
        {/* <img class="card-perfil__image" 
        src="../images/6676023.png" 
        alt="foto de perfil do usuário"> */}
    
    </div>
    </nav>
    );
}

export default menu;