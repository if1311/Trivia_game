import React from "react"
import Question from "./Question"



class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            questionNumber: 1
        }
    }
    componentDidMount = () => this.setState({ data: this.props.location.state.data })
    handleNext = () => this.setState(prevState => {
        return {
            ...prevState,
            questionNumber: prevState.questionNumber + 1
        }
    })
    render() {
        console.log(this.state.data)

        return (
            <div>
                {
                    this.state.data.map((el, index) => {
                        const propsToSend = {
                            question: el.question,
                            index: index + 1,
                        }
                        return (
                            <div key={index}>
                                <Question {...propsToSend} handleNext={this.handleNext} questionNumber={this.state.questionNumber} />
                            </div>
                        )
                    })
                }

                {
                    this.state.questionNumber === this.state.data.length + 1 && (
                        <p>finish</p>
                    )
                }

            </div>

        )
    }
}
export default Questions