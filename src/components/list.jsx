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
            chirpClass: 'post'
        };
    }

    handleOutput(value) {
        let newList = {
            info: [
                ...this.state.info
            ]
        };

        if (this.state.chirpClass === 'post') {
            newList.chirpClass = 'post2';
        } else {
            newList.chirpClass = 'post';
        }

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
        let clearState = {
            info: [
                {
                    text: '',
                }
            ]
        }
        this.setState(clearState);
    }


    render() {
        return (
            <div className="Comment">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className={"panel panel-white " + this.state.chirpClass + " panel-shadow"}>
                                <div className="post-heading">
                                    <div className="pull-left meta">
                                        <div className="chirpTitle">Make Chirps Here</div>
                                        <div>
                                            <Input
                                                onOutput={(value) => this.handleOutput(value)}
                                            // onClear={(value) => this.handleClear()}
                                            />
                                            <Items info={this.state.info} />
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

export default List;