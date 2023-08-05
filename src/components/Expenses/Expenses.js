import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  let filterInfoText = "2018,2019,2020,2021,2022";
  if (filteredYear === "2018") {
    filterInfoText = "2019,2020,2021,2022,2023";
  } else if (filteredYear === "2019") {
    filterInfoText = "2018,2020,2021,2022,2023";
  } else if (filteredYear === "2020") {
    filterInfoText = "2018,2019,2021,2022,2023";
  } else if (filteredYear === "2021") {
    filterInfoText = "2018,2019,2020,2022,2023";
  } else if (filteredYear === "2022") {
    filterInfoText = "2018,2019,2020,2021,2023";
  } else {
    filterInfoText = "2018,2019,2020,2021,2022";
  }
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>Data of {filterInfoText} hidden</p>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
