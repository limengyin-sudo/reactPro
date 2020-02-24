import React, { Component } from 'react';

class MovieItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="item">
                <img src={this.props.data.images.small} />
                <p className="title">{this.props.data.title}</p>
            </div>
        );
    }
}

export default MovieItem;