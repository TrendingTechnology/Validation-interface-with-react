import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
// import '../css/style.css';
import '../css/Stage4.css';
// import Input from './Input';
// import Select from './Select';

class Stage4 extends Component {
    render() {
        return (
            <div>
                <Col sm={{size: 6, offset: 3}}>
                    <div className="step-bar">
                        <div className="bar-wrap">
                            <div className="bar active"/>
                            <div className="bar active"/>
                            <div className="bar active"/>
                        </div>
                        <div className="step active done">
                            <FontAwesomeIcon icon={faCheck} color="#fff" size="xs"/>
                        </div>
                        <div className="step active done">
                            <FontAwesomeIcon icon={faCheck} color="#fff" size="xs"/>
                        </div>
                        <div className="step active done">
                            <FontAwesomeIcon icon={faCheck} color="#fff" size="xs"/>
                        </div>
                        <div className="step active">
                            <div className="in-step"/>
                        </div>
                    </div>
                </Col>

                <Header title={'Payment Method'} subtitle={'Add your credit card information!'}/>

                <Form className="step4-form">
                    <FormGroup>
                        <Label for="card-number">Card Number</Label>
                        <Input
                            type={'number'}
                            id={'card-number'}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="card-name">Cardholder</Label>
                        <Input
                            type={'text'}
                            id={'card-name'}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bank-name">Bank name</Label>
                        <Input
                            type={'text'}
                            id={'bank-name'}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="cvv">CVV</Label>
                        <Input
                            type={'text'}
                            id={'cvv'}
                            placeholder={'123'}
                        />
                    </FormGroup>
                    <FormGroup className="expired-date-form">
                        <Label for="expire-date-month">Expired Date</Label>
                        <Input
                            type={'text'}
                            id={'expire-date-month'}
                            placeholder={'MM'}
                        />
                        <Input
                            type={'text'}
                            id={'expire-date-year'}
                            placeholder={'YY'}
                        />
                    </FormGroup>
                </Form>
                <div className="btn-block">
                    <Link to="/app/complete">
                        <Button color="primary" block>Done</Button>
                    </Link>
                    <Link to="/app/stage3">
                        <Button color="primary" block>Back</Button>
                    </Link>
                </div>
            </div>
        )
            ;
    }
}

export default Stage4;
