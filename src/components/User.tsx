import { UserDetail, Name } from "../utils/utils";

const User = ({ userDetail }: { userDetail: UserDetail }): JSX.Element => {
  // const { name, email }: { name: object; email: string } = userDetail;
  const name: Name = userDetail?.name;
  const email: string = userDetail?.email;

  return (
    <div className='pb-2'>
      <div
        className='card card-border'
        style={{ width: "18rem", height: "300px", padding: "10px" }}
      >
        <div className='icon-container'>
          <i className='fa-solid fa-user fa-2xl circle-icon'></i>
        </div>

        <div className='card-body text-center'>
          <h6>{name?.title + " " + name?.first + " " + name?.last}</h6>
          <h6>{email}</h6>
        </div>
      </div>
    </div>
  );
};

export default User;
