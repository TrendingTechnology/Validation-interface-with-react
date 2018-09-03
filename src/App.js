import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './component/Home';
import Stage1 from './component/Stage1';
import Stage2 from './component/Stage2';
import Stage3 from './component/Stage3';
import Stage4 from './component/Stage4';
import Complete from './component/Complete';
// import NavigationBar from './component/NavigationBar';
import Login from './component/Login';
import './css/style.css';

class App extends Component {
    render() {
        return (
            <div className="app" style={{backgroundColor: '#fff'}}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/stage1" component={Stage1}/>
                    <Route path="/stage2" component={Stage2}/>
                    <Route path="/stage3" component={Stage3}/>
                    <Route path="/stage4" component={Stage4}/>
                    <Route path="/complete" component={Complete}/>
                    <Route component={() => <div>404 not found</div>}/>
                    {/*<Redirect from="/complete" to="/stage1"/>*/}
                </Switch>
            </div>
        );
    }
}

export default App;
