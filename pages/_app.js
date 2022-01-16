import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';

export default class KuroshiMoeGallery extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Kuroshi's Corner</title>
            <meta property="og:title" content="Kuroshi&#39;s Corner" />
            <meta name="twitter:title" content="Kuroshi&#39;s Corner" />
            <meta name="description" content="I am Kuroshi. You may also know me as kode54, or Chris Moeller, or my real name, Christopher Snowhill. My character is a literal tuxedo cat, with a tuxedo fur pattern in black and white, with cuff forepaws, and shirt and buttons chest pattern. I came up with this idea for a character with the acquisition of two lovely tuxedo cats, who brighten up my family&rsquo;s daily life and have been with us since December of 2013."/>
            <meta property="og:description" content="I am Kuroshi. You may also know me as kode54, or Chris Moeller, or my real name, Christopher Snowhill. My character is a literal tuxedo cat, with a tuxedo fur pattern in black and white, with cuff forepaws, and shirt and buttons chest pattern. I came up with this idea for a character with the acquisition of two lovely tuxedo cats, who brighten up my family&rsquo;s daily life and have been with us since December of 2013."/>
            <meta name="twitter:description" content="I am Kuroshi. You may also know me as kode54, or Chris Moeller, or my real name, Christopher Snowhill. My character is a literal tuxedo cat, with a tuxedo fur pattern in black and white, with cuff …"/>
            <meta name="author" content="Kuroshi Catte"/>
            <link href='https://kuroshi.moe/images/favicon.ico' rel='icon' type='image/x-icon'/>
            <meta property="og:image" content="https://kuroshi.moe/images/touch-icon-144-precomposed.png" />
            <meta name="twitter:image" content="https://kuroshi.moe/images/touch-icon-144-precomposed.png" />
            <meta name="twitter:card" content="summary" />
            <meta property="og:url" content="https://kuroshi.moe/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Kuroshi&#39;s Corner" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}