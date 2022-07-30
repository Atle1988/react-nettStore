import axios from "axios"
import  NettProdukter from "../NettProdukter"
import {useEffect} from "react"

function ApiStore(props){
   
    // When page render the function  inside useEffect fire up and get the response of the api call!
    useEffect( () => {
        axios.get('https://fakestoreapi.com/products').then(response => {
        
        // then store the response.data to props.store state..
        props.setStore(response.data)
        
        }).catch(error => {
        console.log(error)
        })
    })


    // If the axios call was sucsess (and props.store === true) a map function will start and make props to Nettprodukter
    // The handleClick and agreeClick are props send from App.js to this function component
    return(
        <>
            { 
                props.store &&  props.store.map( (item) => {
                    return(
                        <NettProdukter 
                            key={item.id}

                            id={item.id}
                            title={item.title}
                            caterogry={item.caterogry}
                            description={item.description}
                            image={item.image}
                            price={item.price}
                            rate={item.rating.rate}
                            count={item.rating.count}

                            handleClick={props.handleClick}
                            agreetClick={props.agreetClick}
                        />
                    )
                } )  
            }
        </>
    )
}

export default  ApiStore;