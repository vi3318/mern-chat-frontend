import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const rooms = ["first room", "second room", "third room"];
  const user = useSelector(state => state.user);
  if(!user){
    return <></>;
  }
  return (
    <>
      <h2>Available Rooms</h2>
      <ListGroup>
        {rooms.map((room, idx) => (
          <ListGroup.Item key={idx}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Member</h2>
    </>
  );
};

export default SideBar;
