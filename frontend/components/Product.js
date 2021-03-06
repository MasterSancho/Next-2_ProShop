import Link from 'next/link';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
 return (
  <Card className='my-3 p-3 rounded'>
   <Link href={`/product/${product._id}`}>
    <a>
     <Card.Img src={product.image} variant='top' />
    </a>
   </Link>

   <Card.Body>
    <Link href={`/product/${product._id}`}>
     <a>
      <Card.Title as='div'>
       <strong>{product.name}</strong>
      </Card.Title>
     </a>
    </Link>

    <Card.Text as='div'>
     <Rating value={product.rating} text={`${product.numReviews} reviews`} />
    </Card.Text>

    <Card.Text as='h3'>${product.price}</Card.Text>
   </Card.Body>
  </Card>
 );
};

export default Product;
