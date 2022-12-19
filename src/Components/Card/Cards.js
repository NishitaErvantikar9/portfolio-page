import {React,useState} from 'react'
import Card from './Card'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'
import img4 from '../../images/4.jpg'
import img5 from '../../images/5.jpg'
import img6 from '../../images/6.jpg'


function Cards() {
 
    const[state]= useState({
     project1:
         {
             title:"Wild Life Gallery",
             imageSrc : img1,
             link:"https://wildlife-gallery-final.webdevdev1.repl.co/"
         },
         project2:
         {
             title:"Travel Diary",
             imageSrc : img2,
             link:"https://travel-diary-complete.webdevdev1.repl.co/"
         },
         project3:
         {
             title:"Netflix",
             imageSrc : img3,
             link:"https://linkedin-final.webdevdev1.repl.co/"
         },
         project4:
         {
             title:"ConnectIn",
             imageSrc :img4,
             link:"https://linkedin-final.webdevdev1.repl.co/"
         },
         project5:
         {
             title:"KFC",
             imageSrc : img5,
             link:"https://kfc-finall.webdevdev1.repl.co/"
         },
         project6:
         {
             title:"Color Guessing Game",
             imageSrc : img6,
             link:"https://color-guessing-game-final.webdevdev1.repl.co/"  
         },

    }) 

    return (
        <div className="productContainer">
     
             <Card title={state.project1.title} imgSrc={state.project1.imageSrc} link={state.project1.link} />
             <Card title={state.project2.title} imgSrc={state.project2.imageSrc}  link={state.project2.link}/>
             <Card title={state.project3.title} imgSrc={state.project3.imageSrc}  link={state.project3.link}/>
             <Card title={state.project4.title} imgSrc={state.project4.imageSrc}  link={state.project4.link}/>
             <Card title={state.project5.title} imgSrc={state.project5.imageSrc}  link={state.project5.link}/>
             <Card title={state.project6.title} imgSrc={state.project6.imageSrc}  link={state.project6.link}/>
             
         </div>

    )
}

export default Cards
