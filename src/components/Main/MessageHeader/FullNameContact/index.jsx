import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './fullname-contact.module.css';
import SpinnerContact from './SpinnerContact/SpinnerContact';

function FullNameContact() {
  const paramsId = useParams().id;

  const userdata = useSelector((state) =>
    state.contacts.contacts.find((contact) => contact._id === paramsId),
  );

  const loading = useSelector((state) => state.messages.loading);

  return (
    <div className={styles['contact-title']}>
      {loading ? (
        <SpinnerContact />
      ) : (
        <>
          {userdata?.fullname}
          {userdata?.online && <div className={styles.online}>{''}</div>}
        </>
      )}
    </div>
  );
}

export default FullNameContact;
