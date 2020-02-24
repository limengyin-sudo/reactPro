import React, { Component } from 'react';
import queryString from 'query-string'
import axios from 'axios'
import './MusicDetail.css'

class MusicDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
          detail:[]
        }
    }
    render() {
        return (
            <div>
                {this.state.detail.map(item=>{
                    return (
                        <div className="musicWrap">
                            <img className="pic" src={item.al.picUrl} />
                            <p className="musicName">{item.name}</p>
                            <p>{item.al.name}</p>
                            <p>{item.ar[0].name}</p>
                            <p>{item.dt}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
    componentDidMount() {
        var id = queryString.parse(this.props.location.search).id;
        console.log(id)
        var url=`http://192.168.14.15:5000/playlist/detail?id=${id}`
        axios.get(url).then(res=>{
            console.log(res.data.playlist.tracks)
            // var img = res.data.playlist.tracks[0].al.picUrl;
            this.setState({
                detail:res.data.playlist.tracks
            })
        })
    }
}

export default MusicDetail;