import React from 'react';

const DeleteStaff = WrapperComponent => {
    return class Enhancer extends WrapperComponent {
        deleteStaff = (data) => {
            console.log('this is data for delete staff: ', data);
        };

        render () {
            return super.render();
        };
    };
};

export default DeleteStaff;