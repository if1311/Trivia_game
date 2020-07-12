import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { UL, ModalContainer, Button, LI, H1 } from "./styled-components-start"
import Tilt from 'react-tilt'

//opens the category modal from the switch statement
function Category(props) {
    const [clicked, setClicked] = useState("")

    const categoriesArray = [
        { title: "Books", id: 10 },
        { title: "Movies", id: 11 },
        { title: "Music", id: 12 },
        { title: "Television", id: 14 },
        { title: "Sport", id: 21 },
        { title: "Geography", id: 22 },
        { title: "History", id: 23 },
        { title: "Art", id: 25 }
    ]

    let handleClick = (e) => setClicked(e.target.innerText)

    return (
        <div>
            <ModalContainer>
                <h2 id="transition-modal-title">Category</h2>
                <UL id="transition-modal-description">
                    {
                        categoriesArray.map((el, index) =>
                            <Tilt className="Tilt" options={{ max: 5 }} key={index} >
                                <LI key={index} value={el.id} name="category" onClick={(e) => { props.handleChoice(e); handleClick(e) }} click={clicked === el.title ? el.title : ""}>{el.title}</LI>
                            </Tilt>)
                    }
                </UL>
            </ ModalContainer>
            <Tilt className="Tilt" options={{ max: 5 }}  >
                <Button ok onClick={props.handleClose}>OK</Button>
            </Tilt>
        </div>
    )
}
function Difficulty(props) {
    const difficultyArray = ["Easy", "Medium", "Hard"]
    const [clicked, setClicked] = useState("")



    let handleClick = (e) => setClicked(e.target.innerText)

    return (
        <div>
            <ModalContainer>
                <h2 id="transition-modal-title">Category</h2>
                <UL id="transition-modal-description">
                    {

                        difficultyArray.map((el, index) =>
                            <Tilt className="Tilt" options={{ max: 5 }} key={index} >
                                <LI key={index} value={el.toLowerCase()} name="difficulty" onClick={(e) => { props.handleChoice(e); handleClick(e) }} click={clicked === el ? el : ""}>{el}</LI>
                            </Tilt>)
                    }
                </UL>
            </ ModalContainer>
            <Tilt className="Tilt" options={{ max: 5 }}  >
                <Button ok onClick={props.handleClose}>OK</Button>
            </Tilt>
        </div>
    )
}

//opens the question  modal from the switch statement
function Questions(props) {
    const [clicked, setClicked] = useState()
    const questionsArray = [10, 20, 30, 40]

    let handleClick = (e) => setClicked(e.target.value)

    return (
        <div>
            <ModalContainer>
                <h2 id="transition-modal-title">Questions</h2>
                <UL id="transition-modal-description">
                    {
                        questionsArray.map((el, index) =>
                            <Tilt className="Tilt" options={{ max: 5 }} key={index}>
                                <LI key={index} id={index} value={el} name="questions" onClick={(e) => { props.handleChoice(e); handleClick(e) }} click={clicked === el ? el : ""}>{el}</LI>
                            </Tilt>)
                    }
                </UL>
            </ModalContainer>
            <Tilt className="Tilt" options={{ max: 5 }}  >
                <Button ok onClick={props.handleClose}>OK</Button>
            </Tilt>
        </div>
    )
}

//opens in Question component
function Results(props) {

    return (
        <div>
            {props.correct_answer === props.clickedAns ?
                (<div>
                    <H1 id="transition-modal-title">Correct answer!</H1>
                    <ModalContainer questions>
                        <div id="transition-modal-description">
                            <p> Answer : {props.correct_answer} </p>
                            <h2>Well done!!!</h2>
                        </div>
                    </ ModalContainer>
                    <Button ok onClick={props.handleClose}>OK</Button>
                </div>
                ) : (
                    <div>
                        <H1 id="transition-modal-title">Inccorect answer!</H1>
                        <ModalContainer questions>
                            <div id="transition-modal-description">
                                <p>Correct answer : {props.correct_answer} </p>
                                <p>Your answer : {props.clickedAns}</p>
                                <h2>You will do better next time!</h2>
                            </div>
                        </ ModalContainer>
                        <Button ok onClick={props.handleClose}>OK</Button>
                    </div>
                )}

        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        outline: "none",
        textAlign: "center",
        backgroundImage: "linear-gradient(#329efa,#8ffedf)",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "80vw",
        height: "90vh",
        borderRadius: "10%"
    },
}));


export default function TransitionsModal(props) {
    let propsToSend = {
        correct_answer: props.correct_answer,
        clickedAns: props.clickedAns
    }
    const classes = useStyles();
    const show = () => {
        switch (props.choice) {
            //switch between the modal options 
            case "category": return <Category handleChoice={props.handleChoice} handleClose={props.handleClose} />;
            case "questions": return <Questions handleChoice={props.handleChoice} handleClose={props.handleClose} />;
            case "difficulty": return <Difficulty handleChoice={props.handleChoice} handleClose={props.handleClose} />;
            case "results": return <Results {...propsToSend} handleClose={props.handleClose} />

            default: return console.log("")
        }
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        {
                            show() // switch statement 
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}