import React from 'react';
import './Product.css'
import { Button, Container } from 'react-bootstrap';

const Product = (props) => {
    // console.log(props)
    const {name,img,price} = props.course;
    return (
        <Container>
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <span>{name}</span>
                <p>${price}</p>
                <Button variant="success" onClick={() => props.handelAddCourse(props.course)}>Enroll Now</Button>
                <br/>
            </div>
            
        </div>
        </Container>
    );
    
};

export default Product;