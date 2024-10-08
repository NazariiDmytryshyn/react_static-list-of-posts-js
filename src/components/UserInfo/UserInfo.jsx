import './UserInfo.scss';

export const UserInfo = ({ user, emailOnly }) => {
  return emailOnly ? (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.email}
    </a>
  ) : (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
