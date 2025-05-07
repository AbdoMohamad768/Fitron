export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 z-98 h-screen w-screen bg-[#eeeeee90] blur-2xl"
      ></div>
      <div className="fixed z-200 top-1/2 left-1/2 -translate-1/2">
        {children}
      </div>
    </>
  );
}
