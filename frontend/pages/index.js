import { Container } from 'react-bootstrap';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
 return (
  <div>
   <Head>
    <title>Welcome To ProShop</title>
    <meta
     name='description'
     content='Find the best productsfor the cheapest prices'
    />
    <link rel='icon' href='/favicon.ico' />
    <link
     rel='stylesheet'
     href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
     integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
     crossorigin='anonymous'
     referrerpolicy='no-referrer'
    />
   </Head>

   <Header />
   <main className='py-3'>
    <Container>
     <div>
      <h1>Welcome to ProShop</h1>
     </div>
    </Container>
   </main>
   <Footer />
  </div>
 );
}
