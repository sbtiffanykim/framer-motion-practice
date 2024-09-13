import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  color:black;
  line-height: 1.2;
  background: linear-gradient(135deg, #e09, #d0e);
}
a {
  text-decoration:none;
  color:inherit;
}
`;

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [clickedId, setClickedId] = useState<null | string>(null);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Grid>
          {['1', '2', '3', '4'].map((n) => (
            <Box onClick={() => setClickedId(n)} key={n} layoutId={n} />
          ))}
        </Grid>
        <AnimatePresence>
          {clickedId ? (
            <Overlay
              onClick={() => setClickedId(null)}
              initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
              animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            >
              <Box style={{ width: 400, height: 200 }} layoutId={clickedId} />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}
