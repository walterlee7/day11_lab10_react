import React from 'react';

const Items = (props) => {

    let listItems = props.info.map((item, index) => {
        return (
            <div key={index} className="comment-container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-white post">
                            <div className="text-container">
                                <div className="text-wrapper panel-shadow">{item.text}</div>
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