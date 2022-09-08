import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo";
import NavElements from "./navElements";
import { NavContainer } from "./styles/nav.style";
import Contact from "./contact";
import jwtDecode from "jwt-decode";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const googleLoginBtn = useRef(null);
  // const googleLogoutBtn = useRef(null);

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: "35728115748-1aikkldlg25elh5h9cjijltb78s4ldj1.apps.googleusercontent.com",
      callback: handleCredentialResponse,
      state_cookie_domain: "localhost:3000",
    });

    window.google.accounts.id.renderButton(googleLoginBtn.current,
      { theme: "outline", size: "large" });

    // window.google.accounts.id.prompt();
    })
    
  const handleCredentialResponse = (response: CredentialResponse) => {
    if(!response.clientId || !response.credential) return;
    let userObject: object = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }
    
  const googleLogout = () => {
    setUser(""); 
  }

  const toggleTrigger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavContainer className="navbar">
      <Logo>
        <Link to="/">Daymoon Dev.</Link>
      </Logo>
      <input id="hamburger-menu" type="checkbox" onClick={toggleTrigger} checked={isOpen} />
      <label className="hamburger-container" htmlFor="hamburger-menu">
        <div className="hamburger-button" />
      </label>
        <NavElements isOpen={isOpen} setIsOpen={setIsOpen} /> 
      <Contact />
      <div>
        {!user ? <button ref={googleLoginBtn} /> : <button onClick={googleLogout}>Sign Out</button>}
      </div>
    </NavContainer>
  );
}
