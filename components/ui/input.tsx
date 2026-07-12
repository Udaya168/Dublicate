import * as React from "react";

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-white placeholder:text-neutral-500 flex h-9 w-full min-w-0 rounded-md border border-neutral-700 bg-neutral-950 px-3 py-1 text-sm text-white transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-violet-500 focus-visible:ring-violet-500/50 focus-visible:ring-2",
        className
      )}
      {...props}
    />
  );
}

export { Input };
