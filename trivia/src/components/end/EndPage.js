import React from 'react'

export default class EndPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            points: null
        }
    }
    toStartPage = () => this.props.history.push({
        pathname: "/",
        state: { points: this.state.points }
    })
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Finish</h1>
                {/* <button>Play again</button> */}
                <button onClick={this.toStartPage}>New game</button>
            </div>
        )
    }
}
