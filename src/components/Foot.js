import React, { Component } from "react";
import styles from '../components/modules/style.module.css';

export default class Head extends Component {
  render() {
    return (
      <>
        <div>
          <div className={styles.align4}>
            <div id="displayYear" className={styles.letra2}>--</div>
            <div className={styles.letra}>years</div>
          </div>
          <div className={styles.align2}>
            <div id="displayMonth" className={styles.letra2}>--</div>
            <div className={styles.letra}>months</div>
          </div>
          <div className={styles.align5}>
            <div id="displayDay" className={styles.letra2}>--</div>
            <div className={styles.letra}>days</div>
          </div>
        </div>
      </>
    );
  }
}
