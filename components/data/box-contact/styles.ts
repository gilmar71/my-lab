import styled from 'styled-components';

export const BoxContact = styled.div`
  width: 100%;
  max-width: clamp(420px, 47vw, 660px);
  .form {
    display: flex;
    flex-direction: column;

    .phone-plan {
      display: flex;
      gap: 20px;
    }

    .buttons {
      display: flex;
      gap: 30px;
      .recaptcha {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
  }
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 900px) {
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 650px) {
  }
  @media only screen and (max-width: 500px) {
    .form {
      .phone-plan {
        gap: 10px;
      }
    }
  }
`;
