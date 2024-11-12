import Userid from "./Userid";
import Name from "./Name";
import Age from "./Age";
import Genger from "./Gender";
import Email from "./Email";

export default function Total({id,firstname,age}){
    return(
        <>
        <table>
       <tr><td><Userid id={id}/></td></tr>
       <tr><td> <Name firstname={firstname}/></td></tr> 
        <Age age={age}/>
        <Genger/>
        <Email/>
        </table>
        
        </>
    )
}