import React from 'react';

const Items = (props) => {

    let listItems = props.info.map((item, index) => {
        return (
            <div key={index} className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-white post panel-shadow">
                            <div className="post-description">
                                <div>{item.text}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="title h5">{listItems}</div>
    );
}

export default Items;