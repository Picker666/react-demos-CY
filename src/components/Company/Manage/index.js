import React, { Component } from 'react';
import { compose } from 'redux'
import { AddStaff, ChangeStaffData, DeleteStaff, ShowStaffMsg } from '../../HOC';

const Enhancer = compose(AddStaff, ChangeStaffData, DeleteStaff, ShowStaffMsg);

class Manage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            staffData: [{staffId: 7878, name: 'Picker', department: 'B/E', work: 'write code for UI'},
                {staffId: 7878, name: 'Kobe', department: 'B/E', work: 'write code for data'},
                {staffId: 7878, name: 'Could', department: 'F/E', work: 'write code and test'},
                {staffId: 7878, name: 'Gavin', department: 'All', work: 'look at them writting code and testing.'}
            ]
        }
    };

    componentDidMount () {
        console.log('this is Manage...', this.props);
    };

    render () {
        return (
            <div>
                <h2>{'this is Manage panel.....'}</h2>
                <button onClick={this.showStaffMsg}>{'查询'}</button>&nbsp;&#x3000;
                <button onClick={this.addStaff}>{'添加'}</button>&nbsp;&#x3000;
                <button onClick={this.deleteStaff}>{'删除'}</button>&nbsp;&#x3000;
                <button onClick={this.changeStaffData}>{'更改'}</button>
            </div>
        );
    };
};

export default Enhancer(Manage);