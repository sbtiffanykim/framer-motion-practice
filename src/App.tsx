import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Animations from './Animations';
import Variants from './Variants';
import Gestures from './Gestures';

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
  background:linear-gradient(135deg,#e09,#d0e);
}
a {
  text-decoration:none;
  color:inherit;
}

`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Gestures />
    </>
  );
}
