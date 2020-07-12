import styled from "styled-components"

export const UL = styled.ul`
    list-style-type: none;
    font-size: 3rem;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ModalContainer = styled.div`
    height: ${props => props.questions ? "40vh" : "70vh"};
    width: 80vw;
    font-size: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    @media (max-width: 700px) {
        flex-direction: column;
      }
`;

export const StartCont = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.end = "" ? "center" : "space-between"}
    
`;

export const Button = styled.button`
    border-radius: ${props => !props.ok && "15%"};
    height:${props => props.ok ? "10vh" : "15vh"};
    width: ${props => props.ok ? "70%" : "15vw"};
    color:${props => props.ok && "white"};
    background:${props => props.ok && "#3f5efb"};
    margin: 3%;
    font-size: 2.3rem;
    outline: none;
    width: 45vw;
    &:hover {
        background:${props => !props.ok && "#f4c47c;"}; 
        cursor: pointer;
      };
      @media (max-width: 700px) {
        font-size: 1.8rem;
        width: ${props => props.ok && "60vw"}; 
      }
`;

export const ButtonStart = styled.button`
    width: 60vw;
    height: 10vh;
    font-size: 2.8rem;
    margin: 2%;
    font-size: 2.8rem;
    outline: none;
    color: white;
    background: #3f5efb;
    @media (max-width: 400px) {
        font-size: 1.8rem;
      }
`;
export const LI = styled.li`
    background:${props => props.click !== "" && "green"};
    border: 1px solid black;
    border-radius: 15%;
    width: 40vw;
    background: white;
    &:hover {
        background: #f4c47c;
        cursor: pointer;
      };
      @media (max-width: 700px) {
        width: 60vw;
      }

`;

export const H1 = styled.h1`
      font-size:${props => props.score ? "3rem" : "4rem"};
      
`;
