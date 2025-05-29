'use client'
import { useState } from 'react'
import ConfigModal from './ConfigModal'

const CookieConsent = () => {
  const responsiveWrapperStyles = [
    'w-full p-4',
    'md:px-6 md:py-4',
    'lg:px-12 lg:py-6'
  ].join(' ')

  const responsiveButtonStyles = [
    'flex-col-reverse gap-2',
    'md:flex-row md:justify-between md:items-center',
    'lg:flex-row lg:justify-between lg:items-center'
  ].join(' ')

  const [modalVisible, setModalVisible] = useState(false)

  function handleModalOpen() {
    setModalVisible(true)
  }

  function handleModalClose() {
    setModalVisible(false)
  }

  return (
    <>
      <div
        className={`${responsiveWrapperStyles} fixed bottom-0 flex flex-col justify-center gap-6 self-stretch bg-white  border-t border-solid border-neutral-200`}
      >
        <div className='flex flex-col justify-center gap-1 self-stretch'>
          <span className='font-semibold text-base text-neutral-900'>
            We use cookies
          </span>
          <span className='font-normal text-sm'>
            We use cookies to enhance your browsing experience and improve our
            website's performance. By continuing to use this site, you consent
            to the use of cookies. To learn more about how we use cookies and
            your options, please read our&nbsp;
            <a href='#' className='text-blue-600'>
              cookie policy
            </a>
            .
          </span>
        </div>

        <div className={`flex ${responsiveButtonStyles} self-stretch`}>
          <div className='flex justify-center items-center gap-2 bg-red-600 px-3.5 py-2.5 rounded'>
            <div className='flex justify-center items-center px-0.5'>
              <span className='font-medium text-sm text-white'>
                Decline all
              </span>
            </div>
          </div>
          <div className='flex flex-col justify-center gap-2 md:gap-4 lg:gap-4 md:flex-row lg:flex-row lg:w-96 self-stretch'>
            <div className='flex justify-center items-center gap-1.5 grow bg-indigo-700 px-4 py-2.5 rounded  self-stretch'>
              <div className='flex justify-center items-center px-0.5'>
                <span className='font-medium text-base text-white'>
                  Allow cookies
                </span>
              </div>
            </div>
            <div
              className='flex justify-center items-center gap-1.5 grow bg-white px-4 py-2.5 rounded border-[0.5px] border-solid border-neutral-200  self-stretch'
              onClick={handleModalOpen}
            >
              <div className='flex justify-center items-center px-0.5'>
                <span className='font-medium text-base text-neutral-900'>
                  Manage cookies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfigModal visible={modalVisible} onClose={handleModalClose} />
    </>
  )
}

export default CookieConsent
