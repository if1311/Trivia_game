import styled from "styled-components"

export const Ques = styled.div`
    display:flex;
    justify-content:center;
    align-items:space-between;
`;

export const QuestionQ = styled.div`
    border: 1px solid black;
    height: 40vh;
    width: 90vw;
    font-size: 2.8rem;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 3vh 0;
    border-radius: 15%;
    @media (max-width: 600px) {
        font-size: 2.2rem;
      }
`;

export const Option = styled.div`
    background:${props => props.click === "" ? "white" : props.click === props.correct_answer ? "#7df664" : "#fe8f8f"};
    border: 1px solid black;
    height: 10vh;
    width: 30vw;
    font-size: 1.5rem;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 15%;
    &:hover {
        background: #7df664;
        cursor: pointer;
      };
    @media (max-width: 600px) {
        font-size: 1rem;
      }
`;

export const DownContainer = styled.div`
    border: 1px solid black;
    border-radius: 15%;
    height: 50vh;
    width: 90vw;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
    margin: 3.2vh 0;
    align-items:center;
    & button {
        width: 60vw;
        height: 10vh;
        font-size: 2.3rem;
    }
`;
