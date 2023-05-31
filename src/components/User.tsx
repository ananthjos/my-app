import { UserDetail, Name } from "../utils/utils";

const User = ({ userDetail }: { userDetail: UserDetail }): JSX.Element => {
  // const { name, email }: { name: object; email: string } = userDetail;
  const name: Name = userDetail?.name;
  const email: string = userDetail?.email;

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
