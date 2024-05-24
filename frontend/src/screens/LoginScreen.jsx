import React from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Row } from 'react-bootstrap';

const LoginScreen = () => {

    const submitHandler = async(e) => {
        e.preventDefault();
        console.log(value)
    }

    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" 
                    value={email}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" 
                    value={email}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button type="submit"  variant='primary' className='mt-3'>
                    Sign In
                </Button>

                <Row className='py-3'>
                    <Col className='text-center'> New customer?
                        <Link to='/register' className='text-decoration-none'>
                            <p>Register</p>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default LoginScreen
