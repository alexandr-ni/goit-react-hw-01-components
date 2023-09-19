import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;

  :last-child {
    margin-bottom: 0;
  }
`;

export const FriendListItem = styled.li`
  padding: 5px 10px;
  margin-bottom: 10px;
  width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  border-radius: 2px;
  box-shadow: 1px 2px 5px 2px #9b9b9b;
`;

export const Avatar = styled.img`
  border-radius: 10px;
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
