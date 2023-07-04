
export default async function getAllUsers() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!res.ok) throw new Error('데이터 패치를 실패했습니다.');

    return res.json();
}
