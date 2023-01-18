import './chip.css';
import { selected, unselected } from '../../constants/svgs.js';
const Chip = ({ name, isSelected, action }) => {
    const select = isSelected ? "selected" : "";
    return (
        <div className={"chip " + select} onClick={() => { action() }} >
            <div className="iconContainer">
                {isSelected ? selected : unselected}
            </div>
            <div className="nameContainer">
                <h4>{name}</h4>
            </div>
        </div>
    );
}
export default Chip;