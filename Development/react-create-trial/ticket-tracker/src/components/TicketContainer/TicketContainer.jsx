import React, {useState} from 'react'
import "../TicketContainer/TicketContainer.scss"




const TicketContainer = (props) => {
    


        const {team} = props;
        const [ticketCounter, setTicketCounter] = useState(0)
    
        
        const handleIncrement = () => {
            if(ticketCounter === team.length -1){
                setTicketCounter(0)
            } else {
                setTicketCounter(ticketCounter + 1)
            }
            
        }
    
        const handleDecrement = () => {
            setTicketCounter(ticketCounter - 1)
        }
        return (
            <>
            <p>{ticketCounter}</p>
            <div className="ticketAmount" onClick={handleIncrement}>TicketContainer</div>
            <div className="ticketAmount" onClick={handleDecrement}>TicketContainer</div>
            <div src={team[ticketCounter]} className="ticket" alt = ""></div>
            </>
        )
    }


    


export default TicketContainer