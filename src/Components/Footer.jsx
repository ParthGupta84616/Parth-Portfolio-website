import React from 'react'
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://github.com/ParthGupta84616" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 hover:scale-110 transition-all duration-700" size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/parth-guptaji/" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedIn} className="w-5 hover:scale-110 transition-all duration-700" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a a href="mailto:parthguptaji20.com" target="_blank" rel="noopener noreferrer">
                  <SiGmail className="w-5 hover:scale-110 transition-all duration-700" size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default Footer