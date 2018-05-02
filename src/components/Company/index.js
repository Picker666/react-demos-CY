import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import FontEnd from './FontEnd';
import BackEnd from './BackEnd';
import Test from './Test';
import Manage from './Manage';

class Company extends Component {
    componentDidMount () {
        console.log('this is Company...');
    };

    render () {
        const { match } = this.props;
        console.log(match);
        return (
            <div>
                <p>{'this is Company.....'}</p>
                <nav>
                    <Link to='/company/'>{'FontEnd'}</Link>&nbsp;&#x3000;
                    <Link to='/company/backEnd/backEnd'>{'backEnd'}</Link>&nbsp;&#x3000;
                    <Link to='/company/test/test'>{'test'}</Link>&nbsp;&#x3000;
                    <Link to='/company/manager/manager'>{'manager'}</Link>
                </nav>
                <Switch>
                    <Route exact path={`${match.path}/`} component={FontEnd} />
                    <Route exact path={`${match.path}/backEnd/:department`} component={BackEnd} />
                    <Route exact path={`${match.path}/test/:department`} component={Test} />
                    <Route exact path={`${match.path}/manager/:department`} component={Manage} />
                    <Redirect to='company/FontEnd/' />
                </Switch>
            </div>
        );
    };
};

export default Company;
