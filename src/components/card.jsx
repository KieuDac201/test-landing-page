import React from 'react'

const Card = ({ cardData: { id, title, authorPic, date, heartNum, timeRead, authorName, tag } }) => {
  console.log(title);
  return (
    <div className="w-full p-4 rounded-2xl bg-white shadow-xl bg-opacity-50 animate-fadeTop" style={{ backdropFilter: "blur(20px)" }} key={id}>
      <div className="bg-yellow-100 px-2 leading-5 hover:bg-yellow-800 hover:text-white cursor-pointer transform transition-colors font-medium text-yellow-800 rounded-lg inline-block text-xs">{tag}</div>
      <h3 className="text-lg font-bold text-gray-600 mt-3">{title}</h3>
      <div className="flex items-center mt-4">
        <img className="h-9 w-9 rounded-full" src={authorPic} alt="" />
        <div className="ml-2">
          <h5 className="text-sm font-semibold">{authorName}</h5>
          <p className="text-xs text-gray-800">{date}</p>
        </div>
      </div>
      <div className="flex items-center mt-4 justify-between">
        <div className="text-red-500 bg-opacity-70 flex items-center px-2 py-1 leading-none bg-red-100 opacity-95 rounded-xl">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clipRule="evenodd"></path></svg>
          <p className="text-xs ml-1">{heartNum}</p>
        </div>
        <div className="flex items-center">
          <p className="text-xs text-gray-800 mr-3">{timeRead} min read</p>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default Card
