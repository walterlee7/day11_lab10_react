import React from 'react';
//import Time from './time';

const Items = (props) => {

    let listItems = props.info.map((item, index) => {
        return (
            <div key={index} className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-white post panel-shadow">
                            <div className="post-heading">
                                <div className="pull-left meta">
                                    <div className="title h5">
                                        <div>{item.name}</div>
                                    </div>
                                    {/* <h6 className="text-muted time">
                                        <Time />
                                    </h6> */}
                                </div>
                            </div>
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