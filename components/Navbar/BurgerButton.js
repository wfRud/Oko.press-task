import React from "react";
import styled, { css } from "styled-components";

const Burger = styled.div`
  display: none;
  position: relative;
  width: 55px;
  height: 30px;
  ${(props) =>
    props.isActive &&
    css`
      transform: rotate(90deg);
      transition: transform 0.2s ease-in-out;
    `}
  z-index: 9999;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 625px) {
    display: block;
    grid-column: 2/3;
    margin-left: 24px;
  }
`;

const BurgerLine = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: ${(props) => props.theme.dark};

  ${(props) =>
    props.isActive
      ? css`
          &:nth-child(1) {
            top: calc(50% - 2px);
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            top: calc(50% - 2px);
            opacity: 0;
          }

          &:nth-child(3) {
            bottom: calc(50% - 2px);
            transform: rotate(-45deg);
          }
        `
      : css`
          &:nth-child(1) {
            top: 0;
          }
          &:nth-child(2) {
            top: calc(50% - 2px);
          }
          &:nth-child(3) {
            bottom: 0;
          }
        `}

  transition:  top 0.2s 0.2s, bottom 0.2s 0.2s, opacity 0.2s 0.2s,
    transform 0.2s 0.4s;
`;

const BurgerButton = ({ handleBurgerButton, isActive }) => (
  <Burger onClick={handleBurgerButton} isActive={isActive}>
    <BurgerLine isActive={isActive} />
    <BurgerLine isActive={isActive} />
    <BurgerLine isActive={isActive} />
  </Burger>
);

export default BurgerButton;
