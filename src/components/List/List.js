import PropTypes from 'prop-types';
import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

class List extends React.Component {
 

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
    addColumn: PropTypes.func,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  
  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => addColumn(title)}/>
        </div>
      </section>
    );
  }
}

export default List;