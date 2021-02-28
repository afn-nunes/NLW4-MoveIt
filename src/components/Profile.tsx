import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengeContext';
import styles from '../styles/components/Profile.module.css';
export function Profile(){
  const {level} = useContext(ChallengesContext);
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/39346584?s=400&u=5e8741ea8ec29419a9df3d0e2c2db6fbc940e6e3&v=4" alt=""/>
      <div>
        <strong>  André Ferreira Nunes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}