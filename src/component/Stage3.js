import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faImages } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

import '../css/Stage3.css';
import '../css/style.css';

class Stage3 extends React.Component{
  render() {
      return (
          <div>
              <Col sm={{size: 6, offset: 3}}>
                  <div className="stepbar">
                      <div className="barwrap">
                          <div className="bar active"/>
                          <div className="bar active"/>
                          <div className="bar"/>
                      </div>
                      <div className="step active done">
                          <FontAwesomeIcon icon={faCheck} color="#fff" size="xs"/>
                      </div>
                      <div className="step active done">
                          <FontAwesomeIcon icon={faCheck} color="#fff" size="xs"/>
                      </div>
                      <div className="step active">
                          <div className="instep"/>
                      </div>
                      <div className="step"/>
                  </div>

                  <Header title={'Update Profile Picture'} subtitle={'We wanna know you more!'}/>

                  <div className="img-upload">
                      <input type="file" id="img"/>
                      <FontAwesomeIcon icon={faImages} size="3x" color="#9B9B9B"/>
                      <div className="img-word">
                          <div>UPLOAD UP TO 3 PHOTOS</div>
                          <span>MAXIMUM SIZE: 150*150px</span>
                      </div>
                  </div>

                  <Link to="/app/stage4">
                      <Button color="primary" block>SUBMIT & NEXT</Button>
                  </Link>
              </Col>
          </div>
      );
  }
}

export default Stage3;
