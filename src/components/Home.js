import React from "react";
import styled from "styled-components";
import Section from "./Section";
import solar from "../images/solar-panel.jpg";
import roof from "../images/solar-roof.jpg";
import model3 from "../images/model-3.jpg";
import modelS from "../images/model-s.jpg";
import modelX from "../images/model-x.jpg";
import modelY from "../images/model-y.jpg";
import accessories from "../images/accessories.jpg";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image={modelS}
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image={modelY}
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image={model3}
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image={modelX}
      />
      <Section
        title="Lowest Cost Solar Panel in America"
        description="Money-back guarantee"
        leftButton="Order Now"
        rightButton="Learn More"
        image={solar}
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costa Less Then a New Roof Plus Solar Panels"
        leftButton="Order Now"
        rightButton="Learn More"
        image={roof}
      />
      <Section
        title="Accessories"
        description=""
        leftButton="Shop Now"
        image={accessories}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
