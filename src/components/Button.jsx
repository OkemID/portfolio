//src/components/Button.jsx
import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background: linear-gradient(to right, #4372e9, #7c2dfb);
  `,
  danger: css`
    background: linear-gradient(to right, #7c2dfb, #4372e9);
    border: solid 0.5px #fd2525;
  `,
  success: css`
    background: linear-gradient(to right, #137c18, #096235);
    border: solid #26c951 #096235 0.8px;
  `
};

const ButtonStyles = styled.div`
    ${({variant}) => variants[variant || "primary"]}
  background: linear-gradient(to right, #3b82f6, #9333ea);
  color: #ffffff;
  padding: 6px 20px;
  border-radius: 1000px;
  font-weight: 700;
  transition: all 300ms ease;
  gap: 8px;
  margin: 16px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: linear-gradient(to right, #2563eb, #7e22ce);
    transform: scale(1.05);
  }
`;

export const ButtonOne = ({ children, variant, style, ...props }) => {
  return <ButtonStyles variant={variant} {...props}>{children}</ButtonStyles>;
};
