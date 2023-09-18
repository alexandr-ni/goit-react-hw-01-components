import { Avatar, List, ListItem, ProfileWrapper, Description, Name, Tag, Location, Label, Quantity } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="100px" height="100px" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <List>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </List>
    </ProfileWrapper>
  );
};
