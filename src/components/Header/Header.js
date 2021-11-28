import {LogoText, NavItem, Wrapper, Nav, LogoImage, NavWrapper, Search} from './Header.styles'
import Logo from "../../assets/logo.png"
import {Link} from "react-router-dom";
import {ShopOutlined} from "@ant-design/icons";


export function Header() {
    return (
        <Wrapper>
            <LogoText>IPod shop</LogoText>
            <Nav>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                    <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                    <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
            </Nav>
            <div style={{width: '200px'}}/>
        </Wrapper>
    );
}


