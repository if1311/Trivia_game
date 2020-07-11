import React from "react"
import { Que } from "./styled-components-questions"


class Question extends React.Component {


    render() {
        console.log(this.props)
        return (
            <div>
                {
                    this.props.index === this.props.questionNumber && (<Que>
                        <h2>
                            {this.props.question}
                        </h2>
                        <button onClick={this.props.handleNext}>Next</button>
                    </Que>)

                }

            </div>

        )
    }
}
export default Question