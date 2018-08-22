import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import Company from '../components/Company';
import Park from '../components/Park';
import styles from './index.scss';

class Main extends Component {
    componentDidMount () {
        console.log('this is Main...');
    };

    render () {
        return (
            <main className={styles.mainSec}>
                <nav>
                    <NavLink className={styles.resetNavLink} activeClassName={styles.navActive} to='/home'>{'Home'}</NavLink>&nbsp;&#x3000;
                    <NavLink className={styles.resetNavLink} activeClassName={styles.navActive} to='/company'>{'Company'}</NavLink>&nbsp;&#x3000;
                    <NavLink className={styles.resetNavLink} activeClassName={styles.navActive} to='/park'>{'park'}</NavLink>
                </nav>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route path='/company' component={Company} />
                    <Route exact path='/park' component={Park} />
                    <Redirect to='/home' />
                </Switch>
            </main>  
        )
    }
};

export default Main;