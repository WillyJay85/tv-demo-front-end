import React, { Component } from 'react'



class Show extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {
            return (
                <button></button>
            )
        }
    }
    render() {
        return (

            <div>

                <button>{this.props.Name}</button>
                {this.renderDelete()}

            </div>


        )


    }
}
export default Show