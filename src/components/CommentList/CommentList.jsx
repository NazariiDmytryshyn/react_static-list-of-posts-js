import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments, user }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} user={user} />
    ))}
  </div>
);
