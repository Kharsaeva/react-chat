import React from 'react';
import styles from './send-message-form.module.css';
import MessageButtons from './MessageButtons';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, changeText } from '../../../redux/ducks/messages';

function SendMessageForm(props) {
  const profileId = useSelector((state) => state.application._id);
  const newMessage = useSelector((state) => state.messages.newMessage);

  const contactId = useParams().id;

  const dispatch = useDispatch();

  const handleText = (e) => {
    dispatch(changeText(e.target.value));
  };

  const handleAddMessage = () => {
    dispatch(addMessage(profileId, contactId, newMessage));
  };

  return (
    <div className={styles['message-form']}>
      <div className={styles['inner-message-form']}>
        <form>
          <input
            className={styles['message-text']}
            size="130"
            placeholder="Write a message"
            type="text"
            value={newMessage}
            onChange={handleText}
          />
        </form>
        <MessageButtons
          handleAddMessage={handleAddMessage}
          newMessage={newMessage}
        />
      </div>
    </div>
  );
}
export default SendMessageForm;
