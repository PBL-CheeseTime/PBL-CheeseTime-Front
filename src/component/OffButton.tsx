import { styled } from "styled-components";

type Props = {
  text: string;
   onClickHandler: () => void;
};

const OnButton = ({ text, onClickHandler}: Props) => {
  return (
    <Container onClick={onClickHandler}>
      {text}
    </Container>
  );
};

export default OnButton;

const Container = styled.button`
  :hover {
    background-color:rgb(198, 198, 198);
  }

  color:rgb(176, 176, 176);
  width: 300px;
  height: 60px;

  /* padding: 16px 100px; */
  font-size: 30px;

  font-family: Sansation;
  font-weight: 700;

  align-items: center;

  border-radius: 5px;
  background:rgb(255, 255, 255);

  margin-top: 60px;
  margin-left: 20px;

  cursor: pointer;
`;

  //align-self: stretch;
