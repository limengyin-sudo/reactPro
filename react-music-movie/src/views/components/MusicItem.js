import React, { Component } from 'react';

class MusicItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="item">
                <img className="cover" src={this.props.data.coverImgUrl} />
                <p className="name">{this.props.data.name}</p>
            </div>
        );
    }
}

export default MusicItem;