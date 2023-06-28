import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function MyModal({visibleModal, setVisibleModal, match}) {
    const cancelButtonRef = useRef(null);

    return (
      <Transition.Root show={visibleModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setVisibleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>
  
          <div className="fixed inset-0 z-10">
            <div className="flex min-h-full justify-center items-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="mt-3 text-center sm:mt-0">
                        <Dialog.Title as="h3" className="font-syne font-semibold leading-6 text-[#2d0f38]">
                          Your forever friend is...
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-7 xl:aspect-w-7">
                              <img src={match.img} alt="Dog photo" className="h-full w-full object-cover object-center "/>
                          </div>
                          <h1 className="font-semibold text-[#800f74] font-syne text-lg mt-4 mb-2">{match.name} the {match.breed}</h1>
                        </div>
                      </div>
                    </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-lexend text-[#2d0f38] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setVisibleModal(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
};