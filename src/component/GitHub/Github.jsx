import { useLoaderData } from "react-router-dom"

export default function Github() {
    const data = useLoaderData()
    return (
        <div className="Github flex justify-center items-center h-[80vh]">
            <div className="center_div">
                <h1 className=" text-3xl mb-5">User Name : {data.followers}</h1>
                <img src={data.avatar_url} alt="git img" />
            </div>
        </div>
    )
}