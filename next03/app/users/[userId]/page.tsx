import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import UserPosts from "./components/UserPosts";
import { Suspense } from "react";
import type { Metadata } from "next";
type Params = {
    params: {
        userId: string
    }
}

// 다이나믹 메타데이터 만드는 법

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId);

    const user: User = await userData;

    return {
        title: `${user.name}`,
        description: `이것은 ${user.name}의 페이지 입니다.`
    }
}

export default async function UserPage({ params: { userId } }: Params) {
    //단일 데이터를 받아올 때는 []없고 단일 데이터가 아니면 []
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);

    const user = await userData;
    const posts = await userPostsData;

    //한번에 데이터를 받아올 때 all사용 
    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    return (
        <>
            <h2>{user.name}</h2>

            <br />

            <Suspense fallback={<h2>Loading...</h2>}>

                <UserPosts promise={userPostsData} />
            </Suspense>

        </>
    )
}
