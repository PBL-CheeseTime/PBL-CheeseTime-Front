import { styled } from "styled-components";

type Props = {
  text: string;
//   onClickHandler: () => void;
};

const YellowButton = ({ text}: Props) => {
  return (
    <Container >
      {text}
    </Container>
  );
};

export default YellowButton;

const Container = styled.button`
  :hover {
    background-color: #F7B500;
  }

  color: #FFFFFF;
  width: 320px;
  height: 70px;

  /* padding: 16px 100px; */
  font-size: 25px;

  font-family: Sansation;
  font-weight: 700;

  align-items: center;
  align-self: stretch;

  border-radius: 20px;
  background: #F7B500;

  margin-top: 60px;
  margin-left: 70px;

  cursor: pointer;
`;
