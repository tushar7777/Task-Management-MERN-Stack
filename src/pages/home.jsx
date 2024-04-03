import Sidebar from "../components/Home/Sidebar";

function Home() {
    return (
        <div className="flex h-[98vh] gap-2">
            <div className="flex flex-col justify-between border rounded-xl border-green-500 w-1/6 p-2">
                <Sidebar />
            </div>
            <div className="border rounded border-blue-600 w-5/6 p-2">World</div>
        </div>
    );
}

export default Home