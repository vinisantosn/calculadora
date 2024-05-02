import { FooterContainer, LinksContainer } from "./styles";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import logo from '../../assets/logoViniSantos.jpeg';
const Footer = () => {
    return (
      <FooterContainer>
        <p> Desenvolvido por Vinícius Santos. </p>
        <LinksContainer>
            <a href="https://github.com/vinisantosn" rel="noreferrer" target="_blank"><DiGithubBadge size={64} color="#FFF"/></a>
            <a href="https://www.linkedin.com/in/vinisantosn/" rel="noreferrer" target="_blank"><FaLinkedin size={56} color="#FFF" /></a>
        </LinksContainer>        
      </FooterContainer>
    );
  };
  
  export default Footer;