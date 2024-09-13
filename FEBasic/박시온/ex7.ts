const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

type CT = {
  postId: number;
  id: number;
  email: string;
  name?: string;
  body: string;
};
type PT = { userId: number; id: number; title: string; body: string };
type RT = { postId?: number; title?: string; comments?: CT[] };

export async function getPosts(userId: number | string): Promise<RT[]> {
  const userPostById: PT[] = await getFetch(`?userId=${userId}`);
  const commentNotName = (await Promise.all(
    userPostById.map((post) => getFetch(`/${post.id}/comments`))
  )) as CT[][];

  return commentNotName.map((cmtArr, idx) => {
    return {
      postId: userPostById[idx].id,
      title: userPostById[idx].title,
      comments: cmtArr.map(({ name, ...rest }) => rest),
    };
  });
}

const getFetch = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${POST_URL}${path}`);
  return res.json() as T;
};
