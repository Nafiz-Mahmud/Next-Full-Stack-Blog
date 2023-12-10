export default function ThemeToogle() {
  const theme = "lighta";
  return (
    <div>
      {theme === "light" ? (
        <>
          <button className="text-white bg-black py-[.25rem] px-[.5rem] rounded-md">
            Dark
          </button>
        </>
      ) : (
        <button className="text-black bg-white py-[.25rem] px-[.5rem] rounded-md">
          Light
        </button>
      )}
    </div>
  );
}
