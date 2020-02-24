import React, { Component } from 'react';
import axios from 'axios';
import Wrap from './IndexStyle';
import { Button } from 'antd';
class Coming extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects:[]
        }
    }
    render() {
        return (
            <Wrap>
                <div className="container">
                    {this.state.subjects.map(item => {
                        return (
                            <div className="item" key={item.id}>
                                <img className="image" src={item.images.small} alt={item.title} />
                                <div className="info">
                                    <p className="title">{item.title}</p>
                                    <p className="dName">导演：{item.directors[0].name}</p>
                                </div>
                                <Button type="primary" ghost className="btn">
                                    预购
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </Wrap>
        );
    }
    componentDidMount() {
        var url = "https://douban.uieee.com/v2/movie/coming_soon";
        axios.get(url).then(res => {
            // console.log(res.data.subjects)
            this.setState({
                subjects: res.data.subjects
            })
        })
    }
}
export default Coming;