import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { users } from './redux/actions/userAction';
import {useDispatch} from 'react-redux';

function Signup(props) {
    // Form Inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [cnic, setCnic] = useState('');
    const dispatchUsersAction = useDispatch();

    const signUpHandler = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !address || !cnic) {
            alert("Validation failed");
        } else {
            const userToSave = {
                'name': name,
                'email': email,
                'password': password,
                'address': address,
                'cnic': cnic,
                'coin_qty': Math.floor(Math.random() * (20 - 2 + 1) + 2),
                'coin_rate': Math.floor(Math.random() * (1000 - 100 + 1) + 2)
            };
            props.addUser([...props.users, userToSave]);

            alert("User registered successfully.");

            //Dispatch
            dispatchUsersAction(users([...props.users, userToSave]));

            //Empty Fields
            setName('');
            setEmail('');
            setPassword('');
            setAddress('');
            setCnic('');
        }

    }

    return (
        <Container>
            <Row>
                <Col sm={{ span: 6, offset: 3 }} className='p-5 mt-5 mb-5 login-form-wrapper'>
                    <h3 className='pb-4 '>Please Signup</h3>
                    <Form onSubmit={signUpHandler} noValidate>
                        <Form.Group className="mb-3" controlId="signup.name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="john Doe" required value={name} onChange={(e) => { setName(e.target.value) }} className={name ? '' : 'invalid'} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signup.email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="abc@xyz.com" onChange={(e) => { setEmail(e.target.value) }} className={email ? '' : 'invalid'} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signup.password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="********" onChange={(e) => { setPassword(e.target.value) }} className={password ? '' : 'invalid'} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signup.address">
                            <Form.Label>Home Address</Form.Label>
                            <Form.Control type="text" placeholder="street #123 xyz, lorum ipsum ..." onChange={(e) => { setAddress(e.target.value) }} className={address ? '' : 'invalid'} />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>CNIC</Form.Label>
                            <Form.Control type="file" value={cnic} onChange={(e) => { setCnic(e.target.value) }} className={cnic ? '' : 'invalid'} />
                        </Form.Group>

                        <Button variant="primary" type="submit">Sign Up</Button>
                        <p className='text-center p-2 m-0'>Already a member? <Link className="nav-link123" to="/Login">Login</Link></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;