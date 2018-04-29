import React from 'react';

const ChangeStaffData = WrapperComponent => {
    return class Enhancer extends WrapperComponent {
        
        changeStaffData = (data) => {
            console.log('this is data for change staff data: ', data);
        };

        render () {
            return super.render();
        };
    };
};

export default ChangeStaffData;