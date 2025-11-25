import React from 'react'

const Subscribe = () => {
    return (
        <div>
            <form className="w-full flex justify-center items-center px-3 sm:px-5 md:px-0">
                <div className="w-full lg:w-[80%] space-y-1.5 flex flex-col justify-start">
                    <label className="text-lg text-gray-300 text-left">Email Address<span className="text-[#ff0000]">*</span></label>

                    <div className="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-6">
                        <div className="text-input w-full" type="email" modelmodifiers="[object Object]" >
                            <div className="flex space-x-4 items-center inputWrapper">
                                <div className="w-full">
                                    {/* <!----> */}
                                    <input id="email" className="placeholder-gray-200 bg-transparent text-gray-300 placeholder-opacity-50 p-4 rounded-lg shadow-3xl border border-teal-400 w-full" type="email" name="" placeholder="Write your email address" />
                                </div>
                            </div>
                            {/* <!----> */}
                        </div>

                        <div className="flex md:justify-start justify-center items-start">
                            <button className="flex justify-center items-center relative h-14 px-6 md:px-15 bg-teal-400 text-[#1A1139] rounded-md font-bold text-xl" type="submit">
                                <span>Subscribe</span>
                                {/* <!----> */}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Subscribe