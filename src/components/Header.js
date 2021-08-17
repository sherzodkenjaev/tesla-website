import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import Fade from "react-reveal/Fade";
import { Close } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectCars } from "../features/car/carSlice";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Header() {
  const [isBurger, setIsBurger] = useState(false);
  const cars = useSelector(selectCars);

  function handleClickOpen() {
    setIsBurger(true);
  }

  function handleClickClose() {
    setIsBurger(false);
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} />
      </Link>

      <Menu>
        <Link to="/model-s">
          <a href="#">Model S</a>
        </Link>
        <Link to="/model-3">
          <a href="#">Model 3</a>
        </Link>
        <Link to="/model-x">
          <a href="#">Model X</a>
        </Link>
        <Link to="/model-y">
          <a href="#">Model Y</a>
        </Link>
        <Link to="/solar-roof">
          <a href="#">Solar Roof</a>
        </Link>
        <Link to="/solar-panel">
          <a href="#">Solar Panels</a>
        </Link>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={handleClickOpen} />
      </RightMenu>
      <BurgerNav show={isBurger}>
        <CloseWrapper>
          <CustomClose onClick={handleClickClose} />
        </CloseWrapper>
        <Link to="/model-s">
          <li>
            <a href="#">Model S</a>
          </li>
        </Link>
        <Link to="/model-3">
          <li>
            <a href="#">Model 3</a>
          </li>
        </Link>
        <Link to="/model-x">
          <li>
            <a href="#">Model X</a>
          </li>
        </Link>
        <Link to="/model-y">
          <li>
            <a href="#">Model Y</a>
          </li>
        </Link>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test-Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  a:hover {
    color: #393c41;
    background-color: #a7bcd9;
    border-radius: 5px;
    height: 30px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translate(100%)")};
  transition: transform 0.5s;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(Close)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
