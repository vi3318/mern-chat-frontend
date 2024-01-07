import React from 'react'
import MessageForm from '../components/MessageForm';
import SideBar from '../components/SideBar';
import {Container, Row, Col} from 'react-bootstrap';

const Chat = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <SideBar/>
        </Col>
        <Col md={8}>
          <MessageForm/>
        </Col>
      </Row>
    </Container>
  )
}

export default Chat