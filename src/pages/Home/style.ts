import styled from 'styled-components';

export const Container = styled.div`
  background-color: blue;
`;

export const Banner = styled.div`
  height: 550px;
  width: 100%;
`;

export const AboutTheSite = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  background-color: red;

  h2 {
    line-height: 1;
  }
`;
