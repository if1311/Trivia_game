import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//opens the category modal from the switch statement
function Category(props) {
    const categoriesArray = [
        { title: "All", id: 0 },
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
        <div>
            <h2 id="transition-modal-title">Category</h2>
            <ul id="transition-modal-description">
                {
                    categoriesArray.map((el, index) => <li key={index} value={el.id} name="category" onClick={props.handleChoice}>{el.title}</li>)
                }
            </ul>
        </div>
    )
}
function Difficulty(props) {
    const difficultyArray = ["Easy", "Medium", "Hard"]
    return (
        <div>
            <h2 id="transition-modal-title">Category</h2>
            <ul id="transition-modal-description">
                {
                    difficultyArray.map((el, index) => <li key={index} value={el.toLowerCase()} name="difficulty" onClick={props.handleChoice}>{el}</li>)
                }
            </ul>
        </div>
    )
}

//opens the question  modal from the switch statement
function Questions(props) {
    const questionsArray = [10, 20, 30, 40, 50]
    return (
        <div>
            <h2 id="transition-modal-title">Questions</h2>
            <ul id="transition-modal-description">
                {
                    questionsArray.map((el, index) => <li key={index} id={index} value={el} name="questions" onClick={props.handleChoice}>{el}</li>)
                }
            </ul>
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
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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