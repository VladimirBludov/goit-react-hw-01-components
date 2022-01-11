import PropTypes from "prop-types"

function FriendList({ friends }) {
	return (
		<ul className="friend-list">
			{friends.map((friend) => {
				return (
					<li className="item" key={friend.id}>
						<span className="status">
							{friend.isOnline ? "Online" : "Offline"}
						</span>
						<img
							className="avatar"
							src={friend.avatar}
							alt="Avatar"
							width="48"
						/>
						<p className="name">{friend.name}</p>
					</li>
				)
			})}
		</ul>
	)
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		}).isRequired,
	),
}

export default FriendList
