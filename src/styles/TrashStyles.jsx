import styled from "styled-components";


const TrashContainer = styled.div`
margin:3rem 1rem 1rem 5rem;
display:flex;
justify-content:center;
`;
TrashContainer.TrashBox = styled.div`
padding:3rem;
margin:0 2rem;
display:flex;
justify-content:space-around;
border-radius:1rem;
box-shadow: 5px 4px 10px 4px rgba(0, 0, 0, 0.27);
background: linear-gradient(90.13deg, #FFFFFF 0.12%, #FFFFFF 10.51%, #F9F9F9 17.79%, #FBFBFB 67.68%, #F7F7F7 99.9%);
`;
TrashContainer.PageTwo = styled.div`
display:grid;
grid-auto-flow: row;
`;
TrashContainer.Title = styled.div`
display:flex;
justify-content:space-between;
gap:1rem;
h2{
    color:#301DAD;
font-family: Sacramento;
font-size: 2rem;
font-weight: 400;
line-height: 2.9rem;
text-align: center;
}
@media (max-width: 425px) {
    margin:1rem 2rem;
  }
`;
TrashContainer.DeletedList = styled.div`
display:flex;
justify-content:space-between;
gap:4rem;
margin:0rem 0rem;
div{
    margin:1rem 0;
    min-width:3rem;
    font-family: Open Sans;
font-size: 1.25rem;
font-weight: 300;
line-height: 1.68rem;
text-align: left;
color: #5A4282;
}
@media (max-width: 425px) {
    gap:1rem;
  }

`;
TrashContainer.Buttons = styled.div`
display:flex;
justify-content:space-between;
gap:1rem;
img{
    cursor:pointer;
    width:1.5rem;
}

`;

export default TrashContainer