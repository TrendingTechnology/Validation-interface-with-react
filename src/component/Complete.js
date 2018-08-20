import React from 'react';
import { Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck, faSmile } from '@fortawesome/fontawesome-free-solid';
import Header from './Header';

function Complete() {
  return (
    <div>
      <Col sm={{ size: 6, offset: 3 }} style={{ borderTop: '4px solid #007bff', textAlign: 'center' }}>
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
          <div className="step active done">
            <FontAwesomeIcon icon={faCheck} color="#fff" size="xs" />
          </div>
        </div>

        <Header title={'Congratulations'} subtitle={'Now you’re one of us!'} />
        <FontAwesomeIcon icon={faSmile} color="#BEE1FF" size="10x" />
        <div style={{ color: '#0275D8', fontStyle: 'italic', margin: '30px 0' }} >Redirected to homepage after 5 seconds…</div>
      </Col>
    </div>
  );
}

export default Complete;
