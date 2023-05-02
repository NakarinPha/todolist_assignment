import React from 'react';
import '../App.css';

function Container(props) {
    const { header } = props;
    return (
        <div className="container">
            <div className="header">
                <p>{header}</p>
            </div>
            <div className="products">
                {props.children}
            </div>
        </div>

    )
}
export default Container;