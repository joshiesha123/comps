import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

   const handleClick =()=>{
    setShowModal(true);
   }

   const handleClose=()=>{
    setShowModal(false);
   }

  const actionBar=<div>
 <Button onClick={handleClose} primary>I Accept</Button>
 </div>

   const modal=<Modal  onClose={handleClose} actionBar={actionBar}>
    <p>
        Here is an imp agreement for you to accept
    </p>
    </Modal>

return(

<div className="relative">
    <Button onClick={handleClick} primary>Open Modal</Button>

 {/* this line means that if showModal is true display modal component else display nothing */}
   { showModal && modal}
</div>
);
}

export default ModalPage;