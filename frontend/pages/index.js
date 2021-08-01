import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
 return (
  <div className={styles.container}>
   <Head>
    <title>Welcome To ProShop</title>
    <meta
     name='description'
     content='Find the best productsfor the cheapest prices'
    />
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <div>
    <h1>Welcome to ProShop</h1>
   </div>
  </div>
 );
}
