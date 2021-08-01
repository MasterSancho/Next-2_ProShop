import { Col, Container, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

export default function Home() {
 return (
  <>
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
  </>
 );
}
