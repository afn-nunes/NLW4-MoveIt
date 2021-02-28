import '../styles/global.css'
import { ChallengesProvider} from '../context/ChallengeContext'
import React, { useState } from 'react';
import { CountdownProvider } from '../context/CountdownContext';

function MyApp({ Component, pageProps }) {
  return(
    <Component {...pageProps} />
  )
}

export default MyApp
