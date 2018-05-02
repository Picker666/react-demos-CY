import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Company from '../components/Company';
import Park from '../components/Park';
import './index.css';

class Main extends Component {
    // constructor (props) {
    //     super(props);
    // };
    componentDidMount () {
        console.log('this is Main...');
    };

    render () {
        return (
            <main className={'main'}>
                <nav>
                    <Link to='/'>{'Home'}</Link>&nbsp;&#x3000;
                    <Link to='/company'>{'Company'}</Link>&nbsp;&#x3000;
                    <Link to='/park'>{'park'}</Link>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/company' component={Company} />
                    <Route exact path='/park' component={Park} />
                    <Redirect to='/' />
                </Switch>
            </main>  
        )
    }
};

export default Main;