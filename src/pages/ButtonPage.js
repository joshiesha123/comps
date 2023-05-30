import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage(){
    
    const handleClick= function(){
        // console.log("click");
    }



    return (
        <div>
    <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
            <GoBell />
        Click here!
        </Button>
    </div>
    <div>
    <Button danger outline>
        <GoCloudDownload />
         now
         </Button>
</div>
<div>
        <Button warning>
            <GoDatabase/>
            see deals
            </Button>
    </div>
    <div>
    <Button primary rounded>Hide adds</Button>
</div> 
</div>
    )

}

export default ButtonPage;