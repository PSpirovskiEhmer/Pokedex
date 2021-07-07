import React from 'react';

function newComponent(props){
    return(
        <div>
            <button onClick={() => props.calcHandler()}>
                Hello
            </button>
        </div>
    )
}

export default newComponent