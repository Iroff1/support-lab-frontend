import styled from 'styled-components';

const Responsive = styled.div`
  padding: 0 10px;
  width: 1440px;
  margin: 0 auto;
  background-color: white;

  transition: 0.2s ease width;

  @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 745px;
  }
  @media (max-width: 425px) {
    width: 100%;
    max-width: 393px;
  }
`;

export default Responsive;
