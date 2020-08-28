import React, { useState } from 'react';
import Product from '../Product/Product';
import './Course.css';
import Cart from '../Cart/Cart';


const Course = () => {
    const Course=[
        {name:"Productive and Time Management",price:250,"img":"https://img-a.udemycdn.com/course/480x270/655608_270e_4.jpg"},
        {name:"Font End Web Development For Beginner",price:500, "img":"https://img-a.udemycdn.com/course/480x270/1691862_eba9_3.jpg"},
        {name:"Web Development Masterclass Complete",price:300, "img":"https://img-a.udemycdn.com/course/480x270/965528_737d_5.jpg"},
        {name:"MongoDB - The Complete Developer's Guide 2020",price:100,"img":"https://img-a.udemycdn.com/course/480x270/1166306_84a1_3.jpg"},
        {name:"The Complete Font-End Web Development Course",price:300,"img":"https://img-a.udemycdn.com/course/480x270/1691862_eba9_3.jpg"},
        // {"img":"https://img-a.udemycdn.com/course/480x270/1906852_93c6.jpg"},
        // {"img":"https://img-a.udemycdn.com/course/240x135/2488654_e156_3.jpg"},
        {name:"Javascript full course",price:250,"img":" https://img-a.udemycdn.com/course/480x270/1436332_1fc3_5.jpg"},
        {name:"Complete Guidline",price:120,"img":" https://img-a.udemycdn.com/course/480x270/2678112_39d1_5.jpg"},
        {name:"github full course",price:150,"img":" https://img-a.udemycdn.com/course/480x270/818990_57c0_3.jpg"},
        {name:"Node js",price:210,"img":"https://img-a.udemycdn.com/course/480x270/2527106_6506_5.jpg"},
        {name:"Ethical hacking system course",price:50,"img":"https://img-a.udemycdn.com/course/480x270/755984_6223_3.jpg"}
    ]
    // const CourseCheck = () =>{
    //     const first10 =Course.slice(0,10);
    //     const[course,setCourse] = useState(first10);
    //     const [cart ,setCart] = useState([]);
    // }
    const [cart ,setCart] = useState([]);
    
    const handelAddCourse =(course) =>{
        console.log('btn is click',course);
        const newCart = [...cart ,course];
        setCart(newCart);
    }
    return (
        <div className="product-container">
            <div className="product">
               {
                    Course.map(cs => <Product course={cs} handelAddCourse={handelAddCourse}></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;