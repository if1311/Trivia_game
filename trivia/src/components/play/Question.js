import React from "react"
import { Que } from "./styled-components-questions"


class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [],

        }
    }

    componentDidMount = () => {
        //concat incorrect answers with the correct one and randomize the array 
        let random = this.props.incorrect_answers.concat(this.props.correct_answer).sort(() => Math.random() - 0.5)
        this.setState({ options: random })
    }

    userAnswer = (e) => {
        //if the answer is correct increments the state.points in the Questions component
        return e.target.innerText === this.props.correct_answer && this.props.incrementPoints(10)

    }

    render() {


        return (
            <div>
                {
                    this.props.endPage ? (
                        this.props.index === this.props.questionNumber && (<Que>
                            <h2>
                                {this.props.question}
                            </h2>
                            {this.state.options.map((el, index) =>   //options
                                <h3 key={index}>{el}</h3>)}
                            <button onClick={this.props.endPage}>Next</button>
                        </Que>)
                    ) : // if there are no questions left then the next button calls the endPage method in  Questions component
                        this.props.index === this.props.questionNumber && (<Que>
                            <h2>
                                {this.props.question}
                            </h2>
                            {this.state.options.map((el, index) =>   //options
                                <h3 key={index} onClick={this.userAnswer}>{el}</h3>)}
                            <button onClick={this.props.handleNext}>Next</button>
                        </Que>)
                }


            </div>

        )
    }
}
export default Question