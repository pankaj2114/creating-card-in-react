import React from "react";
import Carddata from "./CardDetail/Carddata";
import Cardcomponent from "./CardDetail/CardComponent";

function App() {
    return (
        <>
        <h1 className='top-heading'>Top Netflix Webseries</h1>
            {Carddata.map(Cardcomponent)}

        </>
    )
}
export default App;