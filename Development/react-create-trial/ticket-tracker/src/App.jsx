
import "./App.scss";
import data from "../src/data/data";
import TicketContainer from "./components/TicketContainer/TicketContainer";

const App = () => {

  



  return (
    <>
      <div className="ticket">
        <header className="ticket__header">
          <h1 className="ticket__heading">Ticket Tracker</h1>
        </header>
        <section>
          <TicketContainer team={data} />
        </section>
      </div>
    </>
  );
};

export default App;