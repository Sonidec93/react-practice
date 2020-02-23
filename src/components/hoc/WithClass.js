import React from 'react';

const WithClass = (Wrapper, className) => {

    return (props) => {
        return (
            <div className={className}>
                <Wrapper {...props} />
            </div>
        )
    };

}

export default WithClass;