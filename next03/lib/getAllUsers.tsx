
export default async function getAllUsers() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return (
        <div>getAllUsers</div>
    )
}
