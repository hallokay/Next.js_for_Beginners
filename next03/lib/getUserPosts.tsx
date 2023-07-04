

export default async function getUserPosts(userId: string) {
    console.log('error');

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if (!res.ok) throw new Error('실패했습니다.')

    return res.json();


}
