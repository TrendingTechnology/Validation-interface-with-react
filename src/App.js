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

class App extends React.Component {
    render() {
        return (
            <div className="app" style={{backgroundColor: '#fff'}}>
                <Container style={{
                    minHeight: `${window.innerHeight}px`,
                }}
                >
                    <Route exact path="/app" render={() => (
                        <Col sm={{size: 6, offset: 3}} style={{borderTop: '4px solid #007bff'}}>
                            <div className="stepbar">
                                <div className="barwrap">
                                    <div className="bar"/>
                                    <div className="bar"/>
                                    <div className="bar"/>
                                </div>
                                <div className="step"/>
                                <div className="step"/>
                                <div className="step"/>
                                <div className="step"/>
                            </div>
                            <Header title={'Membership Sign up'} subtitle={'Click button to start'}/>
                            <Link to="/app/stage1">
                                <Button color="primary" block>Sign Up</Button>
                            </Link>
                        </Col>
                    )}
                    />
                    <Route exact path="/app/stage1" component={Stage1}/>
                    <Route exact path="/app/stage2" component={Stage2}/>
                    <Route exact path="/app/stage3" component={Stage3}/>
                    <Route exact path="/app/stage4" component={Stage4}/>
                    <Route exact path="/app/complete" component={Complete}/>
                </Container>
            </div>
        );
    }
}

export default App;
