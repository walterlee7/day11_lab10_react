import React, { Component } from 'react';

class Color extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            text: ''
        };

    }

    handleColor(event) {

    }

    render() {

        return (


            <div className="x">
                <button
                    onClick={(event) => { return this.handleColor(event) }}
                >Color</button>
            </div>


        );
    }
}

export default Color;