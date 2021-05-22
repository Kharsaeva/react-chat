import React from 'react';
import styles from './sidebar.module.css';
import SearchContacts from './SearchContacts/SearchContacts';
import Contacts from './Contacts/Contacts';

function Sidebar() {
  return (
    <div className={styles.contacts}>
      <SearchContacts />
      <Contacts />
    </div>
  );
}

export default Sidebar;
