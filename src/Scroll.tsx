import styled from 'styled-components';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const ProgressBar = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  height: inherit;
  width: inherit;
  transform-origin: 50% 100%;
`;

function Scroll() {
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, 'change', (value) => console.log(value));
  const gradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      'linear-gradient(135deg,#00d2ee,#1000ee)',
      'linear-gradient(135deg,#e09,#d0e)',
      'linear-gradient(135deg,#00ee63,#aeee00)',
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ scale }}>
        <ProgressBar style={{ scaleY: scrollYProgress }} />
      </Box>
    </Wrapper>
  );
}

export default Scroll;
