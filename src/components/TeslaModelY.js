import React from "react";
import styled from "styled-components";
import Models from "./Models";
import modelY from "../images/model-y.jpg";
import connected from "../images/connected.jpg";
import game from "../images/game.jpg";
import audio from "../images/audio.jpg";
import baggage from "../images/baggage.jpg";

function TeslaModelY() {
  return (
    <div>
      <Container>
        <Models
          title="Model Y"
          description="Order Online for Touchless Delivery"
          rightButton="Order Now"
          image={modelY}
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
          labelh1="76cu ft"
          labelp1="Cargo Space"
          labelh2="326mi"
          labelp2="Range (EPA est.)"
          labelh3="AWD"
          labelp3="Dual Motor"
        />
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default TeslaModelY;
