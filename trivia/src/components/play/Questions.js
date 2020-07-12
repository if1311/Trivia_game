import React from "react"
import Question from "./Question"




class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            questionNumber: 1,
            points: 0,

        }
    }
    _isMounted = false;
    //received the state from start page component through the R.Router
    componentDidMount = () => {
        this._isMounted = true;
        this.setState({ data: this.props.location.state.data })
    }

    handleNext = () => this.setState(prevState => {
        return {
            ...prevState,
            questionNumber: prevState.questionNumber + 1
        }
    })
    //it gets called from Question Component
    incrementPoints = (num) => this.setState(prevState => {
        return {
            ...prevState,
            points: prevState.points + num
        }
    })

    //link with the router so after the questions are over to render EndPage component/it gets called from the Question component
    endPage = () => this.props.history.push({
        pathname: `${this.props.location.pathname}/endOfTheRoad`,
        state: this.state.points
    })
    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {
        return (
            <div>
                {
                    this.state.data.map((el, index) => {
                        const propsToSend = {
                            question: el.question,
                            index: index + 1,
                            incorrect_answers: el.incorrect_answers,
                            correct_answer: el.correct_answer

                        }
                        //check if there are no questions left then send as prop endPage method to active it on click button in Question component
                        return this.state.questionNumber - this.state.data.length + 1 !== 1 ? (
                            <div key={index}>
                                <Question {...propsToSend} handleNext={this.handleNext} questionNumber={this.state.questionNumber} incrementPoints={this.incrementPoints} />
                            </div>
                        ) : (<div key={index}>
                            <Question {...propsToSend} handleNext={this.handleNext} questionNumber={this.state.questionNumber} endPage={this.endPage} incrementPoints={this.incrementPoints} />
                        </div>)
                    })
                }
            </div>
        )
    }
}
export default Questions