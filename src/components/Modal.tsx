import { twJoin } from 'tailwind-merge'

export default function Modal({
  children,
  offModal
}: {
  children: React.ReactNode
  offModal: () => void
}) {
  return (
    <div
      className={twJoin(
        'modal',
        'fixed top-0 left-0 z-9',
        'h-[100vh] w-[100vw]',
        'flex items-center justify-center'
      )}>
      <div
        className="overlay absolute top-0 left-0 h-full w-full cursor-pointer bg-black/70"
        onClick={offModal}></div>
      <div className="content rounded-2.5 relative max-h-[calc(100%-100px)] w-[max-content] max-w-[700px] overflow-auto bg-white p-5 shadow-lg">
        {children}{' '}
      </div>
    </div>
  )
}
