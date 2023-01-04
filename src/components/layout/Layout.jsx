import styled from 'styled-components';
import { theme } from '../../theme.js';
export default function Layout({ children, ...props }) {
  return (
    <Container {...props}>
      <div>{children}</div>
    </Container>
  );
}

const Container = styled.main`
  position: absolute;
  width: 60vw;
  height: 80vh;
  background-color: ${theme.backgroundColor};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 1px 1px #999;
`;
