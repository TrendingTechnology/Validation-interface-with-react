import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, FormGroup, Form, Input, Label} from 'reactstrap';
import Header from './Header';
//import Input from './Input';
import '../css/Stage1.css';
import '../css/style.css';

class Stage1 extends Component {
    render() {
        return (
            <div>
                <div>
                    <Col sm={{size: 8, offset: 3}}>
                        <div className="step-bar">
                            <div className="bar-wrap">
                                <div className="bar"/>
                                <div className="bar"/>
                                <div className="bar"/>
                            </div>
                            <div className="step active">
                                <div className="in-step"/>
                            </div>
                            <div className="step"/>
                            <div className="step"/>
                            <div className="step"/>
                        </div>
                    </Col>
                    <Header title={'Create Account'}/>
                    <div className="account-info">
                        <Form className="step1-form">
                            <FormGroup>
                                <Label for="Account"> Account </Label>
                                <Input
                                    type={'email'}
                                    id={'Account'}
                                    placeholder={'example@email.com'}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password"> Password </Label>
                                <Input
                                    type={'password'}
                                    id={'Password'}
                                    placeholder={'●●●●●●●●'}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Confirm Password"> Confirm Password</Label>
                                <Input
                                    type={'password'}
                                    id={'Confirm-Password'}
                                    placeholder={'●●●●●●●●'}
                                />
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <br/><br/>
                <div className="btn-block">
                    <Link to="/stage2">
                        <Button color="primary" block>Next</Button>
                    </Link>
                    <Link to="/">
                        <Button color="primary" block>Back</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Stage1;
