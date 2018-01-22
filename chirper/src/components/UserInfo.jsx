import React from 'react';

const UserInfo = (props) => {
    return (
        <div className="UserInfo">
            {props.user.name}
        </div>
    )
}

export default UserInfo;