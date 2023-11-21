import styled from "styled-components";

const HomePageMainContent = styled.div`
display:flex;
justify-content:center;
`;
HomePageMainContent.JournalBox = styled.div`
display:flex;
flex-direction:row;
margin-top:3rem;
img{
    margin-left:4rem;
}
`;
HomePageMainContent.Book = styled.div`
margin-left:-5rem;
display:flex;
flex-direction:row;
margin-right:3rem;
`;
HomePageMainContent.PartOne = styled.div`
width:3.4rem;
box-shadow: 4px 4px 4px 4px #0000000D;
background-color:#1C106B;

`;
HomePageMainContent.PartTwo = styled.div`
background: linear-gradient(153.62deg, #301DAD 3.89%, #6048FF 92.46%);
border-top-right-radius:1rem;
border-bottom-right-radius:1rem;
display:grid;
a{
    display:grid;
    justify-items: center;
    color:white;
    text-decoration:none;
    align-self: end;
}
h2{
    margin:4rem;
font-family: Sacramento;
font-size: 2.5rem;
font-weight: 400;
line-height: 3.6rem;
text-align: left;
}
`;

HomePageMainContent.StyledTypeAnimation = styled.h3`
font-family: Sacramento;
font-size: 2rem;
font-weight: 300;
line-height: 3.6rem;
`;

export default HomePageMainContent