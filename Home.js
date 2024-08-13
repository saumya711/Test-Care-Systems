import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CiHeart } from "react-icons/ci";

const Home = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = async () => {
        try {
            const {data} = await axios.get('https://fakestoreapiserver.reactbd.com/products');
            setProducts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh' }}>
      {products.map((product)=> (
        <Card style={{ width: '25rem', marginTop: '1%', textAlign:'left' }} key={product.id}>
           <div style={{ position: 'relative' }}>
              <Card.Img variant="top" src={product.image} />
              <CiHeart
                  style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      fontSize: '1.5rem',
                      cursor: 'pointer'
                  }}
              />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text  style={{ fontWeight: 'bold' }}>LKR .{product.price}.00</Card.Text>
          </Card.Body>
            <Card.Body>
              <Button variant="primary">BUY NOW</Button>
              <Button variant="outline-primary" style={{ marginLeft: '1%'}}>LERAN MORE</Button>
          </Card.Body>
        </Card>
      ))}

    </div>
    
  )
}

export default Home
