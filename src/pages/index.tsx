import { type NextPage } from 'next';
import { api } from '~/utils/api';

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <div>
      <h1>{hello.data && hello.data.greeting}</h1>
    </div>
  );
};

export default Home;
