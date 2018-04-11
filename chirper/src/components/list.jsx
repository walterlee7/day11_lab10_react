import React, { Component } from 'react';
import Items from './items';
import Input from './input';
import Clear from './clear';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [
                {
                    name: 'Name Top 1',
                    id: 0,
                    text: 'Text Bottom 1',

                },
                {
                    name: 'Name Top 2',
                    id: 1,
                    text: 'Text Bottom 2',

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
            name: value.name,
            id,
            text: value.text,
        });

        if (value.name === '' && value.text === '') {
            alert('Missing Chirp Info!')
        } else {
            this.setState(newList);
        }


    }

    handleClear(value) {
        let clearState = {
            info: [
                {
                    name: '',
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
                                        <div>Make Your Chirps Here</div>
                                        <div>
                                            <Input onOutput={(value) => this.handleOutput(value)} />
                                            <Clear onClear={(value) => this.handleClear(value)} />
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