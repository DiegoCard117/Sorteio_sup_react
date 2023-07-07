type ButtonProps = {
  text?: string;
}

export function ButtonTop(props: ButtonProps) {
  return (
    <button id="btn">{props.text}</button>
  )
}

export function Button(props: ButtonProps) {
  return (
    <button className="btn-blue">{props.text}</button>
  )
}

