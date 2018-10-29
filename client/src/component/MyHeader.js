import React from 'react';
import {
  Container,
  Menu,
} from "semantic-ui-react";
import { Link } from 'react-router-dom';
const MyHeader = (props) => {
    return (<Menu fixed="top" inverted>
    <Container>
      <Menu.Item as={Link} header to="/">
        Employee Management
      </Menu.Item>
    </Container>
  </Menu>);
}
export default MyHeader;