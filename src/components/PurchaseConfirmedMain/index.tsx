import "./styles.css";

interface PurchaseConfirmedProps {
  confirmed: string;
  number: string;
  detail: string;
}

export default function PurchaseConfirmedMain({confirmed, number, detail}: PurchaseConfirmedProps) {

  return(
      <div className="PurchaseConfirmedContainer">

       <h2 className="PurchaseConfirmedConfirmed">
         {confirmed}
       </h2>

       <p className="PurchaseConfirmedText">
         {number}
       </p>

       <p className="PurchaseConfirmedText">
         {detail}
       </p>

      </div>
  )
}