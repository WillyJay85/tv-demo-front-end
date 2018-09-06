import React, { Component} from 'react';
import SiteNav from './SiteNav'
import Show from './Show'
import './ManagePage.css'
class ManagePage extends Component {
    state = {
        nameInProgress: '',
        ratingInProgress: '',
        imageUrlInProgress: '',
        show: {
            name: '',
            rating: '',
            imageUrl: ''
        }
    }

    handleNameChange = (event) => {
        console.log(this.state)
        this.setState({
            nameInProgress: event.target.value
        })
    }
    handleRatingChange = (event) => {
        console.log (event.target.value)
        this.setState({
            ratingInProgress: event.target.value
        })
    }
    handleImageUrlChange = (event) => {
        console.log(event.target.value)
        this.setState({
            imageUrlInProgress: event.target.value
        })
    }

    savedTvShow = () => {
        this.setState({
            show: {
                name: this.state.nameInProgress,
                rating: this.state.ratingInProgress,
                imageUrl: this.state.imageUrlInProgress
            },
            nameInProgress: '',
            ratingInProgress: '',
            imageUrlInProgress: ''

           
        })
       
    }
 


    renderShows = () => {
        return (
            <Show selectHandler={this.showSelected} deleteHandler={this.showDeleted} name={this.state.show.name} allowDelete={true}/>
        )
    }

    showSelected = () => {
        this.setState({
            nameInProgress: this.state.show.name,
            ratingInProgress: this.state.show.rating,
            imageUrlInProgress: this.state.show.imageUrl
        })
    }

    showDeleted = () => {
        this.setState({
            show: {
                name: '',
                rating: '',
                imageUrl: ''
            }
        })
    }
    allowDelete = true
    render() {
        console.log(this.state.show)
        return (
            <div>
                <SiteNav />
                <main>
                    <section>
                        <h2 >Shows</h2>
                       {this.renderShows()}
                       
                    </section>
                    <section>
                       
                            <h2>New/Edit</h2>
                            <div>
                                <label>Name:</label>
                                <input type="text" value={this.state.nameInProgress} onChange={this.handleNameChange}/>
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type="text" value={this.state.ratingInProgress} onChange={this.handleRatingChange} />
                            </div>
                            <div>
                                <label>Image URL:</label>
                                <input type="text" value={this.state.imageUrlInProgress} onChange={this.handleImageUrlChange} />
                            </div>
                            <button onClick={this.savedTvShow}>submit</button>
                        
                    </section>
                </main>
            </div>
        )
    }
}

export default ManagePage
