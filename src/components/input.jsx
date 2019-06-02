import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

    }

    handleInputTextChange = (value) => {
        this.setState({ text: value });
    }

    handleClear(event) {
        window.location.reload();
    }

    handleOutput(event) {
        this.props.onOutput(this.state);
        let clearStats =
        {
            text: ''
        };

        this.setState(clearStats);
    }

    render() {

        return (

            <div className="Input">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="input-heading">
                                <div className="input-wrapper">
                                    <div className="clear">
                                        <input
                                            className="textInput"
                                            placeholder="text"
                                            value={this.state.text}
                                            onChange={(event) => this.handleInputTextChange(event.target.value)} />
                                    </div >
                                    <div className="btn-text">
                                        <button
                                            className="textButton panel-shadow"
                                            onClick={(event) => { return this.handleOutput(event) }}
                                        >Chirp</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="clear-wrapper">
                            <div className="clear">
                                <button className="btn-clear panel-shadow"
                                    onClick={(event) => { return this.handleClear(event) }}
                                >Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Input;

