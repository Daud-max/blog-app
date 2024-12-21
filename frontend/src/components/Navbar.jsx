import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
function Navbar() {
  const { blogs } = useAuth();
  const [show, setShow] = useState(false);
  console.log(blogs);

  return (
    <>
      <nav className="shadow-lg px-4 py-3">
        <div className="flex items-center justify-between container mx-auto">
          <div className="font-semibold">
            cili <span className="text-blue-500"> Blog</span>
          </div>
          {/* desktop */}
          <div className="mx-6">
            <ul className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-500">
                HOME
              </Link>
              <Link to="/blogs" className="hover:text-blue-500">
                BLOGS
              </Link>
              <Link to="/creators" className="hover:text-blue-500">
                CREATORS
              </Link>
              <Link to="/about" className="hover:text-blue-500">
                ABOUT
              </Link>
              <Link to="/contact" className="hover:text-blue-500">
                CONTACT
              </Link>
            </ul>
            <div className="md:hidden" onClick={() => setShow(!show)}>
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu />}
            </div>
          </div>
          <div className="space-x-2 hidden md:flex">
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white font-semibold hover:bg-blue-900 duration-300 px-4 py-2 rounded"
            >
              DASHBOARD
            </Link>
            <Link
              to="/login"
              className="bg-red-600 text-white font-semibold hover:bg-red-900 duration-300 px-4 py-2 rounded"
            >
              LOGIN
            </Link>
          </div>
        </div>
        {/* mobile Navbar */}
        {show && (
          <div className="bg-white">
            <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
              <Link to="/" onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className="hover:text-blue-500">
                HOME
              </Link>
              <Link to="/blogs" onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className="hover:text-blue-500">
                BLOGS
              </Link>
              <Link to="/creators" onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className="hover:text-blue-500">
                CREATORS
              </Link>
              <Link to="/about" onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className="hover:text-blue-500">
                ABOUT
              </Link>
              <Link to="/contact" onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className="hover:text-blue-500">
                CONTACT
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
export default Navbar;
