import styled from "@emotion/styled";

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  font-weight: 900;
  color: #2f4f4f;
  padding: 20px 30px;
  margin: 20px 55px;
  border: none;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: #696969;
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;

  &:hover {
    background-position: right center;
    &:nth-of-type(1) {
      background-image: linear-gradient(
        to right,
        #90ee90 0%,
        #adff2f 51%,
        #006400 100%
      );
    }
    &:nth-of-type(2) {
      background-image: linear-gradient(
        to right,
        #e0ffff 0%,
        #40e0d0 51%,
        #1e90ff 100%
      );
    }
    &:nth-of-type(3) {
      background-image: linear-gradient(
        to right,
        #cd5c5c 0%,
        #dc143c 51%,
        #8b0000 100%
      );
    }
  }
`;
