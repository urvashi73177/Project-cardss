
// import Cards from './component/Cards'  


// function App() {
//   return (
//     <div className='container'>
//      <Cards title="Recently Published " />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
// import Cards from './component/Cards'
import Cards2 from './component/Cards2'
import Posts from './Postsname'
// console.log(Posts[0].title)




export class App extends Component {
  render() {
    return (
        <>
      <div>
        <Cards2
        // category ={Posts[0].title}
        />
      </div>
        </>
    )
  }
}

export default App

