import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Form } from 'reactstrap';
import Header from './Header';
import Input from './Input';
import '../css/Stage1.css';
import '../css/style.css';

class Stage1 extends React.Component{
  render() {
      return (
          <div>
              <Col sm={{size: 8, offset: 3}}>
                  <div className="stepbar">
                      <div className="barwrap">
                          <div className="bar"/>
                          <div className="bar"/>
                          <div className="bar"/>
                      </div>
                      <div className="step active">
                          <div className="instep"/>
                      </div>
                      <div className="step"/>
                      <div className="step"/>
                      <div className="step"/>
                  </div>

                  <Header title={'Create Account'} subtitle={'Glad to see you here!'}/>

                  <Form className="step1Form">
                      <label htmlFor="Account"> Account </label>
                      <Input
                          type={'email'}
                          id={'Account'}
                          placeholder={'example@email.com'}
                      />
                      <label htmlFor="password"> Password</label>
                      <Input
                          type={'password'}
                          id={'Password'}
                          placeholder={'●●●●●●●●'}
                      />
                      <label htmlFor="Confirm Password"> Confirm Password</label>
                      <Input
                          type={'password'}
                          id={'Confirm Password'}
                          placeholder={'●●●●●●●●'}
                      />
                      <Link to="/app/stage2">
                          <Button color="primary" className="btnStyle" block> SUBMIT </Button>
                      </Link>
                  </Form>
              </Col>
          </div>
      );
  }
}

export default Stage1;
