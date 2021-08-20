import React, { useState } from 'react'
import { css, cx } from '@emotion/css'
import Modal from '../Modal'

const Example2 = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }

  const onCloseModal = () => {
    setIsOpenModal(false)
  }

  const onDelete = () => {
    setIsOpenModal(false)
  }

  return (
    <div>
      <button className={cx(buttonStyle2)} onClick={openModal}>
        모달 열기(버튼 두 개)
      </button>
      {isOpenModal && (
        <Modal
          message="정말 삭제하시겠습니까?"
          closingButtonText="닫기"
          onClose={onCloseModal}
          handleButtonText="삭제"
          onHandle={onDelete}
        />
      )}
    </div>
  )
}

const buttonStyle2 = css`
  border-radius: 4px;
  border: 1.5px solid #000000;
  padding: 1rem;
`

export default Example2
