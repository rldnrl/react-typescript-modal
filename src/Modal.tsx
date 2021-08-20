import React, { useEffect } from 'react'
import { css, cx } from '@emotion/css'

type Props = {
  message?: string;
  closingButtonText?: string;
  onClose?: () => void
  handleButtonText?: string;
  onHandle?: () => void;
}

const Modal = ({
  message,
  closingButtonText,
  onClose,
  handleButtonText,
  onHandle
}: Readonly<Props>) => {

  // scroll 없애기
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])

  return (
    <div className={cx("modal-container", modalStyle)}>
      <div className={cx("modal-contents", modalContentsStyle)}>
        <div className={cx("modal-message", modalMessageStyle)}>
          {message}
        </div>
        <div className={cx("modal-button-container", modalButtonsContainerStyle)}>
          <button
            className={cx("modal-close-button", modalButtonStyle)}
            onClick={onClose}
          >
            {closingButtonText}
          </button>
          {handleButtonText && (
            <button
              className={cx("modal-handle-button", modalButtonStyle)}
              onClick={onHandle}
            >
              {handleButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const modalStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  line-height: 22px;
  text-align: center;
  z-index: 99;
`

const modalContentsStyle = css`
  width: "288px";
  height: "168px";
  padding: 1.5rem;
  background-color: #ffffff;
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 700;
`

const modalMessageStyle = css`
  height: 64px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
`

const modalButtonsContainerStyle = css`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
`

const modalButtonStyle = css`
  padding: 1rem 0.25rem;
  background-color: #ffffff;
`

export default Modal
