import React, { useState } from 'react';
import styled from 'styled-components';

interface AppProps {}

const Container = styled.div`
  width: 800px;
  margin: 20px auto;
`;

const StyledImg = styled.img<{ focalX: string; focalY: string }>`
  max-width: 100%;
  width: 700px;
  height: 500px;
  display: block;
  object-fit: cover;
  object-position: ${({ focalX, focalY }) => `${focalX}% ${focalY}%`};
`;

function App({}: AppProps) {
  const [focalX, setFocalX] = useState<string>('50');
  const [focalY, setFocalY] = useState<string>('50');

  const src =
    'https://images.unsplash.com/photo-1617518003907-a1592db6a055?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80';

  return (
    <Container className="App">
      <StyledImg src={src} focalX={focalX} focalY={focalY} />
      <label>
        X
        <input
          type="range"
          min="0"
          max="100"
          value={focalX}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFocalX(e.currentTarget.value)
          }
        />
      </label>
      <label>
        Y
        <input
          type="range"
          min="0"
          max="100"
          value={focalY}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFocalY(e.currentTarget.value)
          }
        />
      </label>
    </Container>
  );
}

export default App;
