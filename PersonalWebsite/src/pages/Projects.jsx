import React, {useState} from "react";
import Logo from "../assets/projects.webp";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Modal from "../components/Modal";
import data from "../data/projects/data.json";

const Projects = () => {
  const [openModal, setOpenModal] = useState("");
  const [showMore, setShowMore] = useState(false); 

  return (
    <section className="mt-[320px] px-10 lg:px-20 2xl:px-40" id="projects">
      <h2 className="text-white text-7xl font-normal leading-[70px] mb-10">
        Projects
      </h2>
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-col flex-1 2xl:max-w-[45%]">
          <h4>
            I have been coding for 5 years and I succesfully developed two businesses.
          </h4>
          <ul className="mt-5">
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id0")}>
                <h4>
                  {data.id0?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id1")}>
                <h4>
                  {data.id1?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id2")}>
                <h4>
                  {data.id2?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id3")}>
                <h4>
                  {data.id3?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id4")}>
                <h4>
                  {data.id4?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
          </ul>
          <ul className={showMore ? "" : "hidden"} id="hiddenprojects">
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id5")}>
                <h4>
                  {data.id1?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id6")}>
                <h4>
                  {data.id1?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
          </ul>
          {showMore || ( 
            <button
              className="text-white text-lg leading-8 hover:text-primary transition ease-in md:block border border-secondary rounded-full px-8 py-4 hover:bg-secondary self-start mt-5"
              id="showmorebutton"
              onClick={() => setShowMore(true)}
            >
              Show more projects
            </button>
          )}
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img src={Logo} alt="Logo" className="h-[660px]" />
        </div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal}/>
    </section>
  );
};

export default Projects;
