
import Link from 'next/link';
import styled from 'styled-components';

export default function LogoNav() {
  return (
    <Nav>
      <List>
        <Item>
          <Link href="/">
            <LogoImg src="/logo-img.svg" alt="chiztimelogo" />
          </Link>
        </Item>

        <HeaderList>
          <HeaderItem>
            <Link href="">Create Bottle</Link>
          </HeaderItem>
          <HeaderItem>
            <Link href="">Manage Bottle</Link>
          </HeaderItem>
          <HeaderItem>
            <Link href="">My Cheese</Link>
          </HeaderItem>
        </HeaderList>

      </List>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;     
  top: 0;              
  left: 0;
  width: 92%;
  z-index: 10;       
  border-bottom: 2px solid rgba(255, 149, 0, 0.95);

  margin-top: 1%;
  margin-left: 70px;
  margin-right: 70px;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const LogoImg = styled.img`
  margin-top: 6px;
  width: 250px;
  /* margin-right: 10px; */
`;

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeaderItem = styled.li`
  list-style: none;
  font-size: 35px;
  font-weight: 550;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;