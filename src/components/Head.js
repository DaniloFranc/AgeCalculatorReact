import React, { Component } from "react";
import styles from '../components/modules/style.module.css';

export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "DD",
      month: "MM",
      year: "YYYY",
    };
  }

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const { day, month, year } = this.state;

    return (
        <>
            <header className={styles.align}>
                <div>
                    <div id="textDay" className={styles.texto}>
                    D A Y
                    </div>
                    <input
                    id="day"
                    className={styles.estilo}
                    type="text"
                    value={day}
                    onChange={(e) => this.handleInputChange("day", e.target.value)}
                    />
                    <span id="errorMessage1" className={styles.align3}></span>
                </div>
                <div>
                    <div id="textMonth" className={styles.texto}>
                    M O N T H
                    </div>
                    <input
                    id="month"
                    className={styles.estilo}
                    type="text"
                    value={month}
                    onChange={(e) => this.handleInputChange("month", e.target.value)}
                    />
                    <span id="errorMessage2" className={styles.align3}></span>
                </div>
                <div>
                    <div id="textYear" className={styles.texto}>
                    Y E A R
                    </div>
                    <input
                    id="year"
                    className={styles.estilo}
                    type="text"
                    value={year}
                    onChange={(e) => this.handleInputChange("year", e.target.value)}
                    />
                <span id="errorMessage3" className={styles.align3}></span>
                </div>
            </header>      
        </>
    );
  }
}
