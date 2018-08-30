import React, { Component } from 'react';
import SiteNav from './SiteNav'
class ManagePage extends Component {
render (){
return (
<div>
<SiteNav/>
        
<main>
   <section>
        <h2 >Shows</h2>
        <div className="box">
            <button onClick="clickedSweetChoppers()">Sweet Choppers</button>
            <button onClick="clickedDelete()" className="circle">-</button>
        </div>
        <div className="box2">
            <button onClick="clickedFloNation()" >Flonation</button>
            <button onClick="clickedDelete()" className="circle">-</button>
        </div>
    </section>
    <section>
        <form>
        <h2>New/Edit</h2>
        <div>
            <label>Name:</label>
            <input type="text"/>
        </div>
        <div>
            <label>Rating:</label>
            <input type="text"/>
        </div>
        <div>
            <label>Image URL:</label>
            <input type="text"/>
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
