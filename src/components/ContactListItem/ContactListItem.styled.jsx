import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${p => p.theme.space[6]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  @media screen and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
    gap: ${p => p.theme.space[3]}px;
  }
`;
export const ItemName = styled.span`
  /* max-width: 200px; */
  /* overflow-wrap: break-word; */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media screen and (max-width: 480px) {
    inline-size: 165px;
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  /* align-items: center; */
  /* justify-content: space-between; */
  justify-content: space-between;
`;
