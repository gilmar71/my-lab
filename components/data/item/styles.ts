import styled from 'styled-components';

export const ItemComponent = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--white);
  gap: 30px;
`;
export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;

  .buttons {
    max-width: 80px;
    display: flex;
    gap: 5px;
    width: 100%;
    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-radius: 5px;
      svg {
        max-width: 20px;
        width: 100%;
      }
    }
  }
`;
export const ItemForm = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .buttons {
    max-width: 80px;
    display: flex;
    gap: 5px;
    width: 100%;
    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-radius: 5px;
      svg {
        max-width: 20px;
        width: 100%;
      }
    }
  }
`;
