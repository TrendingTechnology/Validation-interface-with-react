import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Button, Col } from 'reactstrap';

import Stage1 from './component/Stage1';
import Stage2 from './component/Stage2';
import Stage3 from './component/Stage3';
import Stage4 from './component/Stage4';
import Complete from './component/Complete';
import Header from './component/Header';
import './css/style.css';

function Week6() {
  return (
    <div className="week6" style={{ backgroundColor: '#fff' }}>
      <Container style={{
        minHeight: `${window.innerHeight}px`,
      }}
      >
        <Route exact path="/week6" render={() => (
          <Col sm={{ size: 6, offset: 3 }} style={{ borderTop: '4px solid #007bff' }} >
            <div className="stepbar">
              <div className="barwrap">
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
              <div className="step" />
              <div className="step" />
              <div className="step" />
              <div className="step" />
            </div>
            <Header title={'F2E Validation'} subtitle={'click button to start'} />
            <Link to="/week6/stage1">
              <Button color="primary" block >Go Sign Up</Button>
            </Link>
          </Col>
        )}
        />
        <Route exact path="/week6/stage1" component={Stage1} />
        <Route exact path="/week6/stage2" component={Stage2} />
        <Route exact path="/week6/stage3" component={Stage3} />
        <Route exact path="/week6/stage4" component={Stage4} />
        <Route exact path="/week6/complete" component={Complete} />
      </Container>
    </div>
  );
}

export default Week6;
