import { Nav, NavMenu, NavLink, Bars } from "./NavbarElements";

export default function AuthNavbar({logOut}) {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Meadow</NavLink>
          <NavLink className="navlink" to="/profile">
            Profile
          </NavLink>
          <button onClick={logOut}>Log Out</button>
        </NavMenu>
      </Nav>
    </>
  );
}
