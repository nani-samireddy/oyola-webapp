import ModalOutline from "../ModalOutline/ModalOutline";
import "./datesModal.css";

import {
  DatePicker,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";

const DatesModal = () => {

  const { pickedDates } = useDatePickGetter();
  const resetFunc = useDatePickReset();
  return (
    <ModalOutline title={"Select the dates "}>
      {
        <div>
          <DatePicker disablePreviousDays />

          {/* Below part is just demonstration of the datepicker working */}
          {/* Not part of the design */}
          <hr />
          <div>{pickedDates.firstPickedDate?.toString()}</div>
          <div>{pickedDates.secondPickedDate?.toString()}</div>
          <button type="button" onClick={resetFunc}>
            Reset
          </button>
        </div>
      }
    </ModalOutline>
  );
};

export default DatesModal;
