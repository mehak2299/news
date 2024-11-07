import React, { Component } from 'react'

export default class API_Calling extends Component {
   componentDidMount()
   {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=>response.json())
    .then((data)=>console.log(data))
   }
    render() {
    return (
      <div>API_Calling</div>
    )
  }
}
