import cancel from "./images/cancel_icon.png"
import add from "./images/add_icon.png"

export default function NettProdukter(props){
    // This Function Component return how the NettProdukter will display in the HTML
   // the onClick={ has a Arrow Function with parameters, that send props arguments. } 
    return(
        
        <div className="card">
            <section className="section--top">
                <img src={props.image} alt="" width={"150px"} height={"150px"} />
            </section>

            <h4>{props.title} </h4>
            <h6>{props.caterogry} </h6>
            <p>{props.description} </p>
            <p>Rate: {props.rate} </p>
            <p>Count: {props.count} </p>
            <br/>
            <section className="section--buy">
                <b>{props.price} $</b>
                <img src={add} alt="" onClick={ () => props.handleClick(props) } width={"30px"} />
                <img src={cancel} alt="" onClick={ () => props.agreetClick(props.id, props) } width={"30px"} />
            </section>
        </div>
    
    )
}
