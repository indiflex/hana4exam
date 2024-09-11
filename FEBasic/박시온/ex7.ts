// const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

// type CT = { postId: number; id: number; email: string; body: string };
// type PT = { userId: number; id: number; title: string; body: string };
// type RT = { postId?: number; title?: string; comments?: CT[] };
// export async function getPosts(userId: number | string): Promise<void> {
//   const result: RT[] = [];
//   const userPostById = await myFetch(`?userId=${userId}`);
//   for (const post of userPostById) {
//     const tmp: RT = {};
//     tmp.postId = post.id;
//     tmp.title = post.title;
//     tmp.comments = await myFetch(`/${post.id}/comments`);
//   }
// }

// const myFetch = async (path: string): Promise<PT[]> => {
//   const res = await fetch(`${POST_URL}${path}`);
//   const (await res.json()) as PT[];
// };

// getPosts(1);
// async function print() {
//   const ans = await myFetch('?userId=1');
// }
// print();
