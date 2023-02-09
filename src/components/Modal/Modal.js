import { useDispatch } from 'react-redux';
import { deleteUserById } from 'redux/users/usersOperations';
import { ModalBachground, ModalWprapper, Text } from './Modal.styled';

export const Modal = ({ closeModal, userId }) => {
  const dispatch = useDispatch();

  const confirmDeleteUser = () => {
    dispatch(deleteUserById(userId));
    closeModal();
  };

  return (
    <ModalBachground>
      <ModalWprapper>
        <Text>Are you sure to delete user?</Text>
        <button type="button" onClick={confirmDeleteUser}>
          Yes
        </button>
        <button type="button" onClick={() => closeModal()}>
          No
        </button>
      </ModalWprapper>
    </ModalBachground>
  );
};
