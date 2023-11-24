import styled, { keyframes } from "styled-components";
import FilterIcon from '../assets/Filter.png'


const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const Wrapper = styled.div`
margin:0rem;
`;
Wrapper.Bounce = styled.img`
  cursor:pointer;
  bottom:4rem;
  margin;0.5rem;
  position:relative;
  align-self:flex-end;
  width:2rem;
  cursor: pointer;
  animation: ${bounceAnimation} 1s infinite;
`;
Wrapper.Content = styled.div`
display:grid;
grid-auto-flow: column;
grid-template-columns: min-content;
margin:4rem 0rem 0 6rem;
@media (max-width: 600px) {
  margin: 0.5rem 0.5rem;
}`;
Wrapper.Header = styled.div`background-color:transparent;
  min-height:4.1rem;
  display:flex;
  justify-content:space-between;
  box-shadow: 0px 1px 4px 1px #0000000F;

`;
Wrapper.Search = styled.div`
background-color:transparent;
padding-left:9rem;
display:flex;
gap:0.3rem;
align-items:center;
input{
  background-color:transparent;
  min-width:20rem;
  max-height:2.4rem;
  padding:0.8rem;
  box-shadow: 1px 1px 4px 0px #0000001F;
  border:none;
  outline:none;
}
input::placeholder{
  font-family: Open Sans;
font-size: 1.12rem;
font-weight: 300;
line-height: 1.5rem;
text-align: left;
color: #5A4282;
}
button{
  background-color:transparent;
  min-width:2.25rem;
  height:2.2rem;
  box-shadow: 1px 1px 4px 0px #0000001F;
  border:none;
}
@media (max-width: 600px) {
  padding-left: 1rem;
  input {
    min-width: 4rem; 
    max-width: 100%; 
    max-height: 2rem; 
    padding: 0.6rem 0rem; 
  }
}
`;
Wrapper.Filter = styled.div`
display:flex;
select {
  -webkit-appearance: none;
  -moz-appearance: none; 
  appearance: none; 
  box-shadow: 1px 1px 4px 0px #0000001F;
  border:none;
  padding: 0.5rem 3rem 0.1rem 0.5rem;
  font-size: 1rem;
  height:2.2rem;
  margin-right: 0.5rem;
  cursor: pointer;
  outline: none;
  font-family: Open Sans;
font-size: 1rem;
font-weight: 300;
line-height: 1.5rem;
text-align: left;
color: #5A4282;
background-color:transparent;
}
&::after {
  content: url(${FilterIcon}); 
  position:relative;
  top:0.4rem;
  left:-2.3rem;
  pointer-events: none;
}
option {
  font-size: 1rem;
}
`;
Wrapper.Icons = styled.div`
display:flex;
justify-content:space-between;
gap:2rem;
align-items:center;
margin-left:1rem;
margin-right:14rem;
@media (max-width: 600px) {
  gap: 1rem;
  margin-right:0.2rem;
}
`;
Wrapper.Main = styled.div`
display:flex;
flex-direction:column;
height:520px;
overflow-y:auto;
&::-webkit-scrollbar{
  width:6px;
}
&::-webkit-scrollbar-thumb{
  background-color: #AFA7DF;
}
&::-webkit-scrollbar-track {
  background-color: #fff;
}
`;

Wrapper.Card = styled.div`
cursor:pointer;
margin: 1rem 1rem;
min-height:13rem;
box-shadow: 3px 4px 4px 2px #0000000F; 
border-radius:0.65rem;
${props =>
        props.selected
            ? 'border-right: 0.5rem solid #301DAD63;'
            : ''};
h3{
  margin:0 20rem 0 0;
  padding:0rem 0 0.5rem 2rem;
  font-family:Sacramento;
  font-size:1.6rem;
  font-weight:400;
  line-height:2.28rem;
},

h4{
  margin:0;
  padding:0 0 0.6rem 2rem;
  font-family:Open Sans;
  font-size:0.7rem;
  font-weight:300;
  line-height:0.34rem;
}
img{
  position: relative;
  top:2.5rem;
  right:0.5rem
}
`;
Wrapper.ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  margin-left:1rem;
  margin-bottom:1rem;
  padding: 0;
  text-decoration: underline;
`;
Wrapper.EntryBox = styled.div`
margin-right:2rem;
margin-left:2rem;
border-radius:1rem;
height:515px;
box-shadow: 4px 4px 10px 6px #0000000D;
display: ${props => (props.selected ? 'none' : 'block')};
h3{
  margin:0;
  padding:5rem 0 0.5rem 5rem;
  font-family:Sacramento;
  font-size:3.12rem;
  font-weight:400;
  line-height:4.5rem;
  color: #301DAD;

},
p{
  padding:0 3rem 2rem 2.5rem;
  font-family:Open Sans;
  font-size:1.125rem;
  font-weight:300;
  line-height:1.53rem;
}
`;
Wrapper.Media = styled.div`
height:400px;
overflow-y:auto;
&::-webkit-scrollbar{
  width:6px;
}
&::-webkit-scrollbar-thumb{
  background-color: #AFA7DF;
}
&::-webkit-scrollbar-track {
  background-color: #fff;
}
`;
Wrapper.Para = styled.div`
display:flex;
flex-direction:column;
p{
  margin:0;
  padding:0 1rem 0rem 1rem;
  font-family:Open Sans;
  font-size:0.9rem;
  font-weight:300;
  line-height:1.19rem;
}`;


Wrapper.ActionsIcons = styled.div`
margin:2rem 2rem 0 0;
display:flex;
justify-content:flex-end;
img{
  padding:0 1rem 0 0;
  cursor:pointer;
}
`;

export default Wrapper