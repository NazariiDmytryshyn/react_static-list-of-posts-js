export const CommentInfo = ({ comment, user }) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>
        {user && (
          <>
            {' by '}
            <a className="CommentInfo__email" href={`mailto:${user.email}`}>
              {user.email}
            </a>
          </>
        )}
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};
