import React from 'react';
import styles from './main.module.css';

function MessageHeader (props) {
  return (
    <div className={styles['message-header']}>
      <div className={styles['search-chat']}>
        <i className="fas fa-search">{''}</i>
      </div>
      <div className={styles['contact-title']}>
        Кудузов Ахмад
      </div>
      <div className={styles['chat-settings']}>
        <i className="fas fa-cog">{''}</i>
      </div>
    </div>
  );
}

export default MessageHeader;