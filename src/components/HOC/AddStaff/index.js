import React from 'react';

const AddStaff = WrapperComponent => {
    return class Enhancer extends WrapperComponent {
        
        addStaff = (data) => {
            console.log('this is data for add staff: ', data);
        };

        render () {
            return super.render();
        };
    };
};

export default AddStaff;