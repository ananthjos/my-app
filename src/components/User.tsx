const User = ({ userDetail }) => {
  const { name, email } = userDetail;

  return (
    <div>
      <h4>Full Name</h4>
      <h4>{name?.title + " " + name?.first + " " + name?.last}</h4>
      <h4>Email </h4>
      <h4>{email}</h4>
    </div>
  );
};

export default User;
