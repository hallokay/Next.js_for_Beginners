
export default async function getUser(userId: string) {
    console.log('getude');

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    // if (!res.ok) throw new Error('실패했습니다.')
    // 사용자를 찾지 못했을 때 notFound를 사용하기 위해서
    if (!res.ok) return undefined

    return res.json();

}
