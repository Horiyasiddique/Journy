const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className="w-full flex flex-col space-y-2">
      {label && (
        <label className="text-sm font-medium tracking-wide">{label}</label>
      )}

      <div className="relative group">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
          className="
            w-full px-4 py-3 rounded-lg border outline-none
            transition-all duration-300 ease-in-out
            border-gray-300 placeholder:text-slate-500
            focus:border-amber-500 focus:ring-2 focus:ring-amber-200
            group-hover:shadow-md
          "
        />
      </div>
    </div>
  );
};

export default Input;
