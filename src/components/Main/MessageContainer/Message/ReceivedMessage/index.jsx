import React from 'react';
import styles from './received-message.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeleteMessageButton from '../DeleteMessageButton';

function ReceivedMessage(props) {
  const paramsId = useParams().id;

  const userdata = useSelector((state) =>
    state.contacts.contacts.find((contact) => contact._id === paramsId),
  );

  return (
    <div className={styles['received-messages']}>
      <div className={styles['contact-avatar']}>
        {userdata?.fullname.charAt(0)}
      </div>
      <div
        className={styles['received-message']}
        onClick={() => props.setIconDelete(!props.iconDelete)}
      >
        <div className={styles['received-message-text']}>
          {props.message.content}
        </div>
        <div className={styles['message-data']}>
          <div>
            {new Date(props.message.time).toLocaleTimeString().slice(0, -3)}
          </div>
          <DeleteMessageButton
            message={props.message}
            iconDelete={props.iconDelete}
            setIconDelete={props.setIconDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default ReceivedMessage;
