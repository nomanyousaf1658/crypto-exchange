import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react';

function Blog() {
    const [show, setShow] = useState(false);
    const [title, addTitle] = useState('');
    const [subtitle, addSubtitle] = useState('');
    const [author, addAuthor] = useState('');
    const [posts, addPosts] = useState([]);
    const [editPost, addEditPost] = useState({});

    const handleClose = () => {
        addTitle('');
        addSubtitle('');
        addAuthor('');
        setShow(false);
        addEditPost({});
    };
    const handleShow = (e) => {
        const editablePostID = e.target.getAttribute('postid');
        if (editablePostID) {
            const postToEdit = posts.filter((post) => {
                return post.id == editablePostID;
            })

            addTitle(postToEdit[0].title);
            addSubtitle(postToEdit[0].subtitle);
            addAuthor(postToEdit[0].author);
            addEditPost(postToEdit[0]);
        }

        setShow(true);
    }

    const handleBlogSubmit = (e) => {
        e.preventDefault();

        if (!title || !subtitle || !author) {
            alert("Please input data");
        } else {
            if (editPost.id) {
                //Find index to update    
                const objIndex = posts.findIndex((obj => obj.id == editPost.id));
                //Update post object
                posts[objIndex].title = title;
                posts[objIndex].subtitle = subtitle;
                posts[objIndex].author = author;
            } else {
                addPosts([...posts, {
                    id: Math.ceil(Math.random() * 10000),
                    title: title,
                    subtitle: subtitle,
                    author: author
                }]);
            }
            handleClose();
        }
    }

    const handlePostDelete = (e) => {
        const indexToDelete = posts.findIndex((post) => {
            return post.id == e.target.getAttribute('postid');
        });

        if (indexToDelete >= 0) {
            posts.splice(indexToDelete, 1);
        }
        addPosts([...posts]);
    }

    return (
        <Container>
            <Row>
                <Col sm={{ span: 12 }} className='p-5 mt-5 mb-5'>
                    <h3 className='pb-4 '>Blog posts</h3>
                    <Button variant="primary" onClick={handleShow} className='mb-3'>
                        Add new
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="blog.title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={title} onChange={(e) => { addTitle(e.target.value) }} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="blog.subtitle">
                                <Form.Label>Subtitle</Form.Label>
                                <Form.Control type="text" value={subtitle} onChange={(e) => { addSubtitle(e.target.value) }} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="blog.author">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" value={author} onChange={(e) => { addAuthor(e.target.value) }} required />
                            </Form.Group>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="primary" type="submit" onClick={handleBlogSubmit}>Save</Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Subtitle</th>
                                <th>Author</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {posts.map(function (value, index) {
                                return (
                                    <tr key={index}>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                        <td>{value.subtitle}</td>
                                        <td>{value.author}</td>
                                        <td><Button postid={value.id} onClick={handleShow}>Edit</Button> <Button postid={value.id} onClick={handlePostDelete}>Delete</Button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;