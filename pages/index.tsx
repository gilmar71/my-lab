import Head from 'next/head';
import { Layout } from '../components/layout';
import { Banner } from '../components/sections/home/banner';
import { MainContextProvider } from '../src/contexts/mainContext';

const Home = () => {
  return (
    <MainContextProvider>
      <Layout>
        <Head>
          <title>my Lab</title>
        </Head>
        <Banner />
      </Layout>
    </MainContextProvider>
  );
};

export default Home;
