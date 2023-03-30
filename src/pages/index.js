import Head from 'next/head';
import Authentication from './auth/authentication';

export default function Home() {
  return (
    <>
      <Head>
        <title>JP APP</title>
      </Head>
      <div>
        <Authentication />
      </div>
    </>
  )
}
