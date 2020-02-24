import React from 'react';
import '../Item.css'
class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div onClick={this.handleClick.bind(this,this.props.data.id)} className="item">
                <img className="cover" src={this.props.data.coverImgUrl} />
                <p className="name">{this.props.data.name}</p>
            </div>
        )
    }
    handleClick=(id)=>{
        /* 在子组件调用方法，向组件传参 */
        this.props.deleteItem(id)
        console.log(id)
    }
}
export default Item;