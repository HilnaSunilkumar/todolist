import { useState } from "react";
import { Backdrop } from "./Backdrop";
import { Modal } from "./Modal";

export function Todo(props){
  const [modalOpen, setModalOpen] = useState(false);

    function deleteTodo(){
        setModalOpen(true);
    }

    function closeBackdrop(){
      setModalOpen(false);
    }

   return(
    <div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'>
      <button className='btn' onClick={deleteTodo}>Delete</button>
    </div>
    {modalOpen ? <Modal onCancel={closeBackdrop} onConfirm={closeBackdrop} /> : null}
    {modalOpen && <Backdrop  onClose={closeBackdrop}/> }


  </div>
   );
}
