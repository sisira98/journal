import styled from "styled-components";

const LoginMainDiv = styled.div`
display:flex;
height:100vh;
background: #301DAD;
`;
LoginMainDiv.LoginDiv = styled.div`
display:flex;
width:100%;
flex-direction:column;
justify-content:space-between;
img{
    
    width:9rem;
    margin:2rem;
}
`;
LoginMainDiv.Heading = styled.div`
display:flex;
margin-top:3rem;
flex-direction:column;
@media (max-width: 900px) {
    flex-direction:row;
  },
h1{
    margin:0;
    font-family: Open Sans;
    font-weight: 800;
    line-height: 130px;
    text-align: right;
    font-size:8rem;
    color:white;
    position: relative;
    right: -1rem;
    @media (max-width: 900px) {
            font-size:6rem;
            right: 0rem;
    
}
`;
LoginMainDiv.FormDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  img { 
    width: 100%;
    height:100%;
    object-fit:fill;
    @media (max-width: 900px) {
        display:none;
      }
  }

  form {
    position: absolute; 
    margin-left:7rem;
    display:flex;
    flex-direction:column;
    input{
        width:20rem;
        margin-top:1.5rem;
        padding:1rem;
        border:none;
        outline:none;
        border-bottom:1px solid #00000033;
    }
    input::placeholder{
        font-family: Open Sans;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.6;
        text-align: left;
        color: #301DAD;
    }
    input:focus{
        background-color: #CBC3FF24;

    }
    h4{
        cursor:pointer;
        margin:0 0 3rem 1rem;
        font-family: Open Sans;
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        font-variation-settings: 'wdth' 90;
        color: #301DAD;
        align-self:start;

    }
}
    @media (max-width: 900px) {
        form{
        margin-left:0rem;
        h4{
            color:white;
        }
    }
    `;
    
LoginMainDiv.ActionButtons = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    h3{
        cursor:pointer;
        margin:0rem 2rem 0 0;
        font-family: Open Sans;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.18rem;
        font-variation-settings: 'wdth' 90;
        color: #301DAD;
        align-self:center;
        @media (max-width: 900px) {
            color:white;
        }

    }
    button{
        cursor:pointer;
        align-self:end;
        width:10rem;
        border:1px solid #301DAD;
        border-radius:0.16rem;
        font-family: Open Sans;
        font-family: Open Sans;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.6;
        text-align: center;
        color: #301DAD;
        background-color:white;
        box-shadow: 0px 4px 7px 0px #00000040;

    }
`;
LoginMainDiv.EyeIcon = styled.div`
display: grid;
flex-direction: row;
justify-items: end;
img{
    position:relative;
    bottom: 2rem;
    right: 2rem;
    width:1rem;  
    @media (max-width: 900px) {
        display:block;
      }
}
`;

export default LoginMainDiv