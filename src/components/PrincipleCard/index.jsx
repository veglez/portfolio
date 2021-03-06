import React from 'react';
import styles from './styles.module.scss';

const PrincipleCard = (props) => {
  const { icon, title, description } = props;

  return (
    <article className={styles.container}>
      <span className={styles.icon__weaooer}>
        {React.createElement(icon, { className: styles.icon })}
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default PrincipleCard;
