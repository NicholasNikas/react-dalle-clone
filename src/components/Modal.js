import { useState, useRef } from 'react'

const Modal = ({ setModalOpen, setSelectedImage, selectedImage }) => {
  const [error, setError] = useState(null)
  const ref = useRef(null)

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
  }

  const checkSize = () => {
    console.log(ref.current.width)
    console.log(ref.current.height)
    if (ref.current.width == 256 && ref.current.height == 256) {
    } else {
      setError('Error: Choose 256x256 image')
    }
  }

  console.log(selectedImage)

  return (
    <div className='modal'>
      <div className='close-modal' onClick={closeModal}>
        ✘
      </div>
      <div className='img-container'>
        {selectedImage && (
          <img
            ref={ref}
            src={URL.createObjectURL(selectedImage)}
            alt='uploaded image'
          />
        )}
      </div>
      {error && <p>* Image must be 256 x 256</p>}
      {!error && <button onClick={checkSize}>Generate</button>}
      {error && <button onClick={closeModal}>Close this and try again</button>}
    </div>
  )
}

export default Modal
