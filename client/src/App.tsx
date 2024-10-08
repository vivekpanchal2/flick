import "./App.css";
import FeedCard from "./components/FeedCard";
import SideBar from "./components/SideBar";
import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-3 md:col-span-2 lg:col-span-2 p-1 flex flex-col items-start">
        <SideBar />
      </div>

      <div className="col-span-9 md:col-span-10 lg:col-span-6 border-r border-l border-gray-300 h-screen overflow-y-auto">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>

      <div className="hidden md:block col-span-3 p-5 h-screen">
        <GoogleLogin onSuccess={(cred) => console.log(cred)} />
      </div>
    </div>
  );
}

export default App;
