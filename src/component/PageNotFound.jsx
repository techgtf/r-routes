import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="PageNotFound flex justify-center items-center h-[80vh]">
            <div className="ceterd_div">
                <h1 className=" text-3xl uppercase mb-5">Page Not Found</h1>
                <Link to={'/'} className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Back To Home</Link>
            </div>
        </div>
    )
}
export default PageNotFound;