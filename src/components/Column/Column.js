import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';


class Column extends React.Component {
 
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
  };

  static defaultProps = {
    icon: settings.defaultListDescription,
  };


  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}>
          <Icon name={icon}/></span>{title}</h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData} {...cardData} />
          ))}
        </div>
        
      </section>
    );
  }
}


export default Column; 