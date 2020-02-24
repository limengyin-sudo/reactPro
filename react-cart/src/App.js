import React from 'react';
import Wrap from './components/Style';
import { InputNumber } from 'antd';
import { Button } from 'antd';
import axios from 'axios'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cartList:[],
      sumPrice:0,
      checked:false
    }
  }
  render(){
    return (
      <div className="container">
        <Wrap>
          <h2 className="head">购物车</h2>
          <table className="table" border="1px">
            <thead>
              <tr>
                <th>
                  全选
                  <input type="checkbox" checked={this.state.checked}
                  onChange={this.isCheckedAll.bind(this)} />
                </th>
                <th>商品</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {this.state.cartList.map((item,index)=>{
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" checked={item.isSelected}
                  onChange={this.checkedChange.bind(this,index)} />
                </td>
                <td className="cover-name">
                  <img className="cover" src={item.productCover} />
                  <p>{item.productName}</p>
                </td>
                <td>
                  ￥{item.productPrice}
                </td>
                <td>
                  <InputNumber min={1} max={10} defaultValue={item.productCount} 
                  onChange={this.handleSubTotal.bind(this,index)}/>
                </td>
                <td>
                  ￥{(item.productPrice*item.productCount).toFixed(2)}
                </td>
                <td>
                  <Button type="danger" onClick={this.handleDel.bind(this,item.id)}>删除</Button>
                </td>
              </tr>
              )
            })}
            </tbody>
          </table>
          <p className="total">总价：{this.state.sumPrice}</p>
        </Wrap>
     </div>
    )
  }
  componentDidMount(){
    var url = "http://yapi.demo.qunar.com/mock/36046/cart";
    axios.get(url).then(res=>{
      // console.log(res.data)
      res.data.forEach(item=>{
        item.isSelected = false
      })
      var cartList = res.data;
      this.setState({
        cartList
      })
    });
  }
  handleSubTotal(index,value){
    this.state.cartList[index].productCount = value
    this.setState({
      cartList:this.state.cartList
    });
    this.sum();
  }
  isCheckedAll(event){
    this.state.cartList.map(item=>{
      item.isSelected = event.target.checked
    })
    this.setState({
      cartList:this.state.cartList,
      checked:event.target.checked
    })
    this.sum()
  }
  checkedChange(index,event){
    this.state.cartList[index].isSelected = event.target.checked
    var val = this.state.cartList.every(item=>item.isSelected)
    this.setState({
      cartList:this.state.cartList,
      checked:val
    });
    this.sum()
  }
  handleDel(id){
    console.log(id)
    var cartList = this.state.cartList.filter(item=>item.id !== id)
    this.setState({
      cartList
    })
    this.sum()
  }
  sum(){
    var total = 0;
    this.state.cartList.forEach(item=>{
      if(item.isSelected){
        total = item.productCount*item.productPrice+total;
      }
    })
    this.setState({
      sumPrice:total.toFixed(2)
    })
    return total;
  }
}
export default App;