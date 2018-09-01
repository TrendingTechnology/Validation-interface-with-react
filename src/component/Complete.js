import React from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSmile } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

class Complete extends React.Component{
  render() {
      return (
          <div>
              <Col sm={{size: 6, offset: 3}} style={{textAlign: 'center'}}>
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
                      <div className="step active done">
                          <FontAwesomeIcon icon={faCheck} color="#fff" size="xs"/>
                      </div>
                  </div>

                  <Header title={'Congratulations'} subtitle={'Now you’re one of us!'}/>
                  <FontAwesomeIcon icon={faSmile} color="#BEE1FF" size="10x"/>
                  <div style={{color: '#0275D8', fontStyle: 'italic', margin: '30px 0'}}>Redirected to homepage after 5
                      seconds…
                  </div>
              </Col>
          </div>
      );
  }
}

export default Complete;
