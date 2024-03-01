export default function Input({
  name,
  type,
  value,
  handleChange,
  placeholder,
  error,
  pattern,
}) {
  const inputPattern = pattern ? pattern : null;
  return (
    <div className="mt-2 mb-6 rounded-[20px] relative">
      <input
        className="w-full rounded-[20px] p-2 border-solid border-2 border-sky-500"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        pattern={inputPattern}
        required
      />
      {error && (
        <span className="absolute text-rose-600 right-[10px] top-[9px]">
          {error}
        </span>
      )}
    </div>
  );
}
