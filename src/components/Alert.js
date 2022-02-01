import React from 'react'

function Alert( props ) {
    let tp = props.alert? props.alert.type: "";
    if (tp === 'danger') {
        tp = "error"
    }
    
    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }

    return (
        <div className='' style={{height: '30px',width: '500px',
        position: 'absolute',
        top: '8%'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <p><strong>{capitalize(tp) + ": "}</strong> {props.alert.msg}</p>
            </div>}
        </div>
    )
}

export default Alert;