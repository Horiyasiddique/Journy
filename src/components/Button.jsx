const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-xl font-semibold tracking-wide
        bg-gradient-to-r from-amber-300 to-rose-300
        text-white shadow-md
        hover:shadow-xl hover:scale-105
        active:scale-95
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-rose-200
        cursor-pointer
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
