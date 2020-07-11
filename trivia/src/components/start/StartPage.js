import React from "react"
import Modal from "./Modal"
import axios from "axios"



class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            api: ``,
            open: false,// Modal
            choice: "", //which modal to open 
            category: 9,
            questions: 10,
            difficulty: "medium",
            data: []
        }
    }

    // open and close Modal
    handleOpen = (event) => this.setState({ open: true, choice: event.target.name })


    handleClose = () => {
        this.setState({ open: false })
    };
    // option from the modal that updates the equivalent state
    handleChoice = (event) => this.setState({ [event.target.getAttribute('name')]: event.target.getAttribute('value') })

    //start the game button + api call 

    startGame = () => {
        this.setState({ api: `https://opentdb.com/api.php?amount=${this.state.questions}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple` })
        setTimeout(() => {
            axios.get(this.state.api).then(res => this.setState({ data: res.data.results }))
        }, 200);
    }


    render() {
        return (
            <div>
                <button name="category" onClick={this.handleOpen}> Category</button><br />
                <button name="questions" onClick={this.handleOpen}> Questions</button><br />
                <button name="difficulty" onClick={this.handleOpen}> Difficulty</button><br />
                <button onClick={this.startGame}> Start game</button>
                <Modal handleClose={this.handleClose} handleChoice={this.handleChoice} open={this.state.open} choice={this.state.choice} />
            </div>
        )
    }
}

export default StartPage;