import React, { Component } from "react";
import styles from '../components/modules/style.module.css';

export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
    isInvalidDay: false,
    isInvalidMonth: false,
    isInvalidYear: false,
  };
}

componentDidUpdate(prevProps) {
  
  if (prevProps.day !== this.props.day || prevProps.month !== this.props.month || prevProps.year !== this.props.year) {
    this.resetValidationFlags();
  }
}

resetValidationFlags = () => {
  this.setState({
    isInvalidDay: false,
    isInvalidMonth: false,
    isInvalidYear: false,
  });
};

validateInputs = () => {
  const { day, month, year } = this.props;

  const valueMonth = parseInt(month, 9);
  const valueDay = parseInt(day, 10);
  const valueYear = parseInt(year, 10);
  const isLeapYear = (valueYear % 4 === 0 && valueYear % 100 !== 0) || valueYear % 400 === 0;
  const maxDaysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const isInvalidMonth = valueMonth < 0 || valueMonth > 11;
  const isInvalidDay = valueDay < 1 || valueDay > maxDaysInMonth[valueMonth];
  const isInvalidYear = valueYear > 2023;

  this.setState({
    isInvalidMonth,
    isInvalidDay,
    isInvalidYear,
  });

  return !isInvalidMonth && !isInvalidDay && !isInvalidYear;
};

render() {
  const { day, month, year, onInputChange } = this.props;
  const { isInvalidDay, isInvalidMonth, isInvalidYear } = this.state;

  return (
    <>
      <header className={styles.align}>
        <div>
          <div id="textDay" className={`${styles.texto} ${isInvalidDay && styles["highlight-border"]}`}>
            D A Y
          </div>
          <input
            id="day"
            className={`${styles.estilo} ${isInvalidDay && styles["highlight-border"]}`}
            type="text"
            value={day}
            onChange={(e) => {
              this.resetValidationFlags();
              onInputChange("day", e.target.value);
            }}
          />
          <span id="errorMessage1" className={styles.align3}>
            {isInvalidDay && "Must be a valid date"}
          </span>
        </div>
        <div>
          <div id="textMonth" className={`${styles.texto} ${isInvalidMonth && styles["highlight-border"]}`}>
            M O N T H
          </div>
          <input
            id="month"
            className={`${styles.estilo} ${isInvalidMonth && styles["highlight-border"]}`}
            type="text"
            value={month}
            onChange={(e) => {
              this.resetValidationFlags();
              onInputChange("month", e.target.value);
            }}
          />
          <span id="errorMessage2" className={styles.align3}>
            {isInvalidMonth && "Must be a valid month"}
          </span>
        </div>
        <div>
          <div id="textYear" className={`${styles.texto} ${isInvalidYear && styles["highlight-border"]}`}>
            Y E A R
          </div>
          <input
            id="year"
            className={`${styles.estilo} ${isInvalidYear && styles["highlight-border"]}`}
            type="text"
            value={year}
            onChange={(e) => {
              this.resetValidationFlags();
              onInputChange("year", e.target.value);
            }}
          />
          <span id="errorMessage3" className={styles.align3}>
            {isInvalidYear && "Must be in the past"}
          </span>
        </div>
      </header>
    </>
  );
}
}
