import "./CustomBookingBox.css";
import PlacesModal from "./placesModal/placesModal";
import DatesModal from "./datesModal/datesModal";
import PeopleModal from "./peopleModal/peopleModal";
import { useState } from "react";
import { DatePickerProvider } from "@bcad1591/react-date-picker";

const CustomBookingBox = () => {
  const [modalIndex, setModalIndex] = useState(-1);
  const modals = [
    <PlacesModal />,
    <DatePickerProvider>
      <DatesModal />
    </DatePickerProvider>,
    <PeopleModal />,
  ];
  return (
    <div className="herosectionOverlay">
      <div className="cbb">
        <div
          className={
            modalIndex === 0 ? "options places activeModal" : "options places"
          }
          onClick={() => {
            setModalIndex((prev) => (prev === 0 ? -1 : 0));
          }}
        >
          <div className="heading">
            <b>Place</b>
          </div>
          <div className="places-selection">select Places</div>
        </div>
        <div
          className={
            modalIndex === 1 ? "options dates activeModal" : "options dates"
          }
          onClick={() => {
            setModalIndex((prev) => (prev === 1 ? -1 : 1));;
          }}
        >
          <div className="heading">
            <b>Dates</b>
          </div>
          <div className="dateselection">select Dates</div>
        </div>
        <div
          className={
            modalIndex === 2 ? "options people activeModal" : "options people"
          }
          onClick={() => {
            setModalIndex((prev) => (prev === 2 ? -1 : 2));;
          }}
        >
          <div className="heading">
            <b>People</b>
          </div>
          <div className="people-selection">How many people?</div>
        </div>
        <div className="options next">
          <div className="nextbtn">Next &#8594;</div>
        </div>
      </div>
      <br />
      {modals[modalIndex]}
    </div>
  );
};

export default CustomBookingBox;
