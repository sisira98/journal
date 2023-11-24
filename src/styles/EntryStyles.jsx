import styled from 'styled-components'

const EntryBox = styled.div`
max-width:100%;
position:absolute;
top:20%;
left:10%;
right:5%;
border-radius:0.62rem;
box-shadow: 5px 4px 10px 4px #0000000F;
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
  margin:2rem 2rem 4rem 5rem;
  border: none;
  font-family:Open Sans;
  font-weight: 300;
  font-size:1.25rem;
  line-height:1.17rem;
  color: #5A4282;
}
img{
  cursor:pointer;
    margin:2rem;
    align-items:end;
}
`;

EntryBox.ImageDiv = styled.div`
display:flex;
justify-content:flex-end;
`;

export default EntryBox