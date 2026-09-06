import React from 'react'

const Button = ({ text = "View more", onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex items-center justify-center gap-3 border border-current bg-transparent px-8 py-3 text-sm font-light text-inherit tracking-wide transition-all duration-300 hover:bg-current/10 active:scale-[0.98] focus:outline-none"
    >
      <span>{text}</span>
      <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 select-none pointer-events-none">
        <span className="font-normal text-2xl leading-none select-none">&gt;</span>
      </div>
    </button>
  )
}

export default Button
