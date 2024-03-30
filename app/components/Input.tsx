import { HTMLProps } from "react";

export const Input = (props: HTMLProps<HTMLInputElement>) => {
  return (
    <input {...props} className={`w-full h-12 px-4 text-lg text-gray-800 bg-white border border-gray-300 rounded-lg shadow-inner focus:border-blue-700 outline-none transition-all ${props.className}`} />
  )
}