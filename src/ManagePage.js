import React, { Component } from 'react';
import SiteNav from './SiteNav'
import Show from './Show'

class ManagePage extends Component {
    allowDelete = true
    render() {
        return (
            <div>
                <SiteNav />
                <Show />
            
                <main>
                    <section>
                        <h2 >Shows</h2>
                        <div className="box">
                            <Show Name="Sweet Choppers" allowDelete={true} />
                            <button onClick="clickedDelete()" className="circle">-</button>
                        </div>
                        <div className="box2">
                            <Show Name="Flonation" allowDelete={true} />
                            <button onClick="clickedDelete()" className="circle">-</button>
                        </div>
                    </section>
                    <section>
                        <form>
                            <h2>New/Edit</h2>
                            <div>
                                <label>Name:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Image URL:</label>
                                <input type="text" />
                            </div>
                            <button onClick="clickedSubmit()">submit</button>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}
export default ManagePage
