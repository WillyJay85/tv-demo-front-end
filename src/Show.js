import React, { Component } from 'react'
class Show extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {
            return (
                <button onClick={this.props.selectHandler}>-</button>
            )
        }
    }
    render() {
        return (

            <div>

               <button onClick={this.props.selectHandler}>>{this.props.Name}</button>
                {this.renderDelete()}

            </div>


        )


    }
}
export default Show