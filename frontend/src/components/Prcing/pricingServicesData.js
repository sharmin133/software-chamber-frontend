import {
  FaTools,
  FaHandshake,
  FaLifeRing,
  FaUserTie,
  FaChartLine,
  FaEllipsisH,
  FaRocket,
  FaExchangeAlt,
  FaComments,
  FaStar,
  FaDollarSign,
  FaCogs,
  FaBalanceScale,
} from "react-icons/fa";

import { MdSpeed, MdOutlineHighQuality, MdOutlineReplay, MdOutlineSchedule, MdOutlineSpeed } from "react-icons/md";
import { BiGitMerge } from "react-icons/bi";



// Engagement Services
export const engagementServices = () => [
  { id: 1, title: "Quick Fix", icon: <FaTools className="text-teal-400 text-2xl" /> },
  { id: 2, title: "Long-term Partnership", icon: <FaHandshake className="text-teal-400 text-2xl" /> },
  { id: 3, title: "Support", icon: <FaLifeRing className="text-teal-400 text-2xl" /> },
  { id: 4, title: "Consulting", icon: <FaUserTie className="text-teal-400 text-2xl" /> },
  { id: 5, title: "Short-term Improvements", icon: <FaChartLine className="text-teal-400 text-2xl" /> },
  { id: 6, title: "Others", icon: <FaEllipsisH className="text-teal-400 text-2xl" /> },
];


//  Development Priorities
export const developmentServices = () => [
  { id: 1, title: "Speed of Development", icon: <MdSpeed className="text-teal-400 text-2xl" /> },
  { id: 2, title: "Scalability", icon: <FaRocket className="text-teal-400 text-2xl" /> },
  { id: 3, title: "Process Transparency", icon: <BiGitMerge className="text-teal-400 text-2xl" /> },
  { id: 4, title: "Communication", icon: <FaComments className="text-teal-400 text-2xl" /> },
  { id: 5, title: "Quality of Features", icon: <MdOutlineHighQuality className="text-teal-400 text-2xl" /> },
  { id: 6, title: "Cost-effectiveness", icon: <FaDollarSign className="text-teal-400 text-2xl" /> },
];


//  Budget Options
export const budgetServices = () => [
  { id: 1, icon: <FaBalanceScale className="text-teal-400 text-2xl" />, amount: "Under $50,000" },
  { id: 2, icon: <FaCogs className="text-teal-400 text-2xl" />, amount: "$100,000 - $150,000" },
  { id: 3, icon: <FaChartLine className="text-teal-400 text-2xl" />, amount: "$50,000 - $100,000" },
  { id: 4, icon: <FaStar className="text-teal-400 text-2xl" />, amount: "Over $150,000" },
];


export const startOptions = () => [
  {
    id: 1,
    icon: <MdOutlineSpeed size={24} className="text-teal-500" />,
    title: 'Urgent',
    desc: '(as soon as possible)'
  },
  {
    id: 2,
    icon: <MdOutlineSchedule size={24} className="text-teal-500" />,
    title: 'Standard Need',
    desc: '(within 1 to 3 months)'
  },
  {
    id: 3,
    icon: <MdOutlineReplay size={24} className="text-teal-500" />,
    title: 'No Hurry',
    desc: '(from 3 months)'
  }
];