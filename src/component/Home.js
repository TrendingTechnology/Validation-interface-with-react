import React, {Component} from 'react';
import Header from './Header';
import {Container, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <Container>
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
            </Container>
        );
    }
}

export default Home;