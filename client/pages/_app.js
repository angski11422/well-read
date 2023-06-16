import { Nunito } from 'next/font/google';
import Head from 'next/head';


import '@/styles/globals.scss';
import Layout from '../components/layout/layout';


const nunito = Nunito({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
        <h1>Hello World!!</h1>
      </Layout>
    </main>
  )
}
