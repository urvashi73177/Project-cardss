import React, { Component } from 'react'
import CardsNew from './CardsNew'
import Posts from '../Postsname'

export class Cards2 extends Component {
    render() {

        function card(val,index){
            console.log(val.owner.profile_pic)
            return(
                <CardsNew 
                category ={val.category} 
                discription ={val.discription} 
                title={val.title} 
                name = {val.owner.name} key={index}
                profile_pic={val.owner.profile_pic}
                createdAt={val.createdAt}
                

                  />
            )
        }
        return (

            <>
            <div className='lg:grid grid-cols-3' >
             

               { Posts.map(card)}
              
              




               
            </div>

            </>
        )
    }
}

export default Cards2


