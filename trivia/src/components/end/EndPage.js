import React from 'react'
import { Button, StartCont, H1 } from "../start/styled-components-start"

export default class EndPage extends React.Component {

    toStartPage = () => this.props.history.push("/")
    render() {
        return (
            <StartCont end="" >
                <H1>Well done!</H1>
                <H1 score>Your Score</H1>
                <H1>{this.props.location.state}</H1>
                {/* <button>Play again</button> */}
                <Button ok onClick={this.toStartPage}>New game</Button>
            </StartCont>
        )
    }
}
