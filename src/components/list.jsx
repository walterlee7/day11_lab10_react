import React, { Component } from 'react';
import Items from './items';
import Input from './input';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [
                {
                    id: 0,
                    text: 'Hello World!',
                },
            ],
        };
    }

    handleOutput(value) {
        let newList = {
            info: [
                ...this.state.info
            ]
        };

        let id = newList.info[newList.info.length - 1].id + 1;

        newList.info.push({
            id,
            text: value.text,
        });

        if (value.text === '') {
            alert('Missing Chirp Info!')
        } else {
            this.setState(newList);
        }

    }

    handleClear() {
        window.location.reload();
    }

    render() {
        return (
            <div className="Comment">
                <div className="container">
                    <div className="col-sm-12">
                        <div className={"panel panel-white panel-input post2 panel-shadow"}>
                            <div className="post-heading">
                                <div className="pull-left meta">
                                    <div className="btn-text-clear">
                                        <button className="clearButton panel-shadow"
                                            onClick={() => { this.handleClear() }}
                                        >Clear</button>
                                    </div>
                                    <div>
                                        <Input
                                            onOutput={(value) => this.handleOutput(value)}
                                        />
                                        <Items info={this.state.info} />
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

export default List;