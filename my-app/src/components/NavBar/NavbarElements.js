import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #F7F3E3;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 2000px) / 2);
  z-index: 12;
  width: 100%;
  /* Third Nav */
  /* justify-content: flex-start; */
  font-family: 'Andada Pro', serif;
`;
  
export const NavLink = styled(Link)`
  color: #A8763E;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #6F1A07;
  }
  font-family: 'Andada Pro', serif;
  
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #F7F3E3;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  font-family: 'Andada Pro', serif;
`;

export const LogoutButton = styled.button`
background: #6F1A07;
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 63%;
height: 2rem;
border: none;
color: #F7F3E3;
border-radius: 2rem;
cursor: pointer;
font-family: 'Andada Pro', serif;
// margin-right: auto !important;
text-align: center;
`;

export const Div = styled.div`
text-align: right;

`;
