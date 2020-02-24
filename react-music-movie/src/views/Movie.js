import React, { Component } from 'react';
import MovieItem from './components/MovieItem'
import axios from 'axios'
import './Movie.css'
import {Link} from 'react-router-dom';

class Movie extends Component {
    constructor(props){
        super(props);
        this.state = {
          subjects:[]
        }
    }
    render() {
        return (
            <div className="container">
                {this.state.subjects.map(item=>{
                    return (
                        <Link to={`/movieDetail?id=${item.id}`} key={item.id}>
                            <MovieItem data={item}></MovieItem>
                        </Link>
                    )
                })}
            </div>
        );
    }
    componentDidMount() {
        var url="https://douban.uieee.com/v2/movie/top250"
        axios.get(url).then(res=>{
            // console.log(res.data.subjects)
            this.setState({
                subjects:res.data.subjects
            })
        })
    }
}

export default Movie;