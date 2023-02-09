import { AddUserForm } from 'components/AddUserForm/AddUserForm';
import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UsersList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/users/usersOperations';

export const UsersPage = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  const dispatch = useDispatch();

  // const showUsers = () => {
  //   setIsListShown(prevState => !prevState);
  //   if (isListShown) {
  //     dispatch(fetchUsers());
  //   }
  // };

  const showUsers = () => {
    setIsListShown(true);

    dispatch(fetchUsers());
  };

  const openForm = () => {
    setIsFormShown(true);
  };

  const closeForm = () => {
    setIsFormShown(false);
  };

  return (
    <>
      <Button
        // text={isListShown ? 'Hide Users' : 'Show Users'}
        text={'Show Users'}
        clickHandler={showUsers}
      />
      {isFormShown && <AddUserForm closeForm={closeForm} />}
      {isListShown && (
        <>
          <Button text="Add user" clickHandler={openForm} />
          <UsersList />
        </>
      )}
    </>
  );
};
