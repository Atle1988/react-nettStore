import cancelBtn from "./images/cancel_icon.png"
export default function Handlekurven(props){

    function testerConsolen(){
      console.log( props.handlekurven )
    }
  
   
  
    const buy_Btn = {
      backgroundColor: props.handlekurven.length  ?  "#73F44B" : "#252525",
      color: "#252525"
    }
    return(
    <div className='flex'>
       
        <div className='strokeBlack'>
            <h1>Velkommen til din handlekurv !</h1>
            <div className="theShop strokeBlack" style={buy_Btn} onClick={testerConsolen}>Bestill 👍🏽 </div>
        </div>
  
        { 
          props.handlekurvLength ? <div>
              <ul>
                {props.handlekurven.map( item => {
                  return <div  key={item.id} className='handlekurv--list'>
                            <img src={item.image} alt="" className='img--handlekurv--list'/>
                            <section>
                              <li><b className="strokeWhite">Title:</b><br/> {item.title}</li>
                              <li><b className="strokeWhite">Price:</b> {item.price} $  </li>
                              <button className='deleteBtn--handlekurv--list' onClick={ () => props.agreetClick(item.id, item) } >Remove Item <img src={cancelBtn} width={"18px"} height={"18px"} alt="" /> </button>
                              
                            </section>
                            
                          </div>
                })}
             
              </ul>
          </div> : <div className="strokeWhite">HANDLEKURVEN ER TOM</div> 
          
        }
  
      </div>
    )
  }