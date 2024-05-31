import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';


const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/DG777777/shopping/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data); 
  };
  useEffect(() => {
    getProductDetail();
  },[]);


  return (
    <Container>
        <Row>
             <Col className='product-img'>
                 <img src={product?.img} alt={product?.title}></img>
             </Col>

             <Col>
                <div>{product?.title}</div>
                <div>{product?.price}</div>
                <div>{product?.choice}</div>

             </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail 