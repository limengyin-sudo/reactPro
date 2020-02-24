import styled from 'styled-components';
const Wrap = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #CDCDCD;
    .center{
        width: 600px;
    }
    .head{
        width: 100%;
        height: 50px;
        background-color: #323232;
        position: relative;
    }
    .logo-add{
        height: 50px;
        line-height: 50px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .logo{
        width: 100px;
        line-height: 50px;
        margin:0;
        color: #DDD;
        font-size: 24px;
        cursor: pointer;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }
    .add{
        width: 360px;
        text-indent: 10px;
    }
    .add,.addBtn{
        height: 24px;
        line-height:24px;
        border-radius: 5px;
        box-shadow: 0 1px 0 rgba(255,255,255,0.24), 0 1px 6px rgba(0,0,0,0.45) inset;
        border: none;
        outline: none;
    }
    .content{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .head-count{
        height: 31px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
    }
    .head-count h2{
        font-weight: 800;
    }
    .todocount{
        padding: 0 5px;
        height: 20px;
        border-radius: 20px;
        background: #E6E6FA;
        line-height: 22px;
        text-align: center;
        color: #666;
        font-size: 14px;
        font-weight: bold;
    }
    .todolist{
        padding:0;
    }
    .todolist li{
        height: 32px;
        line-height: 32px;
        background: #fff;
        position: relative;
        margin-bottom: 10px;
        border-radius: 3px;
        border-left: 5px solid #629A9C;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07);
        list-style: none;
        display: flex;
        align-items: center;
    }
    input[type="checkbox"]{
        background-color: initial;
        -webkit-appearance: checkbox;
        box-sizing: border-box;
        margin: 3px 3px 3px 14px;
        padding: initial;
        border: initial;
        width: 22px;
        height: 22px;
    }
    .list{
        width: 500px;
        padding-left: 6px;
        margin:0;
        font-size:16px;
    }
    .del{
        position: absolute;
        right: 5px;
        width: 24px;
        height: 22px;
        border-radius: 14px;
        border: 6px double #FFF;
        background: #CCC;
        line-height: 14px;
        text-align: center;
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
    }
    .todolistStyle li{
        border-left: 5px solid #999;
        background-color: #E6E6E6;
    }
    .todolistStyle .list{
        color: #666;
    }
    .todolistStyle .del{
        border: 6px double #E6E6E6;
    }
`;
export default Wrap;