import styled from 'styled-components';

export const Item = styled.li`
  padding: 5px 10px;
  margin-bottom: 10px;
  width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 2px 5px 2px #9b9b9b;
`;

export const Status = styled.span`
  svg {
    color: ${props => {
      if (props.status === 'true') {
        return 'green';
      }
      return 'red';
    }};
  }
`;

export const Avatar = styled.img`
  border-radius: 10px;
`;
