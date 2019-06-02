import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            count: 0
        };

    }

    handleInputTextChange = (value) => {
        // this.setState({ text: value, count: value.length });
        this.state.count <= 100 ? this.setState({ text: value, count: value.length }) : alert('Chirp is too long!');
    }

    handleClear() {
        window.location.reload();
    }

    handleOutput() {
        this.props.onOutput(this.state);

        this.setState({
            text: '',
            count: 0
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="input-heading">
                        <div className="input-wrapper">
                            <div className="counter">
                                {this.state.count}
                            </div>
                            <div className="input">
                                <input
                                    className="textInput"
                                    placeholder="text"
                                    value={this.state.text}
                                    onChange={(event) => this.handleInputTextChange(event.target.value)} />
                            </div >
                            <div className="btn-text">
                                <button
                                    className="textButton panel-shadow"
                                    onClick={() => { this.handleOutput() }}
                                >Chirp</button>
                            </div>
                            <div className="btn-text">
                                <button className="clearButton panel-shadow"
                                    onClick={() => { this.handleClear() }}
                                >Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;

