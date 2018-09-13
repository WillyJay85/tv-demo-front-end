import React, { Component } from 'react';
import SiteNav from './SiteNav'
import Show from './Show'
import './ManagePage.css'
import PropTypes from 'prop-types'
class ManagePage extends Component {
    static propTypes = {
        tvShows: PropTypes.array.isRequired,
        show: PropTypes.object.isRequired,
        showDeleted: PropTypes.func.isRequired,
        saveShow: PropTypes.func.isRequired,
    }

    state = {
        nameInProgress: '',
        ratingInProgress: '',
        imageUrlInProgress: '',
    }

    handleNameChange = (event) => {
        console.log(this.state)
        this.setState({
            nameInProgress: event.target.value
        })
    }
    handleRatingChange = (event) => {
        console.log(event.target.value)
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
        this.props.saveShow({
            name: this.state.nameInProgress,
            rating: this.state.ratingInProgress,
            imageUrl: this.state.imageUrlInProgress

        })

        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            imageUrlInProgress: ''


        })


    }



    renderShows = () => {
        const showsToRender = []
        for (const tvShow of this.props.tvShows){
            showsToRender.push((
                <Show key={tvShow.name}  name={tvShow.name} selectHandler={this.showSelected} deleteHandler={this.showDeleted}  allowDelete={true} />
            ))
        }
        return  showsToRender
    }

    showSelected = () => {
        this.setState({
            nameInProgress: this.props.show.name,
            ratingInProgress: this.props.show.rating,
            imageUrlInProgress: this.props.show.imageUrl
        })
    }

    showDeleted = () => {
        this.props.showDeleted()
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
                            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
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
