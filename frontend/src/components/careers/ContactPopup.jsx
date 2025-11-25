import React, { useEffect, useState } from 'react';
import { CgMail } from "react-icons/cg";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const ContactPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 100);
  };

  return (
    <>
      {isVisible && (
        <div>
          <div className="fixed top-0 left-0 h-screen w-full blur-box z-[9999]"></div>
          <div className="fixed z-[99999] w-full h-full flex justify-center items-center">
            <div
              className={`modal-box fixed m-auto ${isClosing ? 'close' : ''}`}
            >
              <div className=" model-content flex flex-col w-full h-full p-2">
                <svg
                  className="svg-inline--fa fa-xmark text-[#c44040] w-[24px] h-[24px] text-2xl ml-auto cursor-pointer"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="xmark"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  onClick={handleClose}
                >
                  <path
                    fill="currentColor"
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  />
                </svg>
                <div className="flex flex-col p-6">
                  <p className="2xl:text-xl lg:text-lg text-base text-white font-medium">
                    If you need any help with job postings, internships,{' '}
                    <span className="text-[#44be25] font-semibold">OR</span> updates regarding your job application, please reach out to us.
                  </p>
                  <div className="mt-4 flex flex-col space-y-5">
                    <div className="flex space-x-[14px] items-start">
                      <CgMail className='text-[20px] text-[#44be25]'/>
                      <div>
                        <p className="2xl:text-xl lg:text-lg text-base font-semibold pb-2 text-[#44be25]">Email Us</p>
                        <p className="2xl:text-lg text-base pb-[6px] font-normal text-[#EDEDED] block">softwarechamber@gmail.com                        </p>
                        <p className="2xl:text-lg text-base pb-[19px] font-normal text-[#EDEDED] block">softwarechamber@gmail.com                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-[14px] items-start">
                      <LiaPhoneVolumeSolid className='text-[20px] text-[#44be25]'/>
                      <div className="flex flex-col gap-1 lg:gap-[5px]">
                        <p className="2xl:text-xl lg:text-lg text-base font-semibold pb-2 text-[#44be25]">Call HR</p>
                        <p className="2xl:text-lg text-base pb-[6px] font-normal text-[#EDEDED] block">+88 01830208833                        </p>
                        <p className="2xl:text-lg text-base pb-[6px] font-normal text-[#EDEDED] block">+88 01830208833                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;
