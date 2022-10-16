import styled from 'styled-components';
import { lighten } from 'polished';

interface ButtonProps {}

export const Button = styled.div<ButtonProps>`
  width: 100%;
  max-width: 250px;
  a,
  button {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    border: 0;
    transition: all 0.4s ease-in-out;
    background-size: 300% 100%;
    color: var(--black);
  }

  a:hover,
  button:hover {
  }

  button:disabled {
  }

  @media only screen and (max-width: 1600px) {
    a,
    button {
      height: 46px;
    }
  }

  @media only screen and (max-width: 1400px) {
    a,
    button {
      height: 44px;
    }
  }

  @media only screen and (max-width: 1200px) {
    a,
    button {
      height: 42px;
    }
  }

  @media only screen and (max-width: 1024px) {
    a,
    button {
      height: 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    a,
    button {
      height: 38px;
    }
  }

  @media only screen and (max-width: 600px) {
    a,
    button {
      height: 36px;
    }
  }

  @media only screen and (max-width: 450px) {
    a,
    button {
      height: 32px;
    }
  }

  @media only screen and (max-width: 370px) {
  }

  @media only screen and (max-width: 350px) {
  }
`;
