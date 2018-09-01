import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faImages} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

import '../css/Stage3.css';
import '../css/style.css';

class Stage3 extends Component {
    render() {
        return (
            <div>
                <Col sm={{size: 6, offset: 3}}>
                    <div className="step-bar">
                        <div className="bar-wrap">
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
                            <div className="in-step"/>
                        </div>
                        <div className="step"/>
                    </div>
                </Col>

                <Header title={'Update Your Photo'}/>

                <div className="img-upload">
                    <input type="file" id="img"/>
                    <FontAwesomeIcon icon={faImages} size="3x" color="#9B9B9B"/>
                    <div className="img-word">
                        <span>UPLOAD UP TO 3 PHOTOS</span>
                        <div><br/></div>
                        <span>Less than 5MB/photo</span>
                    </div>
                </div>
                <div className="btn-block">
                    <Link to="/app/stage4">
                        <Button color="primary" block>Next</Button>
                    </Link>
                    <Link to="/app/stage2">
                        <Button color="primary" block>Back</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Stage3;
