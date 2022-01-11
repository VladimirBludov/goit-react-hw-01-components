import { GlobalStyle } from './GlobalStyle';
import user from '../Profile/user';
import Profile from '../Profile/Profile';
import Statistic from '../Statistics/Statistics';
import statisticalData from '../Statistics/data';
import FriendList from '../FriendList/FriendList';
import friends from '../FriendList/friends';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions';

function App() {
  return (
    <div className="App">
      <GlobalStyle />

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
    </div>
  );
}

export default App;
