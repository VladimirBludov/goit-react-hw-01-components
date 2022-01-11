import PropTypes from 'prop-types';
import defaultImage from './default_512x512.jpg';
import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
} from './Profile.styled.jsx';

function Profile({
  username,
  tag,
  location,
  avatar = defaultImage,
  followers = 0,
  views = 0,
  likes = 0,
}) {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="Аватар пользователя" />
        <Name>{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <p>{location}</p>
      </Description>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
