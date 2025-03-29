import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div 
      className={`flex ${message.isBot ? "justify-start animate-slideInLeft" : "justify-end animate-slideInRight"} mb-8`}
      role="listitem"
      aria-label={message.isBot ? "Chatbot üzenet" : "Felhasználói üzenet"}
    >
      <Card 
        className={`max-w-[80%] p-6 shadow-lg backdrop-blur-xl rounded-2xl relative overflow-hidden
          ${message.isBot 
            ? "glass-effect border-none neon-border-purple" 
            : "glass-effect border-none neon-border"
          }`}
      >
        <div className="relative z-10">
          {message.isBot && (
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-[#00DDEB] animate-pulse" />
              <span className="text-[#00DDEB] text-sm font-medium text-glow">MuzsikaI</span>
            </div>
          )}
          <p className={`text-lg font-montserrat font-normal leading-relaxed tracking-wide text-white
            ${message.isBot ? "text-glow-purple" : "text-glow"}`}>
            {message.content}
          </p>
          <span className="text-xs text-white/60 mt-4 block font-montserrat">
            {message.timestamp.toLocaleTimeString()}
          </span>
        </div>
        
        <div className={`absolute inset-0 opacity-10 pointer-events-none
          ${message.isBot 
            ? "bg-gradient-to-r from-[#7B3FE4]/30 to-[#FF69B4]/30 animate-gradient-x" 
            : "bg-gradient-to-r from-[#00DDEB]/30 to-[#7B3FE4]/30 animate-gradient-x"
          }`}></div>
      </Card>
    </div>
  );
}
