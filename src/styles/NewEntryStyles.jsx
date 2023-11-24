import styled from 'styled-components';

const EntryContainer = styled.div`
padding:2rem 0rem 0 0;
margin:6rem 15rem;
display:flex;
height:25rem;
flex-direction:column;
border-radius:0.62rem;
box-shadow: 5px 4px 10px 4px #0000000F;

@media (max-width: 1110px) {
  margin:6rem 2rem;
}
@media (max-width:450px ) {
  margin:6rem 0rem;
  padding-right:0rem;
}
`;

EntryContainer.TitleAndSave = styled.div`
margin-left:3rem;
margin-right:3rem;
height:2.6rem;
display:flex;
justify-content:space-between;
border:none;
input{
  height:3rem;
  border: none;
  outline:none;
  padding-bottom:1rem;
  font-family:Sacramento;
  font-weight: 400;
  font-size:2rem;
  line-height:2.9rem;
  color: #301DAD;
  background-color:transparent;
}
input::placeholder, input:focus{
  outline:none;
  padding-bottom:1rem;
  font-family:Sacramento;
  font-weight: 400;
  font-size:2rem;
  line-height:2.9rem;
  color: #301DAD;
}
button{
  cursor:pointer;
  padding:0.7rem 3rem;
  background-color:#301DAD;
  font-family:Open Sans;
  font-weight: 300;
  font-size:1.25rem;
  line-height:1.17rem;
  color: #FFFFFF;
  border:none;
  border-radius:0.4rem;
}
@media (max-width: 973px) {
  margin-left:0.2rem;
  button{
    padding:0.7rem 1rem;
  }
  imput{
    width:2rem;
  }
  @media (max-width:450px ) {
    margin-left:0rem;
    justify-content:center;
    input{
      width:10rem;
    }
  }
`;
EntryContainer.Filter = styled.div`
display:flex;
border:1px solid #301DAD;
border-radius:0.4rem;
select {
    padding:0 2rem;
  -webkit-appearance: none;
  -moz-appearance: none; 
  appearance: none; 
  box-shadow: 1px 1px 4px 0px #0000001F;
  border:none;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  font-family: Open Sans;
font-size: 1rem;
font-weight: 300;
line-height: 1.5rem;
text-align: center;
color: #5A4282;
background-color:transparent;
}
option {
  font-size: 1rem;
  text-align: start;
}
`;

EntryContainer.categoryStyle = styled.div`
input{
    padding:0rem 0.5rem 0.5rem 0.5rem;
    border: none;
    outline:none;
    font-family: Open Sans !important;
    font-weight: 300;
    font-size:1rem !important;
    line-height:2.9rem;
    color: #301DAD;
    background-color:transparent;
}
  input::placeholder, input:focus {
    outline: none;
    font-family: Open Sans;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2.9rem;
    color: #5A4282;
  }
`;
  export default EntryContainer