import React from "react"
import { Ques, QuestionQ, Option, DownContainer } from "./styled-components-questions"
import { ButtonStart } from "../start/styled-components-start"
import Modal from "../start/Modal"
import Tilt from 'react-tilt'

class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [],
            clicked: "",
            open: false,// Modal

        }
    }
    _isMounted = false;

    componentDidMount = () => {
        this._isMounted = true;
        //concat incorrect answers with the correct one and randomize the array 
        let random = this.props.incorrect_answers.concat(this.props.correct_answer).sort(() => Math.random() - 0.5).map(el => el.replace(/&#039;/g, "'").replace(/&quot;/g, '"'))
        this.setState({ options: random })
    }

    userAnswer = (e) => {
        //if the answer is correct increments the state.points in the Questions component
        return e.target.innerText === this.props.correct_answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"') && this.props.incrementPoints(10)

    }
    handleClick = (e) => this.setState({ clicked: e.target.innerText, open: true })

    handleCloseQ = () => {
        this.setState({ open: false })
    };
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        return (
            <div>
                {
                    this.props.endPage ? (
                        this.props.index === this.props.questionNumber && (<Ques>
                            <div>
                                <QuestionQ>
                                    {this.props.question.replace(/&#039;/g, "'").replace(/&quot;/g, '"')}
                                </QuestionQ>
                                <DownContainer>
                                    {this.state.options.map((el, index) =>   //options
                                        <Tilt className="Tilt" options={{ max: 5 }} key={index} >
                                            <Option key={index} onClick={(e) => { this.userAnswer(e); this.handleClick(e) }} click={this.state.clicked === el ? el : ""} correct_answer={this.props.correct_answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"')}>{el}</Option></Tilt>)}
                                    <Tilt className="Tilt" options={{ max: 5 }}  >
                                        <ButtonStart onClick={this.props.endPage}>Next</ButtonStart>
                                    </Tilt>
                                </DownContainer>
                            </div>
                        </Ques>)
                    ) : // if there are no questions left then the next button calls the endPage method in  Questions component
                        this.props.index === this.props.questionNumber && (<Ques>
                            <div>
                                <QuestionQ>
                                    {this.props.question.replace(/&#039;/g, "'").replace(/&quot;/g, '"')}
                                </QuestionQ>
                                <DownContainer>
                                    {this.state.options.map((el, index) =>   //options
                                        <Tilt className="Tilt" options={{ max: 5 }} key={index} >
                                            <Option key={index} onClick={(e) => { this.userAnswer(e); this.handleClick(e) }} click={this.state.clicked === el ? el : ""} correct_answer={this.props.correct_answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"')}>{el}</Option></Tilt>)}
                                    <Tilt className="Tilt" options={{ max: 5 }}  >
                                        <ButtonStart className="button" onClick={this.props.handleNext}>Next</ButtonStart>
                                    </Tilt>
                                </DownContainer>
                            </div>
                        </Ques>)
                }
                <Modal handleClose={this.handleCloseQ} open={this.state.open} choice="results" correct_answer={this.props.correct_answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"')} clickedAns={this.state.clicked} />

            </div>

        )
    }
}
export default Question