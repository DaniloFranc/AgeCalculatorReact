import React from 'react';

export default function Letters(){

    const fontStyles = `@font-face {
        font-family: 'Poppins';
        src: url(fonts/Poppins-Regular.ttf) format('truetype');
        font-weight: 400;
        font-style: normal;
      }   
      
      @font-face {
          font-family: 'Poppins-Bold';
          src: url(fonts/Poppins-Bold.ttf) format('truetype');
          font-weight: 200;
          font-style: normal;
        } 
      @font-face {
          font-family: 'Poppins-Italic';
          src: url(fonts/Poppins-Italic.ttf) format('truetype');
          font-weight: 700;
          font-style: normal;
      } 
      @font-face {
          font-family: 'Poppins-ExtraBoldItalic';
          src: url(fonts/Poppins-ExtraBoldItalic.ttf) format('truetype');
          font-weight: 700;
          font-style: italic;
      }@font-face {
          font-family: 'Poppins-ExtraBold';
          src: url(fonts/Poppins-ExtraBold.ttf) format('truetype');
          font-weight: 700;
          font-style: normal;
      }`;

    return <style>{fontStyles}</style>;

}