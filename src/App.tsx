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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
`;

const boxVariants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

export default function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const goNext = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const goPrev = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence custom={back}>
          <Box
            custom={back}
            variants={boxVariants}
            initial='entry'
            animate='center'
            exit='exit'
            key={visible}
          >
            {visible}
          </Box>
        </AnimatePresence>
        <button onClick={goPrev}>prev</button>
        <button onClick={goNext}>next</button>
      </Wrapper>
    </>
  );
}
