import React, { Component } from 'react';
import Wrap from './components/AppStyle';
import { Input } from 'antd';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:'',
      todoList:[],
      doneList:[]
    }
  }
  render() {
    return (
      <Wrap>
        <div className="head">
          <div className="logo-add center">
            <p className="logo">ToDoList</p>
            <Input className="add" size='small' onPressEnter={this.handlePressEnter} 
            value={this.state.value} placeholder="添加ToDo" onChange={this.handleKeyUp}/>
          </div>
        </div>
        <div className="content center">

          <div className="todoing">
            <div className="head-count">
              <h2>正在进行</h2>
              <span className="todocount">{this.state.todoList.length}</span>
            </div>
            <ol className="todolist">
              {this.state.todoList.map((item,index)=>{
                return (
                  <li key={index}>
                    <input type="checkbox" onChange={this.onChangeTodo.bind(this,index)} 
                    checked={item.checked} />
                    <p className="list">{item.todo}</p>
                    <a className="del" onClick={this.todoDel.bind(this,index)}>-</a>
                  </li>
                )
              })}
            </ol>
          </div>

          <div className="todone">
            <div className="head-count">
              <h2>已经完成</h2>
              <span className="todocount">{this.state.doneList.length}</span>
            </div>
            <ol className="todolist todolistStyle">
              {this.state.doneList.map((item,index)=>{
                return (
                  <li key={index}>
                    <input type="checkbox" onChange={this.onChangeDone.bind(this,index)} 
                    checked="checked" />
                    <p className="list">{item.todo}</p>
                    <a className="del" onClick={this.doneDel.bind(this,index)}>-</a>
                  </li>
                )
              })}
            </ol>
          </div>
          
        </div>
      </Wrap>
    );
  }
  handleKeyUp=(event)=>{
    this.setState({
      value:event.target.value
    })
  }
  handlePressEnter=(event)=>{
    let todoObj = {
      todo:this.state.value,
      checked:false
    }
    if(event.keyCode == 13 && this.state.value !== ''){
      this.state.todoList.push(todoObj)
    }
    this.setState({
      todoList:this.state.todoList,
      value:''
    })
  }
  onChangeTodo=(index)=>{
    this.state.doneList.push({todo:this.state.todoList[index].todo,checked:true})
    this.state.todoList.splice(index,1)
    this.setState({
      doneList:this.state.doneList
    })
  }
  onChangeDone=(index)=>{
    this.state.todoList.push({todo:this.state.doneList[index].todo,checked:false})
    this.state.doneList.splice(index,1)
    this.setState({
      todoList:this.state.todoList
    })
  }
  todoDel(index){
    this.state.todoList.splice(index,1)
    this.setState({
      todoList:this.state.todoList
    })
  }
  doneDel(index){
    this.state.doneList.splice(index,1)
    this.setState({
      doneList:this.state.doneList
    })
  }
}

export default App;