import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90, scale: 1.2 },
  tap: { borderRadius: '100px', rotateZ: -90, scale: 1 },
};

function Gestures() {
  return (
    <Wrapper>
      <Box variants={boxVariants} whileHover='hover' whileTap='tap' />
    </Wrapper>
  );
}

export default Gestures;
