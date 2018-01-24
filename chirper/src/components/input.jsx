import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            text: ''
        };

    }

    handleInputNameChange = (value) => {
        this.setState({ name: value });
    }


    handleInputTextChange = (value) => {
        this.setState({ text: value });
    }

    handleOutput(event) {
        this.props.onOutput(this.state);
    }

    render() {

        return (

            <div className="Input">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {/* <div className="panel panel-white post panel-shadow"> */}
                                <div className="post-heading">
                                    <div className="pull-left meta">
                                        <div className="x">
                                            <input
                                                placeholder="name"
                                                value={this.state.name}
                                                onChange={(event) => this.handleInputNameChange(event.target.value)} />
                                        </div>
                                        <div className="x">
                                            <input
                                                placeholder="text"
                                                value={this.state.text}
                                                onChange={(event) => this.handleInputTextChange(event.target.value)} />
                                        </div >
                                        <div className="x">
                                            <button
                                                onClick={(event) => { return this.handleOutput(event) }}
                                            >Chirp</button>
                                        </div>
                                    </div>
                                </div>

                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Input;

