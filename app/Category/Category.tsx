import React from "react";
import styles from "./Category.module.css";
import clsx from 'clsx'

const Category = () => {
  return (
    <section className={styles.categorySection}>
      <div className={clsx(styles.categorySectionWrapper, styles.container)}>
        <div className={styles.categorySectionTitle}>
          <h3>Browse By Category</h3>
          <figure className={styles.categorySectionArrowsWrapper}>
            <img src="./Left-Arrow.svg" alt="left-arrow" />
            <img src="./Right-Arrow.svg" alt="right-arrow" />
          </figure>
        </div>
        <div className={styles.categoryCardsWrapper}>
          <div className={styles.categoryCard}>
            <img src="./Phones.svg" alt="Phones" />
            <p>Phones</p>
          </div>
          <div className={styles.categoryCard}>
            <img src="./Phones.svg" alt="Phones" />
            <p>Phones</p>
          </div>
          <div className={styles.categoryCard}>
            <img src="./Phones.svg" alt="Phones" />
            <p>Phones</p>
          </div>
          <div className={styles.categoryCard}>
            <img src="./Phones.svg" alt="Phones" />
            <p>Phones</p>
          </div>
          <div className={styles.categoryCard}>
            <img src="./Phones.svg" alt="Phones" />
            <p>Phones</p>
          </div>
          <div className={styles.categoryCard}>
            <img src="./Phones.svg" alt="Phones" />
            <p>Phones</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
