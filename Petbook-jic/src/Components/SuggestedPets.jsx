import './SuggestedPets.css'
import { useState } from 'react'


function SuggestedPets() {

  const [Petpeeve, setPetpeeve] = useState(
    [
      {id: 1, PetName:'Coby',like: 0, Caption:'Hello World',Photo:'nothingfornow',url:'https://th.bing.com/th/id/OIP.hngZqGVjacTN1z3VMqBkoAHaHi?rs=1&pid=ImgDetMain'},
      {id: 2, PetName:'Tofu',like: 0, Caption:'Hello World',url:'https://i.pinimg.com/originals/34/2a/f5/342af52dd33dd2e366225ec55b93fe85.jpg'},
      {id: 3, PetName:'Tofu',like: 0, Caption:'Hello World',url:'https://i.pinimg.com/originals/34/2a/f5/342af52dd33dd2e366225ec55b93fe85.jpg'},
      {id: 4, PetName:'Tofu',like: 0, Caption:'Hello World',url:'https://i.pinimg.com/originals/34/2a/f5/342af52dd33dd2e366225ec55b93fe85.jpg'},
      {id: 5, PetName:'Tofu',like: 0, Caption:'Hello World',url:'https://i.pinimg.com/originals/34/2a/f5/342af52dd33dd2e366225ec55b93fe85.jpg'},
      {id: 6, PetName:'Tofu',like: 0, Caption:'Hello World',url:'https://i.pinimg.com/originals/34/2a/f5/342af52dd33dd2e366225ec55b93fe85.jpg'}
    ]
  );

  const randomPets = Petpeeve
  .sort(() => 0.5 - Math.random()) 
  .slice(0, 5); 


   return(
    <>
    <div className='Sticky1'>
       <h1 className='suggHeader'>SUGGESTED PETS</h1>
       <div className='container2'>
       {
        randomPets.map((Petpeeve) =>(
          <div className='sugg' key={Petpeeve.id}>
            <img className='SuggPets' src={Petpeeve.url} alt='PetPhoto'/>
            <h5 className='SuggName'>I'm {Petpeeve.PetName}</h5>
          </div>
        )
      )
    }
       </div>
    </div>
   
    
    </>
   ) 

}
 

export default SuggestedPets