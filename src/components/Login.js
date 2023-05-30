import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invalidAttempts, setInvalidAttempts] = useState(0);
    const maxAttempts = 3;

    const loginhandler = (e) => {
        e.preventDefault();
        const userToLogin = props.users.filter((user) => {
            return user.email === email;
        })

        if (invalidAttempts >= maxAttempts) {
            alert("User " + userToLogin[0].name + " Locked")
        } else {
            if (userToLogin.length) {
                if (userToLogin[0].password === password) {
                    props.addLoggedInUser(userToLogin[0]);
                    alert("user logged in successfully.");
                } else {
                    setInvalidAttempts(invalidAttempts + 1);
                }
            } else {
                alert("User not registered.")
            }
        }
    }

    return (
        <Container>
            <Row>
                <Col sm={{ span: 6, offset: 3 }} className='p-5 mt-5 mb-5 login-form-wrapper'>
                    <h3 className='pb-4 '>Please Login</h3>
                    <Form onSubmit={loginhandler}>
                        <Form.Group className="mb-3" controlId="login.email">
                            <Form.Label>Email address *</Form.Label>
                            <Form.Control type="email" required placeholder="abc@xyz.com" onChange={(e) => { setEmail(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="login.password">
                            <Form.Label>Password *</Form.Label> required
                            <Form.Control type="password" placeholder="********" onChange={(e) => { setPassword(e.target.value) }} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                        <br />
                        <br />
                        {(invalidAttempts > 0) ? 'Attempts remanis: ' + (maxAttempts - invalidAttempts) : ''}

                        <p className='text-center p-2 m-0'>Not a member? <Link className="nav-link123" to="/Signup">Sign up</Link></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;