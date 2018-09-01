import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import {Container, Button, Col} from 'reactstrap';

import Stage1 from './component/Stage1';
import Stage2 from './component/Stage2';
import Stage3 from './component/Stage3';
import Stage4 from './component/Stage4';
import Complete from './component/Complete';
import Header from './component/Header';
// import NavigationBar from './component/NavigationBar';
import Login from './component/Login';
import './css/style.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app" style={{backgroundColor: '#fff'}}>
                    <Container style={{minHeight: `${window.innerHeight}px`}}>
                        <Switch>
                            <Route exact path="/" render={() => (
                                <Col sm={{size: 6, offset: 3}}>
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
                                    <Header title={'Membership'} subtitle={'Click button to start'}/>
                                    <div className="btnBlock">
                                        <Link to="/app/login">
                                            <Button color="primary" className="btnStyle" block>Log In</Button>
                                        </Link>
                                        <br/>
                                        <a href="" target="_blank">Problem with log in?</a>
                                        <br/>
                                        <Link to="/app/stage1">
                                            <Button color="primary" className="btnStyle" block>Sign Up</Button>
                                        </Link>
                                    </div>
                                </Col>
                            )}
                            />
                            <Route path="/app/login" component={Login}/>
                            <Route path="/app/stage1" component={Stage1}/>
                            <Route path="/app/stage2" component={Stage2}/>
                            <Route path="/app/stage3" component={Stage3}/>
                            <Route path="/app/stage4" component={Stage4}/>
                            <Route path="/app/complete" component={Complete}/>
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default App;
