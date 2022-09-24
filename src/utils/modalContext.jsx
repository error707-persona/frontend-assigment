import React, {useRef} from 'react'


const modalContext = () => {
    const modal_container = useRef(null);
  const onHandleOpen = () => {
    modal_container.current.classList.add("show");
  }
  const OnHandleClose = () => {
    modal_container.current.classList.remove("show");
  }
  return (
    <div>modalContext</div>
  )
}

export default modalContext