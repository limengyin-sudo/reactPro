import styled from 'styled-components';
const Wrap = styled.div`
    width:100%;
    position:relative;
    .contain{
        vertical-align: middle;
    }
    .banner{
        width:100%;
        height:800px;
        line-height:800px;
        text-align:center;
    }
    .address{
        position:absolute;
        z-index:10;
        top:20px;
        left:20px;
        width:54px;
        height:30px;
        line-height:30px;
        background-color:#333;
        color:#fff;
        border-radius: 20px;
        text-align:center;
        font-size:12px;
    }
    .tab{
        width:100%;
        height:50px;
        display:flex;
        align-items:center;
        justify-content: space-around;
        background-color:#ccc;
    }
    .tab li{
        list-style:none;
    }
    .tab li a{
        color:#333;
        font-size:18px;
    }
    .tab li a:hover{
        color:#eb7070;u
    }
`;
export default Wrap;