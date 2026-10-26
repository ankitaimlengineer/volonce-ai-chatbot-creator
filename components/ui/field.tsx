import type { ReactNode } from "react";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

/** Label + control + hint/error wrapper. Control must use aria-describedby={`${id}-desc`}. */
export function Field({ id, label, error, hint, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-200">
        {label} <span className="text-cyan-300" aria-hidden="true">*</span>
        <span className="sr-only"> (required)</span>
      </label>
      {children}
      <div id={`${id}-desc`} className="mt-1.5 min-h-5 text-sm">
        {error ? (
          <p role="alert" className="text-red-300">
            {error}
          </p>
        ) : hint ? (
          <p className="text-slate-400">{hint}</p>
        ) : null}
      </div>
    </div>
  );
}

export const inputClass =
  "block h-11 w-full rounded-lg border bg-ink-900 px-3 text-slate-100 placeholder:text-slate-500";

export function borderFor(error?: string) {
  return error ? "border-red-400/70" : "border-white/15";
}
