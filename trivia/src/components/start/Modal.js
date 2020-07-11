import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { UL, ModalContainer } from "./styled-components-start"

//opens the category modal from the switch statement
function Category(props) {
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
    return (
        <ModalContainer>
            <h2 id="transition-modal-title">Category</h2>
            <UL id="transition-modal-description">
                {
                    categoriesArray.map((el, index) => <li key={index} value={el.id} name="category" onClick={props.handleChoice}>{el.title}</li>)
                }
            </UL>
        </ ModalContainer>
    )
}
function Difficulty(props) {
    const difficultyArray = ["Easy", "Medium", "Hard"]
    return (
        <ModalContainer>
            <h2 id="transition-modal-title">Category</h2>
            <UL id="transition-modal-description">
                {
                    difficultyArray.map((el, index) => <li key={index} value={el.toLowerCase()} name="difficulty" onClick={props.handleChoice}>{el}</li>)
                }
            </UL>
        </ ModalContainer>
    )
}

//opens the question  modal from the switch statement
function Questions(props) {
    const questionsArray = [10, 20, 30, 40, 50]
    return (
        <ModalContainer>
            <h2 id="transition-modal-title">Questions</h2>
            <UL id="transition-modal-description">
                {
                    questionsArray.map((el, index) => <li key={index} id={index} value={el} name="questions" onClick={props.handleChoice}>{el}</li>)
                }
            </UL>
        </ModalContainer>
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
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "80vw",
        height: "80vh",
        borderRadius: "10%"
    },
}));


export default function TransitionsModal(props) {
    const classes = useStyles();
    const show = () => {
        switch (props.choice) {
            //switch between the modal options 
            case "category": return <Category handleChoice={props.handleChoice} />;
            case "questions": return <Questions handleChoice={props.handleChoice} />;
            case "difficulty": return <Difficulty handleChoice={props.handleChoice} />;


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