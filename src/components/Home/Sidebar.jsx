import { sidebarList } from "../../constant/data"

const Sidebar = () => {
    const data = sidebarList
    return (
        <>
            <div>
                <h1 className="text-xl font-bold">DashJob</h1>
                <h6 className="mb-2 text-green-500">Professional Dashboard</h6>
                <hr />
            </div>
            <div>
                {
                    data.map(item => (
                        <>
                            <div className="my-2 flex items-center gap-2 hover:bg-gray-300 p-2 rounded transition-all duration-300">
                                {item.icons} {item.title}
                            </div>
                        </>
                    ))
                }
            </div>
            <div>
                <button className="bg-red-500 w-full rounded border border-white-100 p-1">
                    Logout
                </button>
            </div>
        </>
    )
}
export default Sidebar