import React from 'react';

const ShowStaffMsg = WrapperComponent => {
    return class Enhancer extends WrapperComponent {
        showStaffMsg = (data) => {
            console.log('this is data for show staff msg: ', this.state);
        };

        render () {
            return super.render();
        };
    };
};

export default ShowStaffMsg;