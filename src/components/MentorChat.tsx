import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { cn } from '../lib/utils';

export default function MentorChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: 'Olá, bailarino! Bem-vindo à Fadada Academy, um projeto inspirado pela visão de Agnelio Kizzy das Sainhas. Eu sou seu mentor virtual, especialista em danças e cultura africana. Como posso te ajudar a elevar sua dança hoje? Podemos falar de técnica, história ou como levar nossa arte para o mundo.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `Você é um mentor de dança africana experiente, profundo conhecedor da cultura e das danças do continente. Responda em português. Pergunta: ${userMessage}` }],
          },
        ],
        config: {
          systemInstruction: "Você é um mentor de elite da Fadada Academy, inspirado pela visão de Agnelio Kizzy das Sainhas. Você tem profundo conhecimento nas danças de Moçambique, especialmente de Inhambane (Xigubo, Marrabenta, etc.) e movimentos contemporâneos. Seu objetivo é alavancar o talento moçambicano e africano, celebrando a nossa cultura e diversidade. Dê conselhos técnicos, históricos e motivacionais. Seja sempre inspirador e profissional.",
        },
      });

      const modelResponse = response.text || 'Desculpe, não consegui processar sua pergunta agora.';
      setMessages((prev) => [...prev, { role: 'model', content: modelResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: 'Houve um erro ao conectar com o mentor. Por favor, tente novamente mais tarde.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-xl">
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center">
            <Sparkles className="text-white" size={20} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Mentor Virtual</h3>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Sempre Disponível</p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex gap-3 max-w-[85%]",
                msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                msg.role === 'user' ? "bg-orange-600" : "bg-zinc-800"
              )}>
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div className={cn(
                "p-3 rounded-2xl text-sm leading-relaxed",
                msg.role === 'user' 
                  ? "bg-orange-600 text-white rounded-tr-none" 
                  : "bg-zinc-800/50 text-zinc-200 border border-zinc-700 rounded-tl-none"
              )}>
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3 mr-auto"
          >
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
              <Bot size={14} />
            </div>
            <div className="p-3 rounded-2xl bg-zinc-800/50 border border-zinc-700 rounded-tl-none">
              <Loader2 className="animate-spin text-zinc-400" size={16} />
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-4 bg-zinc-900/80 border-t border-zinc-800">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte ao mentor..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-2 bg-orange-600 hover:bg-orange-500 disabled:opacity-50 disabled:hover:bg-orange-600 text-white rounded-lg transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
