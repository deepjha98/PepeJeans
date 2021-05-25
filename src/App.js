import "./main.scss";

// IMPORT THE COMPONENTS
import TopHeader from "./components/header";
import Tracking from "./components/Tracking";
import DeliveryFunctions from "./components/DeliveryFunctions";
import OrderDetails from "./components/orderDetails";
import Recommended from "./components/recommended";
//////////////////////////////////////////
import PantsProductImg from "./resources/PantsProductImg.png";
function App() {
  return (
    <div className="main">
      <TopHeader />
      <Tracking
        arrivingOn={"July"}
        orderStatus={"transit"}
        arrivingFrom={"Mumbai"}
      />
      <DeliveryFunctions />
      <OrderDetails
        description={"Men Blue Skinny Fit Mid-Rise Clean..."}
        size={30}
        quantity={1}
        ProductName={"Pepe jeeans"}
        price={"5,845"}
        PantsProductImg={PantsProductImg}
      />
      <Recommended />
    </div>
  );
}
//////////////////////////////////////////
export default App;
