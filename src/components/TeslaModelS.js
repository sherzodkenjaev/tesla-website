import React from "react";
import styled from "styled-components";
import Models from "./Models";
import modelS from "../images/model-s.jpg";
import connected from "../images/connected.jpg";
import game from "../images/game.jpg";
import audio from "../images/audio.jpg";
import baggage from "../images/baggage.jpg";

function TeslaModelS() {
  return (
    <div>
      <Container>
        <Models
          title="Model S"
          description="Order Online for Touchless Delivery"
          rightButton="Order Now"
          image={modelS}
          src={game}
          src1={connected}
          src2={audio}
          src3={baggage}
          h1="Game from Anywhere"
          p1="Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
          h2="Stay Connected"
          p2="Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
          h3="Your Best Audio System"
          p3="A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road."
          h4="Real Storage"
          p4="With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too."
          labelh1="396 mi"
          labelp1="Range (EPA est.)"
          labelh2="1.99 s"
          labelp2="0-60 mph*"
          labelh3="200mph"
          labelp3="Top Speed"
          labelh4="1,020hp"
          labelp4="Peak Power"
        />
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default TeslaModelS;
