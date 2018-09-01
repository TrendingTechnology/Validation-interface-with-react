import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import {Col, Form, Row} from 'reactstrap';
import Header from './Header';
import Input from './Input';
import '../css/Login.css';

// import '../css/style.css';

class Login extends React.Component {
    render() {
        return (
            <div className="login-div">
                <Col sm={{size: 6, offset: 3}}>
                    <br/>
                    <Header title={'Login'} subtitle={'Please use the form below to sign in to your account.'}/>
                    <Form className="login-form">
                        <Row className="login-box1">
                            <label htmlFor="Email"> Email: </label>
                            <Input
                                type={'email'}
                                id={'Email'}
                                placeholder={'example@email.com'}
                            />
                        </Row>
                        <Row className="login-box2">
                            <label htmlFor="password"> Password: </label>
                            <Input
                                type={'password'}
                                id={'Password'}
                                placeholder={'●●●●●●●●'}
                            />
                        </Row>
                        <Row>
                            <Col sm={{size: 'auto', offset: 2}}>
                                <Link to="/">
                                    <Button color="primary" className="login-btn">Login</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Link to="/">
                    <Button color="primary" className="btn-block">Back</Button>
                </Link>
            </div>
        );
    }
}

export default Login;