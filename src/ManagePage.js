import React, { Component } from 'react';
import SiteNav from './SiteNav'
import Show from './Show'
import './ManagePage.css'
 class ManagePage extends Component {
state = {
    nameInProgress: '',
    ratingInProgress: '',
    imageUrlInProgress: '',
}

async componentDidMount (){
    const response = await fetch('http://localhost:3000/tv-demo', { 
        headers: {  'Accept': 'application/json',
        'Content-Type': 'application/json' }
    })
    const data = await response.json()
    console.log(data)
    this.setState({
        tvShows: data
    })
}   

    handleNameChange = (event) => {
        console.log(this.state)
        this.setState({
            name: event.target.value
        })
    }
    handleRatingChange = (event) => {
        console.log(event.target.value)
        this.setState({
            rating: event.target.value
        })
    }
    handleImageUrlChange = (event) => {
        console.log(event.target.value)
        this.setState({
            imageUrl: event.target.value
        })
    }

    savedTvShow  = async () => {
        let body = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
     const response = await fetch('http://localhost:3000/tv-demo', body)
     const data = await response.json()
     console.log(data)
     this.setState({
         tvShows: data
     })

           
     }
        // this.props.saveShow({
        //     name: this.state.nameInProgress,
        //     rating: Number(this.state.ratingInProgress),
        //     imageUrl: this.state.imageUrlInProgress

        // })

        // this.setState({
        //     nameInProgress: '',
        //     ratingInProgress: '',
        //     imageUrlInProgress: ''


        // })


    



    renderShows = () => {
    console.log(this.state.tvShows)
        if(this.state.tvShows)
        return this.state.tvShows.map(
            (tvShow, i) => {
               return(
                <Show key={i}  name={tvShow.name} selectHandler={this.showSelected} deleteHandler={this.showDeleted}  allowDelete={true} />
                )
            }
        )

    }
    showSelected = () => {
        // this.setState({
        //     nameInProgress: this.props.show.name,
        //     ratingInProgress: this.props.show.rating,
        //     imageUrlInProgress: this.props.show.imageUrl
        // })
    }

    showDeleted = () => {
        // this.props.showDeleted()
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
                            <input type="text" value={this.state.rating} onChange={this.handleRatingChange} />
                        </div>
                        <div>
                            <label>Image URL:</label>
                            <input type="text" value={this.state.imageUrl} onChange={this.handleImageUrlChange} />
                        </div>
                        <button onClick={this.savedTvShow}>submit</button>

                    </section>
                </main>
            </div>
        )
    }
    
 }

export default ManagePage
