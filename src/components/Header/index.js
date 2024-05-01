import { HeaderContainer, LogoContainer } from "./styles";
import logo from '../../assets/logoViniSantos.jpeg';
const Header = () => {
    return (
      <HeaderContainer>
        <LogoContainer>
          <img src={logo} alt="Logo do autor"/>
        </LogoContainer>
        <p>
        Neste Desafio de Projeto, desenvolvemos uma calculadora utilizando React. 
        Este projeto permite a prática e aplicação dos conceitos aprendidos durante 
        o módulo de React. Criou-se todos os componentes e a interface da calculadora.
        </p>
        
      </HeaderContainer>
    );
  };
  
  export default Header;