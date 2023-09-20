import { BsFillCircleFill } from 'react-icons/bs';
import { Item, Status, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status status={isOnline.toString()}>
        <BsFillCircleFill size={15} />
      </Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
};
