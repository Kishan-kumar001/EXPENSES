import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  //   let filterInfoText = "2018,2019,2020,2021,2022";
  //   if (filteredYear === "2018") {
  //     filterInfoText = "2019,2020,2021,2022,2023";
  //   } else if (filteredYear === "2019") {
  //     filterInfoText = "2018,2020,2021,2022,2023";
  //   } else if (filteredYear === "2020") {
  //     filterInfoText = "2018,2019,2021,2022,2023";
  //   } else if (filteredYear === "2021") {
  //     filterInfoText = "2018,2019,2020,2022,2023";
  //   } else if (filteredYear === "2022") {
  //     filterInfoText = "2018,2019,2020,2021,2023";
  //   } else {
  //     filterInfoText = "2018,2019,2020,2021,2022";
  //   }
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
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
