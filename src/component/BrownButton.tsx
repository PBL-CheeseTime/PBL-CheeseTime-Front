import { styled } from "styled-components";

type Props = {
  text: string;
   onClickHandler: () => void;
};

const BrownButton = ({ text, onClickHandler}: Props) => {
  return (
    <Container onClick={onClickHandler}>
      {text}
    </Container>
  );
};

export default BrownButton;

const Container = styled.button`
  :hover {
    background-color: #34221c;
  }

  width: 420px;
  height: 70px;

  /* padding: 16px 100px; */
  font-size: 25px;

  font-family: Sansation;
  font-weight: 700;

  align-items: center;
  align-self: stretch;

  border-radius: 10px;
  background: #5B392E;

  margin-top: 60px;
  margin-left: 70px;

  cursor: pointer;
`;
