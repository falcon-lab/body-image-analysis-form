import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
`;

const MenuItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px , 1fr));
  gap: 10px;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src="" />
      {/* <nav> */}
      <MenuItems>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </MenuItems>
      {/* </nav> */}
    </HeaderWrapper>
  );
}

export default Header;