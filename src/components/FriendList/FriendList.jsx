import { BsFillCircleFill } from 'react-icons/bs';
import {
  Avatar,
  FriendListItem,
  Status,
  List,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        return (
          <FriendListItem key={item.id}>
            <Status status={item.isOnline.toString()}>
              <BsFillCircleFill size={15} />
            </Status>
            <Avatar src={item.avatar} alt="User avatar" width="48" />
            <p>{item.name}</p>
          </FriendListItem>
        );
      })}
    </List>
  );
};
