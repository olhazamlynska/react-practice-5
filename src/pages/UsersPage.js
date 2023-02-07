import { AddUserForm } from 'components/AddUserForm/AddUserForm';
import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UsersList';
import { useState } from 'react';
export const UsersPage = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);

  const showUsers = () => {
    setIsListShown(true);
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
        text={isListShown ? 'Hide Users' : 'Show Users'}
        clickHandler={showUsers}
      />
      {isListShown && (
        <>
          <UsersList />
          <Button text="Add user" clickHandler={openForm} />
        </>
      )}
      {isFormShown && <AddUserForm closeForm={closeForm} />}
    </>
  );
};
