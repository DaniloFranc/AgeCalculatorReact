import React, { Component } from "react";
import styles from '../components/modules/style.module.css';
import Icon from '../icons/icon-arrow.svg';

export default class Head extends Component {
  render() {
    return (
      <>
        <div className={styles.alinhar}>
          <hr className={styles.linhaPersonalizada} />
          <button id="button" className={styles.botao}>
            <img src={Icon} alt="Descrição da imagem" />
          </button>
        </div>
      </>
    );
  }
}
