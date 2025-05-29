import { styled } from "styled-components";

type Props = {
  text: string;
   //onClickHandler: () => void;
};

const OnButton = ({text}: Props) => {
  return <Container>{text}</Container>;
};
// onClick={onClickHandler}
export default OnButton;

const Container = styled.button`
  :hover {
    background-color: #FF9500;
  }

  color: #FFFFFF;
  width: 300px;
  height: 60px;

  /* padding: 16px 100px; */
  font-size: 30px;

  font-family: Sansation;
  font-weight: 700;

  align-items: center;
  border-radius: 5px;
  background: #FF9500;

  margin-top: 60px;
  margin-left: 20px;

  cursor: pointer;
`;

  //align-self: stretch;
