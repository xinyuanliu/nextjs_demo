import { UserController } from '../server';
import { IUser } from '../types/user';

import axios from 'axios';

export default function Index({ user }: { user: IUser }) {
  async function getMore() {
    const res = await axios.post('/api/getuser');
    console.log('get more, res:', res);
  }
  console.log('props 12', user);
  return (
    <>
      <h1>{user.name}, Welcome! </h1>
      <button onClick={() => getMore()}>more</button>
    </>
  );
}

export async function getServerSideProps() {
  const res = await UserController.getUserInfo();

  return {
    props: {
      user: res.data,
    },
  };
}
