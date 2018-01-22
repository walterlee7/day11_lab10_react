import React from 'react';
import UserInfo from './UserInfo';
import Time from './time';

const Comment = (props) => {
    return (
        <div className="Comment">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-white post panel-shadow">
                            <div className="post-heading">
                                <div className="pull-left meta">
                                    <div className="title h5">
                                        <UserInfo user={props.user} /> made a chirp.
                                    </div>
                                    <h6 className="text-muted time">
                                        <Time />
                                    </h6>
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

export default Comment;