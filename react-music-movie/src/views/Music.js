import React, { Component } from 'react';
import MusicItem from './components/MusicItem'
import axios from 'axios'
import './Music.css'
import {Link} from 'react-router-dom';
class Music extends Component {
    constructor(props){
        super(props);
        this.state = {
          playlists:[]
        }
    }
    render() {
        return (
            <div className="content">
                {this.state.playlists.map(item=>{
                    return (
                        <Link to={`/musicDetail?id=${item.id}`} key={item.id}>
                            <MusicItem data={item}></MusicItem>
                        </Link>
                    )
                })}
            </div>
        );
    }
    componentDidMount() {
        var url="http://192.168.14.15:5000/top/playlist?order=hot"
        axios.get(url).then(res=>{
            console.log(res.data.playlists)
            this.setState({
                playlists:res.data.playlists
            })
        })
    }
}

export default Music;