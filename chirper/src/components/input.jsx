import React from 'react';
import UserInfo from './UserInfo';
import Time from './time';

const Input = (props) => {
    return (
        <div className="Input">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-white post panel-shadow">
                            <div className="post-heading">
                                <div className="pull-left meta">
                                    <div className="title h5">
                                        <UserInfo user={props.user} />
                                    </div>
                                </div>
                            </div>
                            <div className="post-description">
                                <p>{props.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Input;