import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
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
                    <Container>
                        <Route exact path="/" render={() => (
                            <Col sm={{size: 6, offset: 3}}>
                                <div style={{height: '10vh'}}></div>
                                <Header title={'Membership'} subtitle={'Click button to start'}/>
                                <div className="btnBlock">
                                    <Link to="/login">
                                        <Button color="primary" className="btnStyle" block>Log In</Button>
                                    </Link>
                                    <br/>
                                    <a href="" target="_blank">Problem with log in?</a>
                                    <br/>
                                    <Link to="/stage1">
                                        <Button color="primary" className="btnStyle" block>Sign Up</Button>
                                    </Link>
                                </div>
                            </Col>
                        )}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/stage1" component={Stage1}/>
                        <Route path="/stage2" component={Stage2}/>
                        <Route path="/stage3" component={Stage3}/>
                        <Route path="/stage4" component={Stage4}/>
                        <Route path="/complete" component={Complete}/>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default App;
