import React from 'react';
import { CategoryNav } from '../CategoryNav/CategoryNav';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { HeaderBackground } from '../HeaderBackground/HeaderBackground';
import styles from './MainWrapper.module.scss';
import { Main } from '../Main/Main';
import PropTypes from 'prop-types';

export const MainWrapper = (props) => {
  document.title = props.title;
    
  if (props.description) {
      document
          .querySelector('meta[name="description"]')
          .setAttribute("content", props.description);
  }

  return (
    <div className={styles.WrapThisBitch}>
      <section className={styles.MainWrapper}>
        <Header></Header>

        <HeaderBackground></HeaderBackground>
        
        <CategoryNav></CategoryNav>
        
      </section>
      <Main>
        <h1>{props.title}</h1>
        <div>{props.children}</div>
      </Main>
      <Footer></Footer>
    </div>
  );
};

MainWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};