import {HeaderContainer} from "./StyledComponents"
import search from "../assets/search.png"
import carrinho from "../assets/carrinho.png"


function Header (){
    return (
        <HeaderContainer>

            <a>
                BooksLib    
            </a>

            <span>
            
            <input placeholder="Buscar" />
            <img src = {search} alt="Logo-Search"></img>

            </span>

            <button>
                <img src = {carrinho} alt ="Logo-Carrinho"></img>
            </button>

        </HeaderContainer>
    )
}

export default Header