import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image="model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panel in America"
        description="Money-back guarantee"
        leftButton="Order Now"
        rightButton="Learn More"
        image="solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costa Less Then a New Roof Plus Solar Panels"
        leftButton="Order Now"
        rightButton="Learn More"
        image="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftButton="Shop Now"
        image="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
