const ButtonBack = () => {
  const closeModal = () => {
    const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };
  return (
    <>
      <button className="absolute top-4 mt-5 left-4 flex items-center gap-2 text-white" onClick={closeModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>
    </>
  )
}

export default ButtonBack