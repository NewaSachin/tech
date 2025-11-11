// import { useState, useEffect } from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'
// import { Outlet } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { loadTheme } from '../features/themeSlice'
// import { Loader2Icon } from 'lucide-react'

// const Layout = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//     const { loading } = useSelector((state) => state.workspace)
//     const dispatch = useDispatch()

//     // Initial load of theme
//     useEffect(() => {
//         dispatch(loadTheme())
//     }, [])

//     if (loading) return (
//         <div className='flex items-center justify-center h-screen bg-white dark:bg-zinc-950'>
//             <Loader2Icon className="size-7 text-blue-500 animate-spin" />
//         </div>
//     )

//     return (
//         <div className="flex bg-white dark:bg-zinc-950 text-gray-900 dark:text-slate-100">
//             <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//             <div className="flex-1 flex flex-col h-screen">
//                 <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//                 <div className="flex-1 h-full p-6 xl:p-10 xl:px-16 overflow-y-scroll">
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Layout

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../pages/Footer"; // ✅ import footer from components
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadTheme } from "../features/themeSlice";
import { Loader2Icon } from "lucide-react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { loading } = useSelector((state) => state.workspace);
  const dispatch = useDispatch();

  // Initial load of theme
  useEffect(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-zinc-950">
        <Loader2Icon className="size-7 text-blue-500 animate-spin" />
      </div>
    );

  return (
    <div className="flex bg-white dark:bg-zinc-950 text-gray-900 dark:text-slate-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen relative">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Page content */}
        <div className="flex-1 p-6 xl:p-10 xl:px-16 overflow-y-auto">
          <Outlet />
        </div>

        {/* ✅ Full-width footer (absolute positioning trick) */}
        <div className="w-screen -ml-[calc(100vw-100%)]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
