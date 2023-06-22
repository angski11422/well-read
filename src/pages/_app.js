import { Nunito } from 'next/font/google';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';


import '@/styles/globals.scss';
import Layout from '../components/layout/layout';


const nunito = Nunito({ subsets: ['latin'] });

export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <main className={nunito.className}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </main>
  )
}
