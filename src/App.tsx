import { useEffect, useRef, useState } from "react";

import { Header } from "./components/Header";

// Default export so you can preview instantly.
export default function TerminalScreen() {
  const [lines, setLines] = useState<string[]>([
    "You awaken to the hollow echo of dripping water",
    "The air is cold and still, heavy with the scent of stone and time. You stand at the entrance of a crumbling stairway that winds downwards. Into the vast darkness, at your feet lies a rusted lantern. Far below, a faint hum vibrates through the stone.",
  ]);
  const [input, setInput] = useState("");

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setLines((prev) => [...prev, `> ${trimmed}`, `I beg your pardon?`]);
    setInput("");
  }

  return (
    <div className="flex-row h-screen w-full bg-[var(--bg)] text-[var(--text)] font-mono overflow-hidden">
      <Header />
      <div className="mx-auto max-w-5xl h-full grid grid-rows-[1fr_auto] p-4 md:p-6">

        <div ref={scrollRef} className="relative overflow-y-auto pr-1" aria-label="terminal-output">    
          <div className="h-[45vh] shrink-0" />
          <div className="space-y-1 leading-relaxed">
            <p className="title">The Forgotton Depths Of Orren</p>
            <p className="muted text-sm">Copyright (c) 2025 Braeniacs Ent. All rights reserved.</p>
            <p className="muted text-sm">For a list of available commands, type 'help'.</p>
            {
              lines.map((text, index) => (
                <p key={index} className="whitespace-pre-wrap text-justify">{text}</p>
              ))
            }
          </div>
        </div>

        <form onSubmit={onSubmit} className="pt-3 border-[var(--border)] mb-5">
          <label className="sr-only" htmlFor="cmd">Command</label>
          <div className="flex items-center gap-2">
            <span className="text-brass">&gt;</span>
            <input
              id="cmd"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="term-input w-full bg-transparent"
            />
          </div>
        </form>
     
      </div>
    </div>
  );
}
