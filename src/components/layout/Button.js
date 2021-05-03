import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "red")};
  white-space: nowarp;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  padding: ${({ big }) => (big ? "16px 40px" : "14px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  border-radius: ${({ rounded }) => (rounded ? "50px" : "7px")};
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
