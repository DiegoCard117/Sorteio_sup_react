import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonTop(props: ButtonProps) {
  return (
    <button id="btn" {...props}/>
  )
}

export function Button(props: ButtonProps) {
  return (
    <button className="btn-blue"{...props}/>
  )
}

