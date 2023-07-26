import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function Home(props) {
    const loggedInUser = useSelector((state) => state.selectUserReducer.logged_in_user);
    const navigate = useNavigate();

    const handleTransferClick = () => {
        navigate('/transfer')
    }

    return (
        <div>
            <div className='text-center p-5'><strong>Hello From Home Component</strong></div>
            <div>
                {
                    (loggedInUser?.email) ?
                        <Container>
                            <Row>
                                <Col sm={{ span: 12 }} className='p-5 mt-5 mb-5'>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Coin Qty</th>
                                                <th>Coin Rate</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr key={1}>
                                                <td>{loggedInUser.coin_qty}</td>
                                                <td>${loggedInUser.coin_rate}</td>
                                                <td><Button className={(loggedInUser.coin_qty <= 0) ? 'disabled' : ''} onClick={handleTransferClick}>Transfer</Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                        : ""
                }
            </div>
        </div>
    );
}

export default Home