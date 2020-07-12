import React from "react"
import Modal from "./Modal"
import axios from "axios"
import { StartCont, Button, ButtonStart } from "./styled-components-start"
import Tilt from 'react-tilt'



class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: ``,
            open: false,// Modal
            choice: "", //which modal to open 
            category: 9,
            questions: 10,
            difficulty: "medium",
            data: [],
            points: null

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
        setTimeout(() => {
            this.props.history.push({
                pathname: `${this.props.match.path}questions`,
                state: { data: this.state.data }
            })
        }, 1000);

    }



    render() {
        return (
            <StartCont>
                <Tilt className="Tilt" options={{ max: 5 }}  >
                    <Button name="category" onClick={this.handleOpen}> Category</Button><br />
                </Tilt>
                <Tilt className="Tilt" options={{ max: 5 }}  >
                    <Button name="questions" onClick={this.handleOpen}> Questions</Button><br />
                </Tilt>
                <Tilt className="Tilt" options={{ max: 5 }}  >
                    <Button name="difficulty" onClick={this.handleOpen}> Difficulty</Button><br />
                </Tilt>
                <Tilt className="Tilt" options={{ max: 5 }}  >
                    <ButtonStart onClick={this.startGame}> Start game</ButtonStart>
                </Tilt>
                <Modal handleClose={this.handleClose} handleChoice={this.handleChoice} open={this.state.open} choice={this.state.choice} />
            </StartCont>

        )
    }
}

export default StartPage;