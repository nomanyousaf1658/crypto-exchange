import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// import { loggedInUser as LoggedInAction, users as reduxUsersAction } from './redux/actions/userAction';


function TransferCoin(props) {
    const navigate = useNavigate();
    const loggedInUser = useSelector((state) => state.selectUserReducer.logged_in_user);
    const allUsers = useSelector((state) => state.selectUserReducer.users);
    const [transferQty, updateTransfer] = useState(0);
    const [transferToEmail, updateTransferToEmail] = useState(null);

    // const dispatchLoggedInUserAction = useDispatch();
    // const dispatchAllUsersAction = useDispatch();



    useEffect(() => {
        if (!props.loggedInUser?.email) {
            navigate('/');
        }
    });

    const coinsOptions = () => {
        let coins = [];
        for (let index = 1; index <= loggedInUser.coin_qty; index++) {
            coins.push(index);
        }
        return coins;
    }

    const canTransferToUsers = () => {
        return allUsers.filter((user) => {
            return user.email !== loggedInUser.email;
        });
    }

    const handleTransferSubmit = (e) => {
        e.preventDefault();

        //Find index From & To users Indexes   
        const transferFromUserIndex = allUsers.findIndex((obj => obj.email === loggedInUser.email));
        const transferToUserIndex = allUsers.findIndex((obj => obj.email === transferToEmail));

        if (allUsers[transferFromUserIndex].coin_qty <= 0) {
            alert("No more coins to transfer");
        } else {
            //Deduct From User
            allUsers[transferFromUserIndex].coin_qty = allUsers[transferFromUserIndex].coin_qty - transferQty;
            //Allocate TO User
            allUsers[transferToUserIndex].coin_qty = (parseInt(allUsers[transferToUserIndex].coin_qty) + parseInt(transferQty));

            console.log(props);

            
            // dispatchLoggedInUserAction(LoggedInAction(props.loggedInUser));
            // dispatchLoggedInUserAction(LoggedInAction(JSON.parse(JSON.stringify(props.loggedInUser))));
        }

    }

    return (
        <Container>
            <Row>
                <Col sm={{ span: 6 }} className='p-5 mt-5 mb-5'>
                    <h3 className='pb-4 '>Transfer Coins</h3>

                    <Form.Group className="mb-3" controlId="blog.title">
                        <Form.Label>Transfer To</Form.Label>
                        <Form.Select required onChange={(e) => { updateTransferToEmail(e.target.value) }} defaultValue={canTransferToUsers()[0].email}>
                            <option value=''>--Select user--</option>
                            {canTransferToUsers().map((element, index) => <option defaultValue={element.email} key={index} value={element.email}>{element.email}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="blog.title">
                        <Form.Label>Transfer Quantity</Form.Label>
                        <Form.Select onChange={(e) => { updateTransfer(e.target.value) }}>
                            {coinsOptions().map((element, index) => <option key={index} value={element}>{element}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleTransferSubmit}>Transfer</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default TransferCoin;