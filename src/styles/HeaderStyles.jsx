import styled from "styled-components";

const Head = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:5rem;
box-shadow: 0px 5px 4px 0px #00000014;
img{
    padding: 0 2rem;
}

@media (max-width: 600px) {

    img{
        padding:1rem;
    }
`;

export default Head