import React, { Component } from "react";
import styles from '../components/modules/style.module.css';
import Head from "./Head";
import Mid from './Mid';
import Foot from './Foot';



export default class Body extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        
        return (
            <>
                <body className={styles.container}>
                    <div className={styles.content}>
                        <Head/>
                        <Mid/>
                        <Foot/>
                    </div>
                </body>
            </>
        );
    };

};