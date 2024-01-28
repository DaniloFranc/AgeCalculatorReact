import React, { Component } from "react";
import styles from '../components/modules/style.module.css';
import Icon from '../icons/icon-arrow.svg';

export default class Mid extends Component {
  handleButtonClick = () => {
    // Chame a função calculateAge passada como propriedade
    this.props.handleButtonClick();
  };

  render() {
    return (
      <>
        <div className={styles.alinhar}>
          <hr className={styles.linhaPersonalizada} />
          <button
            id="button"
            className={styles.botao}
            onClick={this.handleButtonClick}
          >
            <img src={Icon} alt="Descrição da imagem" />
          </button>
        </div>
      </>
    );
  }
};