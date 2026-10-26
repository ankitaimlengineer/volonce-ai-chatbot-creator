import { Bot, Send } from "lucide-react";

/** Static illustration only. It is not a working chatbot and sends nothing anywhere. */
export function WidgetPreview() {
  return (
    <figure className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-white/10 bg-ink-800 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/20 text-cyan-300">
            <Bot className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-medium text-white">Your Business Assistant</p>
            <p className="text-xs text-slate-400">Name and colours will be customizable</p>
          </div>
        </div>
        <div className="space-y-3 px-4 py-5 text-sm">
          <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-ink-700 px-3.5 py-2.5 text-slate-200">
            Greeting message placeholder. You will write this in a later step.
          </p>
          <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-500 px-3.5 py-2.5 text-white">
            Visitor question placeholder
          </p>
        </div>
        <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
          <div className="h-9 flex-1 rounded-lg bg-ink-900 px-3 text-sm leading-9 text-slate-500" aria-hidden="true">
            Type a message
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400" aria-hidden="true">
            <Send className="h-4 w-4" />
          </span>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-slate-400">
        Static interface illustration. This is not a live chatbot, and no AI is connected yet.
      </figcaption>
    </figure>
  );
}
