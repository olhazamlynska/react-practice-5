export const UsersList = () => {
  const users = [];
  return (
    <ul>
      {users.map(user => {
        return (
          <li>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button type="button">delete user</button>
            <button type="button">Update user</button>
          </li>
        );
      })}
    </ul>
  );
};
