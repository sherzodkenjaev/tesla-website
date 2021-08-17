import React from "react";
import styled from "styled-components";
import Models from "./Models";

function SolarPanels() {
  return (
    <div>
      <Container>
        <Models
          title="Lowest Cost Solar Panel in America"
          description="Money-back guarantee"
          rightButton="Order Now"
          image="solar-panel.jpg"
          src="/images/game.jpg"
          src1="/images/connected.jpg"
          src2="/images/audio.jpg"
          src3="/images/baggage.jpg"
          h1="Game from Anywhere"
          p1="Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
          h2="Stay Connected"
          p2="Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
          h3="Your Best Audio System"
          p3="A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road."
          h4="Real Storage"
          p4="With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too."
          labelh1="Convert"
          labelp1="Sunlight to Energy"
          labelh2="$"
          labelp2="Guaranteed Lowest Price for Solar"
          labelh3="24/7"
          labelp3="Energy Monitoring"
        />
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default SolarPanels;
