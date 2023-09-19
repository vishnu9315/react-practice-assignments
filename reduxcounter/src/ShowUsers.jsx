const ShowUsers = ({ users }) => {
  return (
    <div className="container">
      <li key={users.id}>{users.first_name}</li>
    </div>
  );
};

export default ShowUsers;
