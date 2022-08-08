export function Modal(props){

    function isCancel(){
        props.onConfirm();
    }

    function isConfirm(){
        props.onCancel();
    }


    return(
        <div className='modal'>
            <p> Are you sure want to delete ?</p>
            <button className='btn btn--alt' onClick={isCancel}>No</button>
            <button className='btn' onClick={isConfirm}>Yes</button>
        </div>
    )
}