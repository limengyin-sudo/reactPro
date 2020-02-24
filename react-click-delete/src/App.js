import React from 'react';
import Item from './components/Item'
import axios from 'axios'
import './App.css'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playlists:[]
    }
  }
  render(){
    return (
      <div className="container">
        {/* 子组件的属性接收父组件传递过来的方法 */}
          {this.state.playlists.map(item=>{
          return (
            <div key={item.id}>
              <Item data={item} deleteItem = {this.handleDelete.bind(this)}></Item>
            </div>
          ) 
        })}
     </div>
    )
  }
  handleDelete(id){
    console.log(id)
    var playlists = this.state.playlists.filter(item=>item.id !== id)
    this.setState({
      playlists
    })
  }
  componentDidMount(){
    var url = "http://192.168.14.15:5000/top/playlist";
    axios.get(url).then(res=>{
      // console.log(res.data.playlists)
      this.setState({
        playlists:res.data.playlists
      })
    })
  }
}
export default App;