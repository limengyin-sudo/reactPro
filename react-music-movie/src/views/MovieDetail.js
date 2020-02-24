import React, { Component } from 'react';
import queryString from 'query-string'
import axios from 'axios'
import './MovieDetail.css'
class MovieDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
          detail:[],
          img:[]
        }
    }
    render() {
        return (
            <div className="wrap">
                <img src={this.state.img} />
                <div className="movieDetail">
                    <p className="movieTitle">{this.state.detail.title}</p>
                    <p className="movieSummary">{this.state.detail.summary}</p>
                </div>
            </div>
        );
    }
    componentDidMount() {
        var id = queryString.parse(this.props.location.search).id;
        console.log(id)
        var url=`https://douban.uieee.com/v2/movie/subject/${id}`
        axios.get(url).then(res=>{
            // console.log(res.data)
            var img = res.data.images.small;
            this.setState({
                detail:res.data,
                img
            })
        })
    }
}

export default MovieDetail;