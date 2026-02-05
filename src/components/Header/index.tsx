import clsx from "clsx";

export function Header() {
  return (
    <div>
      <h1
        className={clsx(
          "text-xl font-bold",
          "text-blue-500",
          "hover:text-blue-50",
          "hover:bg-blue-500",
          "transition duration-300",
        )}
      >
        Ola de dentro Header
      </h1>
    </div>
  );
}
