import React, { useState } from 'react'
import { css, cx } from '@emotion/css'
import Modal from '../Modal'

const Example1 = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }

  const onCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <div>
      <button className={cx(buttonStyle1)} onClick={openModal}>
        모달 열기(닫기 버튼 하나)
      </button>
      {isOpenModal && (
        <Modal
          message="모달입니다."
          closingButtonText="닫기"
          onClose={onCloseModal}
        />
      )}
    </div>
  )
}

const buttonStyle1 = css`
  border-radius: 4px;
  border: 1.5px solid #000000;
  padding: 1rem;
`

export default Example1
