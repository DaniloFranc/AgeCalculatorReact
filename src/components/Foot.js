import React, { Component } from "react";
import styles from '../components/modules/style.module.css';

export default class Foot extends Component {
  render() {
    const { displayYear, displayMonth, displayDay } = this.props;

    return (
      <>
        <div>
          <div className={styles.align4}>
            <div id="displayYear" className={styles.letra2}>{displayYear}</div>
            <div className={styles.letra}>years</div>
          </div>
          <div className={styles.align2}>
            <div id="displayMonth" className={styles.letra2}>{displayMonth}</div>
            <div className={styles.letra}>months</div>
          </div>
          <div className={styles.align5}>
            <div id="displayDay" className={styles.letra2}>{displayDay}</div>
            <div className={styles.letra}>days</div>
          </div>
        </div>
      </>
    );
  }
};