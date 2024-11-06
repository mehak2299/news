import React, { Component } from 'react'
import NewsItem from './NewsItem'
import myData from '../Data/data1.json'

export default class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: myData
    }
  }
  // renderItem() {
  //   const one = JSON.parse(this.state.data)
  //   console.log("OO", one)
  //   const two = one.results.map((item, index) => {
  
        
      
    
  //     return (<div className='newItemColumn'><NewsItem key={index}title={item.title} index={index}/></div>) 
  //   })
  //   return two
  // }

  render() {
    console.log("DATa", myData)
    return (
  //     <div class="container">
  // <div class="row">
  //   <div class="col-md-4">
  //     1 of 3
  //   </div>
  //   <div class="col-md-4">
  //     2 of 3 (wider)
  //   </div>
  //   <div class="col-md-4">
  //     3 of 3
  //   </div>
  //   <div class="col-md-4">
  //     3 of 3
  //   </div>
  //   <div class="col-md-4">
  //     3 of 3
  //   </div>
  //   <div class="col-md-4">
  //     3 of 3
  //   </div>
  //   <div class="col-md-4">
  //     3 of 3
  //   </div>
  //   </div>
  //   </div>

      <div className='newItemRow'>
        {this.state.data.results.map((item,index)=>{
         return(
           
            <div className='newItemColumn'>
            <NewsItem index={index} title={item.title} 
            linkData={item.link} description={item.description}
            image_url={item.image_url}/>
            </div>
         )
            
        })}
     
        </div>
      
        
      



     

    )
  }
}

