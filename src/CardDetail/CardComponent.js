
import Card from "./Card";


function Cardcomponent(val){
    return(
        <>
             <Card
                key={val.id}
                name={val.name}
                link={val.link}
                imgsrc={val.imgsrc}
            />

        </>
    )
}
export default Cardcomponent;