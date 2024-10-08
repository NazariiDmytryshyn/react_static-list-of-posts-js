import { PostInfo } from '../PostInfo/PostInfo';

import postsFromServer from '../../api/posts.json';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

// const postsWithUserAndComments = [
//   {
//     id: 1,
//     userId: 1,
//     title: 'some title',
//     body: 'some body',
//     user: {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//     },
//     comments: [
//       {
//         postId: 1,
//         id: 1,
//         name: 'id labore ex et quam laborum',
//         email: 'Eliseo@gardner.biz',
//         body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
//       },
//       {
//         postId: 1,
//         id: 2,
//         name: 'quo vero reiciendis velit similique earum',
//         email: 'Jayne_Kuhic@sydney.com',
//         body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
//       },
//     ],
//   },
// ];

export const PostList = () => {
  const postsWithUserAndComments = postsFromServer.map(post => {
    const author = usersFromServer.find(user => user.id === post.userId);
    const comments = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    return {
      ...post,
      user: author,
      comments,
    };
  });

  return (
    <div className="PostList">
      {postsWithUserAndComments.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
