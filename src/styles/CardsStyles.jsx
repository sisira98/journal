import styled from "styled-components";

const WrapperForCards = styled.div`
margin:6rem 3rem;
`;

WrapperForCards.Template = styled.div`
height:100%;
cursor:pointer;
box-shadow: 4px 4px 4px 4px #0000000F; 
border-radius:2rem;
padding:1rem;
background: linear-gradient(153.62deg, #301DAD 3.89%, #6048FF 92.46%);
color:white;
h3{
  font-family:Sacramento;
  font-size:1.6rem;
  font-weight:400;
  line-height:2.28rem;
},

h4{
  font-family:Open Sans;
  font-size:0.7rem;
  font-weight:300;
  line-height:0.34rem;
},
p{
    font-family:Open Sans;
    font-size:0.9rem;
    font-weight:300;
    line-height:1.19rem;
  }
`;

export default WrapperForCards