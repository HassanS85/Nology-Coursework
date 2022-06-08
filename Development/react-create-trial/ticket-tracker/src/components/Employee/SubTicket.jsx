import "./Ticket.scss";
import "../Button/Button.jsx";

const Ticket = ({name, role}) => {
    return (
        <div className="subTicket">
            {name} 

            {role}
            <div className="counter-container">
                <Counter />

            </div>

        </div>

    )
}

export default Ticket;