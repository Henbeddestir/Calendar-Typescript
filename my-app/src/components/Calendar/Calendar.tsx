import "../../App";
import Actions from "./Partials/Actions";
import CalendarComponent from "./Partials/Calendar";
import Title from "./Partials/Title";

interface ICalendarProps {
  setDate: any;
  date: any;
  selectRange: boolean;
  setSelectRange: any;
  

}

const CustomCalendar = (props: ICalendarProps) => {
  const { setDate, date, selectRange, setSelectRange } = props;
  return (
    <div style={{ width: "80vw", display: "grid", placeItems: "center"  }}>
      <Title title={"Calendar"} />
      <CalendarComponent
        setDate={setDate}
        date={date}
        selectRange={selectRange}
        
        
        
      />
      <Actions
        setDate={setDate}
        date={date}
        selectRange={selectRange}
        setSelectRange={setSelectRange}
        
      />
    </div>
  );
};

export default CustomCalendar;