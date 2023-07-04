import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link';
export const metadata: Metadata = {
    title: "Users",
}

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;

    const content = (
        <section>
            <h2>
                <Link href='/'>홈으로..</Link>
            </h2>
            <br />
            {users.map(user => {
                return (
                    <>
                        <ul>
                            <li key={user.id}>

                                <Link href={`/users/${user.id}`}>
                                    {user.name}
                                </Link>
                            </li>
                        </ul>
                    </>
                )
            })}
        </section>
    )

    return content
}
