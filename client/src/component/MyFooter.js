import React from "react";
import {
    Container,
    List,
    Segment
  } from "semantic-ui-react";
const MyFooter = props => {
  return (
    <Segment
      inverted
      vertical
      fixed="bottom"
      style={{ margin: "5em 0em 0em"}}
    >
      <Container textAlign="center">
        <List horizontal inverted divided link>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default MyFooter;
