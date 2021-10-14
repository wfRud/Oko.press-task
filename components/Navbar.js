import { useState } from "react";

import Image from "next/image";
import SearchIcon from "../public/iCons/search.svg";
import NotificationIcon from "../public/iCons/notification.svg";
import AccountIcon from "../public/iCons/account-circle.svg";
import styled from "styled-components";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [accountMenu, setAccountMenu] = useState(true);

  const handleLoginButton = () => setIsLogged(true);
  const handleLogoutButton = () => {
    setIsLogged(false);
    setAccountMenu(false);
  };
  const handleAccountButton = () => setAccountMenu(!accountMenu);

  return (
    <Nav>
      <Container>
        <Logo src={"/logo.svg"} width={32} height={32} />
        <Menu>
          <MenuItem>Wydarzenia</MenuItem>
          <MenuItem>Kontakt</MenuItem>
          <MenuItem>Wesprzyj Nas</MenuItem>
        </Menu>

        {!isLogged && (
          <ActionButtons>
            <SearchIcon />
            <Button onClick={handleLoginButton}>Zaloguj się </Button>
          </ActionButtons>
        )}

        {isLogged && (
          <ActionButtons>
            <SearchIcon />
            <NotificationIcon />
            <AccountIcon onClick={handleAccountButton} />
            {accountMenu && (
              <AccountMenu>
                <Button onClick={handleLogoutButton}>Wyloguj się </Button>
              </AccountMenu>
            )}
          </ActionButtons>
        )}
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 72px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 32px minmax(256px, 336px) 1fr minmax(160px, 188px);
  align-items: center;
  align-content: center;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1280px) {
    padding: 16px;
  }
`;

const Logo = styled(Image)`
  flex: 0 0 auto;
`;

const Menu = styled.ul`
  grid-column: 2/3;
  display: flex;
  justify-content: space-between;
  max-width: 336px;
  min-width: 256px;
  margin-left: 32px;
  font-size: 16px;
  font-weight: ${(props) => props.theme.medium};
  list-style: none;
`;

const MenuItem = styled.li`
  position: relative;
  line-height: 20px;
  overflow: hidden;
  //! font-weight ??

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.dark};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    &::before {
      opacity: 1;
    }
  }
`;

const ActionButtons = styled.div`
  flex: 2 1 auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  grid-column: 4/5;

  svg {
    transition: transform 0.3s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
    }
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.red};
  width: 128px;
  height: 40px;
  border: none;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.size_M};
  font-weight: ${(props) => props.theme.medium};
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    background-color: ${(props) => props.theme.dark_red};
  }
`;

const AccountMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -80px;
  right: 0;
  width: 160px;
  height: 56px;
  background-color: ${(props) => props.theme.dark_white};
  border: 1px solid ${(props) => props.theme.dark};
  border-radius: 3px;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    top: -20px;
    right: 16px;
    width: 0;
    height: 0;
    border: 10px solid;
    border-color: transparent #000 #000 transparent;
  }
  &:after {
    content: "";
    position: absolute;
    top: -17px;
    right: 17px;
    width: 0;
    height: 0;
    border: 9px solid;
    border-color: transparent #fff #fff transparent;
  }
`;

export default Navbar;
