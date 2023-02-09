import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from 'redux/users/usersSelectors';

export const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const [userId, setUserId] = useState(null);

  const openModal = id => {
    setUserId(id);
  };

  const closeModal = () => {
    setUserId(null);
  };

  return (
    <>
      <ul>
        {users.map(({ id, name, email }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <p>{email}</p>
              <button type="button">Update user</button>
              <button type="button" onClick={() => openModal(id)}>
                Delete user
              </button>
            </li>
          );
        })}
      </ul>
      {userId && <Modal closeModal={closeModal} userId={userId} />}
    </>
  );
};
