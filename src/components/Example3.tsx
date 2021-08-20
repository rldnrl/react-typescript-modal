import React, { useState } from 'react'
import { css, cx } from '@emotion/css'
import Modal from '../Modal'

const message = `줄바꿈 처리가 되는 모달입니다.\n안녕하세요?`

const Example3 = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }

  const onCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <div>
      <button className={cx(buttonStyle3)} onClick={openModal}>
        모달 열기(여러 줄 모달)
      </button>
      {isOpenModal && (
        <Modal
          message={message}
          closingButtonText="닫기"
          onClose={onCloseModal}
        />
      )}
    </div>
  )
}

const buttonStyle3 = css`
  border-radius: 4px;
  border: 1.5px solid #000000;
  padding: 1rem;
`

export default Example3
