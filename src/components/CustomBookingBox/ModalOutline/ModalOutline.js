import './ModalOutline.css';
const ModalOutline = (props) => {
    return (
        <div className='ModalOutline'>
            <div className="modalTitle">
                <h4>{props.title}</h4>
            </div>
            <div className="modalBody">
                {props.children}
            </div>
        </div>
    );
}

export default ModalOutline;