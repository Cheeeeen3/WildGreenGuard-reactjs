import React from 'react'
import { LoginProps } from './LogoWithTitle.tsx'

const ThematicBreak: React.FC<LoginProps> = ( { isLogin })=> {
  return (
    <div className="inline-flex items-center justify-center w-full">
    <hr className="w-5/6 sm:w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <span className="absolute px-3 text-sm text-slate-400 -translate-x-1/2 bg-slate-50 left-1/2 dark:text-white dark:bg-gray-900">
      {isLogin ? "or Log in with Google" : "or Sign up with Google"}
    </span>
  </div>
  )
}

export default ThematicBreak;