import Container from '../Container';
import Profile from '../Profile';
import Statistic from '../Statistics';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';
import user from './user';
import statisticalData from './data';
import friends from './friends';
import transactions from './transactions';

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user?.avatar}
        followers={user?.stats?.followers}
        views={user?.stats?.views}
        likes={user?.stats?.likes}
      />

      <Statistic title="Upload stats" stats={statisticalData} />

      <Statistic stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
