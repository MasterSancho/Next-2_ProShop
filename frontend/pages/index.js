import { Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';
import products from '../products';

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
     <h1>Latest Products</h1>
     <Row>
      {products.map((product) => (
       <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        <Product product={product} />
       </Col>
      ))}
     </Row>
    </Container>
   </main>
   <Footer />
  </div>
 );
}
