import styled from "styled-components";

export const Title_S1 = styled.h1`
  position: relative;
  font-family: var(--font-family);
  font-weight: 100;
  font-size: 40px;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 5.5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    display: block;
    font-size: 0.5em;
    line-height: 1.3;
  }
  em {
    font-style: normal;
    font-weight: 600;
  }

  &:before {
    width: 5%;
    height: 7.5px;
    display: block;
    content: "";
    position: absolute;
    bottom: 3px;
    background-color: var(--primary-color);
  }

  &:after {
    width: 30%;
    height: 2.5px;
    display: block;
    content: "";
    position: relative;
    margin-top: 10px;
    background-color: var(--primary-color);
  }
`;
