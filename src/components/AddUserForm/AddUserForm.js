export const AddUserForm = ({ closeForm }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
    };

    console.log(newUser);

    closeForm();
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};
