import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo";
import NavElements from "./navElements";
import { NavContainer } from "./styles/nav.style";
import Contact from "./contact";
import jwtDecode from "jwt-decode";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<object | null>(null);
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
    })
    
  const handleCredentialResponse = (response: any) => {
    fetch("https://ee6m4wpu2c.execute-api.ap-northeast-2.amazonaws.com/dev/login", {
      headers: {
        authorization: response.credential,
      },
    }).then(res => console.log(res)).then(data => console.log(typeof(data))).catch(err => console.error(err));
    console.log(response.credential);
    
    // if(!response.clientId || !response.credential) return;
    // let userObject: object = jwtDecode(response.credential);
    // setUser(userObject);
  }
    
  const googleLogout = () => {
    setUser(null);
  }

  const toggleTrigger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavContainer className="navbar">
      <Logo>
        <Link to="/">Daymoon Dev.</Link>
      </Logo>
      <input id="hamburger-menu" type="checkbox" onClick={toggleTrigger} checked={isOpen} onChange={toggleTrigger} />
      <label className="hamburger-container" htmlFor="hamburger-menu">
        <div className="hamburger-button" />
      </label>
        <NavElements isOpen={isOpen} setIsOpen={setIsOpen} /> 
      <Contact />
      {user ? <button onClick={googleLogout}>Sign Out</button> : <div ref={googleLoginBtn} />}
    </NavContainer>
  );
}
