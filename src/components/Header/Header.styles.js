import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  border-radius: 15px;
  background-color: #a1d68e;
  border: 1px solid green;
  height: 80px;
`

export const LogoText = styled.a`
  padding-left: 20px;
  color: white;
  text-decoration: none;
  font-size: 28px;
`

export const NavItem = styled.li`
  margin: 10px 30px;  
  font-size: 18px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  color: white;
`

export const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  text-align: center;
  flex: 5;
`

export const NavWrapper = styled.div`
  width: 200px;
  flex: 1;
`

export const Search = styled.input`
  text-decoration: none;
  border: black 1px solid;
  border-radius: 10px;
  color: #c4c4c4;
  padding: 8px 8px;
  margin: 0;
`