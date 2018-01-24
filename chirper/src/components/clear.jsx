import React, { Component } from 'react';

class Clear extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            text: ''
        };

    }

    handleClear(event) {
        this.props.onClear(this.state);
    }

    render() {

        return (

            <div className="Input">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="panel panel-white post panel-shadow">
                                <div className="post-heading">
                                    <div className="pull-left meta">
                                        <div>Clears the Chirps</div>
                                        <div className="x">
                                            <button
                                                onClick={(event) => {return this.handleClear(event)}}
                                            >Clear</button>
                                        </div>
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

export default Clear;