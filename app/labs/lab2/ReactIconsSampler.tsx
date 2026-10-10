import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineSchool } from "react-icons/md";
import { GiRocket } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi2";
import { BsLightning } from "react-icons/bs";
export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdOutlineSchool className="text-4xl text-red-600" />
        <GiRocket className="text-4xl text-green-600" />
        <HiAcademicCap className="text-4xl text-blue-600" />
        <BsLightning className="text-4xl text-yellow-500" />
      </div>
    </div>
  );
}