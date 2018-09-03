import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, FormGroup, Form, Input, Label} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
//import Input from './Input';
import Select from './Select';
import '../css/stage2.css';
import '../css/style.css';

class Stage2 extends Component {
    render() {
        return (
            <div className="stage2">
                <div className="step-bar">
                    <div className="bar-wrap">
                        <div className="bar active"/>
                        <div className="bar"/>
                        <div className="bar"/>
                    </div>
                    <div className="step active done">
                        <FontAwesomeIcon icon={faCheck} color="#fff" size="xs"/>
                    </div>
                    <div className="step active">
                        <div className="instep"/>
                    </div>
                    <div className="step"/>
                    <div className="step"/>
                </div>

                <Header title={'Personal Info'}/>

                <Form className="name-form">
                    <FormGroup>
                        <Label for="firstName"> First Name </Label>
                        <Input
                            type={'text'}
                            id={'firstName'}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="middleName"> Middle Name (Optional) </Label>
                        <Input
                            type={'text'}
                            id={'middleName'}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName"> Last Name </Label>
                        <Input
                            type={'text'}
                            id={'lastName'}
                        />
                    </FormGroup>
                </Form>
                <Form className="step2-form">
                    <FormGroup>
                        <Label for="phone">Phone #</Label>
                        <Input
                            type={'text'}
                            id={'phone'}
                        />
                    </FormGroup>
                </Form>
                <Form className="birthday-form">
                    <FormGroup>
                        <Label>Date of birth (optional)</Label>
                        <Select
                            id={'birth-month'}
                            start={1}
                            end={12}
                            placeholder={'MM'}
                        />
                        <Select
                            id={'birth-date'}
                            start={1}
                            end={31}
                            placeholder={'DD'}
                        />
                        <Select
                            id={'birth-year'}
                            start={1900}
                            end={2018}
                            placeholder={'YYYY'}
                        />
                    </FormGroup>
                </Form>
                <Form className="address-form">
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input
                            type={'text'}
                            id={'ad-detail'}
                            placeholder={'Address'}
                        />
                    </FormGroup>
                </Form>
                <div className="btn-block">
                    <Link to="/stage3">
                        <Button color="primary" block>Next</Button>
                    </Link>
                    <Link to="/stage1">
                        <Button color="primary" block>Back</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Stage2;
