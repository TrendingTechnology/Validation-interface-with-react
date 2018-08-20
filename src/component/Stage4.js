import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Form } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';
import Header from './Header';
import Input from './Input';
import Select from './Select';

function Stage4() {
  return (
    <div>
      <Col sm={{ size: 6, offset: 3 }} style={{ borderTop: '4px solid #007bff' }}>
        <div className="stepbar">
          <div className="barwrap">
            <div className="bar active" />
            <div className="bar active" />
            <div className="bar active" />
          </div>
          <div className="step active done">
            <FontAwesomeIcon icon={faCheck} color="#fff" size="xs" />
          </div>
          <div className="step active done">
            <FontAwesomeIcon icon={faCheck} color="#fff" size="xs" />
          </div>
          <div className="step active done">
            <FontAwesomeIcon icon={faCheck} color="#fff" size="xs" />
          </div>
          <div className="step active">
            <div className="instep" />
          </div>
        </div>

        <Header title={'Payment Method'} subtitle={'Add your credit card infomation!'} />

        <Form>
          <Row>
            <Col sm="12">
              <label for="card-number">Card Number</label>
              <Input
                type={'number'}
                id={'card-number'}
                placeholder={'1234 5678 9012 3456'}
              />
            </Col>
          </Row>

          <Row>
            <Col sm="6">
              <label for="card-name">Cardholder Name</label>
              <Input
                type={'text'}
                id={'card-name'}
                placeholder={'EXAMPLE NAME'}
              />
            </Col>
            <Col sm="6">
              <label for="bank-name">Bank Name</label>
              <Input
                type={'text'}
                id={'bank-name'}
                placeholder={'EXAMPLE BANK'}
              />
            </Col>
          </Row>

          <Row>
            <Col sm="4">
              <label for="cvv">CVV</label>
              <Input
                type={'text'}
                id={'cvv'}
                placeholder={'123'}
              />
            </Col>
            <Col sm="4">
              <label for="expire-date-year">Expire Date</label>
              <Select
                id={'expire-date-year'}
                start={2018}
                end={2030}
                placeholder={'YYYY'}
              />
            </Col>
            <Col sm="4">
              <label for="expire-date-year" style={{ opacity: 0 }} >Expire Date</label>
              <Select
                id={'expire-date-month'}
                start={1}
                end={12}
                placeholder={'MM'}
              />
            </Col>
          </Row>

          <Link to="/week6/complete">
            <Button color="primary" block >DONE</Button>
          </Link>
        </Form>
      </Col>
    </div>
  );
}

export default Stage4;
