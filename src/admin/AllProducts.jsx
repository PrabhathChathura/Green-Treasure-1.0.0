import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import productImg from '../assets/images/arm-chair-01.jpg';
import useGetData from '../custom-hooks/useGetData';

const AllProducts = () => {

    const {data:productsData, loading} = useGetData('products');

     
    return ( 
    
    <section>
        <Container>
            <Row>
                <Col lg= '12'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      
                      {
                        loading ? <h3>loading....</h3> :   productsData.map(item=>(
                                <tr key = {item.id}>
                                <td><img src={item.imgUrl} alt=""/></td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>${item.price}</td>
                                <td> 
                                    {}
                                    <button className='btn btn-primary '>Delete</button>
                                     </td>
                            </tr>

                            ))
                        }
                      
                    
                    </tbody>
                </table>
                </Col>
            </Row>
        </Container>
    </section>
    )
};

export default AllProducts;
