import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: lightgray;
`;

const DraggableItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  cursor: grab;
`;

const Da = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    console.log("Dropped item:", data);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <DraggableItem
        id="draggableItem"
        draggable={!dragging}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      />
    </Container>
  );
};

export default DragAndDropExample;
