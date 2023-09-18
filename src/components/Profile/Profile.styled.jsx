import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 200px;
  background-color: #dddfe1;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 2px 2px #c6c6c6;
`;

export const Description = styled.div`
  padding: 20px;
  margin-bottom: 2px;
  background-color: ${props => props.theme.colors.white};
`;

export const Avatar = styled.img`
  margin: 0 auto 30px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-weight: 700;
  color: ${props => props.theme.colors.darkblue};
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: ${props => props.theme.colors.light_gray};
`;

export const Location = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.light_gray};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${props => props.theme.colors.gray};
`;

export const Label = styled.span`
  margin-bottom: 5px;
  text-align: center;
  color: ${props => props.theme.colors.light_gray};
`;

export const Quantity = styled.span`
  text-align: center;
  font-weight: 700;
  color: ${props => props.theme.colors.darkblue};
`;