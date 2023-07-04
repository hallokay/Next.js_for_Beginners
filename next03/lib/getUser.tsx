
export default async function getUser(userId: string) {
    console.log('getude');

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!res.ok) throw new Error('실패했습니다.')

    return res.json();

}
