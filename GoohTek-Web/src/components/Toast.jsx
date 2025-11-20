import { useEffect } from "react";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    error: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  const styles = {
    success: "bg-gradient-to-r from-green-500 to-emerald-600 border-green-400",
    error: "bg-gradient-to-r from-red-500 to-rose-600 border-red-400",
  };

  return (
    <div
      className={`
        fixed top-6 right-6 z-[9999]
        ${styles[type]}
        border-2 rounded-2xl
        px-6 py-4
        shadow-2xl
        backdrop-blur-xl
        min-w-[320px] max-w-md
        animate-slide-in-right
        flex items-center gap-4
        text-white font-semibold
      `}
    >
      <div className="flex-shrink-0 animate-bounce-in">{icons[type]}</div>
      <p className="flex-1 text-lg">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 hover:scale-110 transition-transform opacity-80 hover:opacity-100 text-white bg-transparent p-1"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
