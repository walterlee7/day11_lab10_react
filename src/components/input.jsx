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
        // this.props.onClear(this.state);
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
                        <div className="col-sm-12 input-hud">
                            <div className="input-heading">
                                <div className="">
                                    <div className="clear">
                                        <input
                                            className="textInput"
                                            placeholder="text"
                                            value={this.state.text}
                                            onChange={(event) => this.handleInputTextChange(event.target.value)} />
                                    </div >
                                    <div className="clear">
                                        <button
                                            className="textButton"
                                            onClick={(event) => { return this.handleOutput(event) }}
                                        >Chirp</button>
                                    </div>
                                    <div className="clear">
                                        <button className="btn-clear"
                                            onClick={(event) => { return this.handleClear(event) }}
                                        >Clear</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Input;

