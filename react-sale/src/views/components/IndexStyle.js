import styled from 'styled-components';
const Wrap = styled.div`
    width:100%;
    .container{
        width:100%;
    }
    .item{
        display:flex;
        align-items:center;
        margin:18px;
        position:relative;
    }
    .image{
        width:80px;
        margin-right:18px;
    }
    .title{
        font-size:18px;
        color:#333;
    }
    .btn{
        position:absolute;
        right:18px;
    }
`;
export default Wrap;