import Prodect from "./Prodect"
import Image from "./Image"
import Button from "./Button"
export default function Card({src}){
    return(
        <div className="first">
           <Prodect/>
            <Image src={src}/>
            <Button/>
        </div>
    )
}
