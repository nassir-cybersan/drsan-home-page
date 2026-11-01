"use client";

import { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";

export function ChatBotWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Bonjour ! Comment puis-je vous aider aujourd'hui concernant la carte DrSan e-santé ?",
    },
  ]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (!chatInput.trim()) return;

    const currentInput = chatInput;
    setChatMessages((prev) => [...prev, { sender: "user", text: currentInput }]);
    setChatInput("");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Merci pour votre question ("${currentInput}"). Pour obtenir votre carte DrSan, inscrivez-vous en ligne ou contactez votre centre de santé agréé à Djibouti.`,
        },
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!chatOpen ? (
        <button
          type="button"
          onClick={() => setChatOpen(true)}
          className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-2xl transition hover:scale-105 hover:bg-emerald-700"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-xs font-bold">Assistant DrSan</span>
        </button>
      ) : (
        <div className="w-[22rem] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-emerald-600 p-4 text-white">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-sm font-bold">D</div>
              <div>
                <div className="text-sm font-bold">Assistant e-santé</div>
                <div className="text-[10px] text-emerald-100">En ligne | Support DrSan</div>
              </div>
            </div>
            <button type="button" onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white" aria-label="Fermer le chat">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-64 space-y-3 overflow-y-auto bg-slate-50 p-4 text-xs">
            {chatMessages.map((msg, idx) => (
              <div key={`${msg.sender}-${idx}`} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-xl p-3 ${msg.sender === "user" ? "rounded-br-none bg-emerald-600 text-white" : "rounded-bl-none border border-slate-200 bg-white text-slate-700 shadow-sm"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2 border-t border-slate-200 bg-white p-3">
            <input
              type="text"
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button type="submit" className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white transition hover:bg-emerald-700" aria-label="Envoyer">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatBotWidget;
