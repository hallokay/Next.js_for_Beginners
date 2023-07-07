

export default async function getUserPosts(userId: string) {


    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } })
    // if (!res.ok) throw new Error('실패했습니다.')
    if (!res.ok) return undefined


    return res.json();


}
