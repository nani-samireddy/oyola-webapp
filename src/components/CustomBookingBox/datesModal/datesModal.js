import ModalOutline from "../ModalOutline/ModalOutline";
import "./datesModal.css";

import "antd/dist/reset.css";
import { DatePicker } from "antd";
import { useState } from "react";
import moment from "moment";
const { RangePicker } = DatePicker;

const DatesModal = () => {

  const [dates, setDates] = useState([]);
  console.log(dates);
  
  return (

    <ModalOutline title={"Select the dates "}>
      {
        <RangePicker
        disabledDate={(current) => current.isBefore(moment().subtract(1,"day"))}
          onChange={(values) => {
            setDates(
              values.map((item) => {
                return moment(item).format("YYYY-DD-MM");
              })
            );
          }}
        />
      }
    </ModalOutline>
  );
};

export default DatesModal;
