import "../BidderControl/BidderControl.css";


const BidderControl = ({name, addBid}) =>{
    

    return(
        <button onClick={addBid}>{name} quiere pujar 5€</button>
    )
};


export default BidderControl;