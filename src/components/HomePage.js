import React, { Component } from 'react'
import userData from './userdata/userinfo'

export default class HomePage extends Component {
    state={
        persons:userData
    }
    render() {
        return (
        <div class="container mt-3">
         <div class="row">
    {
        this.state.persons.map(person=>(
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 person">
            <div class="card mb-3" >
            <img class="card-img-top text-center" src={person.image} alt="Card image cap"/>
            <div class="card-body">
        <p class="card-text text-center">Name:{person.name}</p>
  </div>
</div>
            </div>
        ))
    }
  </div>
</div>
        )
    }
}

