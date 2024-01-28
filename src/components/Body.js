// Body.js
import React, { Component } from "react";
import styles from '../components/modules/style.module.css';
import Head from "./Head";
import Mid from './Mid';
import Foot from './Foot';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "DD",
      month: "MM",
      year: "YYYY",
      displayYear: "--",
      displayMonth: "--",
      displayDay: "--",
    };
  }

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  calculateAge = () => {
    const { day, month, year } = this.state;

    // Obtendo a data de nascimento do usuário
    const birthDate = new Date(`${year}-${month}-${day}`);

    // Obtendo a data atual
    const currentDate = new Date();

    // Calculando a diferença em milissegundos
    const ageInMilliseconds = currentDate - birthDate;

    // Convertendo a diferença para anos, meses e dias
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    const ageInMonths = Math.floor(ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
    const ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

    // Calculando a diferença em dias, meses e anos específicos
    const years = Math.floor(ageInDays / 365);
    const months = Math.floor((ageInDays % 365) / 30);
    const days = ageInDays % 30;

    // Atualizando os estados
    this.setState({
      displayYear: years,
      displayMonth: months,
      displayDay: days,
    });
  };

  render() {
    const { day, month, year, displayYear, displayMonth, displayDay } = this.state;

    return (
      <>
        <body className={styles.container}>
          <div className={styles.content}>
            <Head
              day={day}
              month={month}
              year={year}
              onInputChange={this.handleInputChange}
            />
            <Mid
              handleButtonClick={this.calculateAge}
            />
            <Foot
              displayYear={displayYear}
              displayMonth={displayMonth}
              displayDay={displayDay}
            />
          </div>
        </body>
      </>
    );
  };
};
