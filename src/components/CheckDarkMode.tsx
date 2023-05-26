export const CheckDarkMode = () => {
  return (
    <label className="w-12 h-7 relative cursor-pointer" htmlFor="">
      <input type="checkbox" checked />
      <span className="absolute inset-0 bg-clr-primary rounded-full slider-dark"></span>
    </label>
  );
};
