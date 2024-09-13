import { AnimatePresence, motion } from 'framer-motion';
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 250px;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Button = styled(motion.button)`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5vh;
  background-color: white;
  color: #0984e3;
  cursor: pointer;
`;

const Circle = styled(motion.div)`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: white;
`;

const boxVariant = {
  initial: {
    scale: 1,
  },
  hover: (custom: number) => ({
    scale: 1.1,
    x: custom % 2 === 1 ? -20 : 20,
    y: custom > 2 ? 20 : -20,
    transition: {
      duration: 0.2,
    },
  }),
};

const buttonVariant = {
  initial: {
    color: '#0984e3',
    scale: 1,
  },
  hover: {
    color: '#ff9f43',
    scale: 1.2,
    transition: {
      color: {
        duration: 0.5,
      },
    },
  },
};
export default function Challenge() {
  const [id, setId] = useState<null | string>(null);
  const [isClicked, setIsClicked] = useState(false);
  const toggleSwitch = () => {
    setIsClicked((prev) => !prev);
    console.log(isClicked);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Grid>
          {['1', '2', '3', '4'].map((n) => (
            <Box
              onClick={() => setId(n)}
              key={n}
              custom={parseInt(n)}
              variants={boxVariant}
              initial='initial'
              whileHover='hover'
              layoutId={n}
            >
              {n === '2' && isClicked && <Circle layoutId='circle' />}
              {n === '3' && !isClicked && <Circle layoutId='circle' />}
            </Box>
          ))}
        </Grid>
        <Button
          onClick={toggleSwitch}
          variants={buttonVariant}
          initial='initial'
          whileHover='hover'
        >
          Switch
        </Button>

        <AnimatePresence>
          {id ? (
            <Overlay
              initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
              animate={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
              onClick={() => setId(null)}
            >
              <Box style={{ backgroundColor: 'white' }} layoutId={id} />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}
