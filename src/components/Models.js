import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { ExposurePlus1 } from "@material-ui/icons";
import arrow from "../images/down-arrow.svg";

function Models({
  title,
  description,
  rightButton,
  image,
  src,
  src1,
  src2,
  src3,
  h1,
  p1,
  h2,
  p2,
  h3,
  p3,
  h4,
  p4,
  labelh1,
  labelp1,
  labelh2,
  labelp2,
  labelh3,
  labelp3,
  labelh4,
  labelp4,
}) {
  return (
    <Content>
      <Wrap bgImage={image}>
        <Fade bottom>
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
        </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <ButtonLeft>
                <LabelLeft>
                  <h1>{labelh1}</h1>
                  <p>{labelp1}</p>
                </LabelLeft>
                <LabelLeft>
                  <h1>{labelh2}</h1>
                  <p>{labelp2}</p>
                </LabelLeft>
                <LabelLeft>
                  <h1>{labelh3}</h1>
                  <p>{labelp3}</p>
                </LabelLeft>
                <LabelLeft>
                  <h1>{labelh4}</h1>
                  <p>{labelp4}</p>
                </LabelLeft>
              </ButtonLeft>
              {rightButton && <ButtonRight>{rightButton}</ButtonRight>}
            </ButtonGroup>
          </Fade>
          <DownArrow src={arrow} />
        </Buttons>
      </Wrap>
      <SecondPage>
        <Fade bottom>
          <Info>
            <img src={src} alt="" />
            <span>
              <h2>{h1}</h2>
              <p>{p1}</p>
            </span>
          </Info>
          <Info>
            <span>
              <h2>{h2}</h2>
              <p>{p2}</p>
            </span>
            <img src={src1} alt="" />
          </Info>
          <Info>
            <img src={src2} alt="" />
            <span>
              <h2>{h3}</h2>
              <p>{p3}</p>
            </span>
          </Info>
          <Info>
            <span>
              <h2>{h4}</h2>
              <p>{p4}</p>
            </span>
            <img src={src3} alt="" />
          </Info>
        </Fade>
      </SecondPage>
    </Content>
  );
}

export default Models;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url({image});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonLeft = styled.div`
  display: flex;
`;

const ButtonRight = styled(ButtonLeft)`
  background-color: transparent;
  height: 40px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  border: 3px solid white;
  color: white;
  :hover {
    background-color: white;
    color: black;
  }
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;

const LabelLeft = styled.div`
  margin: 0 20px;

  h1 {
    color: white;
  }
  p {
    color: white;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 600px;
    height: 336px;
    margin: 0 15px;
  }

  span {
    margin: 0 100px;
    text-align: left;

    h2 {
      color: lightgray;
      margin-bottom: 30px;
    }

    p {
      color: lightgray;
    }
  }
`;

const Content = styled.div`
  width: 100vw;
  background-color: black;
`;

const SecondPage = styled.div`
  padding: 100px 0;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
`;
