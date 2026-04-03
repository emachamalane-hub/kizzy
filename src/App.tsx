import { useState } from 'react';
import { 
  Music, 
  Users, 
  Trophy, 
  Sparkles, 
  ChevronRight, 
  Play, 
  Menu, 
  X,
  Star,
  Zap,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Masterclass } from './types';
import MasterclassCard from './components/MasterclassCard';
import MentorChat from './components/MentorChat';
import { cn } from './lib/utils';

const MASTERCLASSES: Masterclass[] = [
  {
    id: '1',
    title: 'Aymos: O Movimento Afro-Pop',
    instructor: 'Aymos',
    style: 'Afro-Pop',
    thumbnail: 'https://picsum.photos/seed/aymos_dance/800/450',
    duration: '55 min'
  },
  {
    id: '2',
    title: 'Xigubo: A Força de Inhambane',
    instructor: 'Mestre Jossias',
    style: 'Guerreiro',
    thumbnail: 'https://picsum.photos/seed/xigubo_inhambane/800/450',
    duration: '60 min'
  },
  {
    id: '3',
    title: 'Marrabenta de Inhambane',
    instructor: 'Morena Manjate',
    style: 'Marrabenta',
    thumbnail: 'https://picsum.photos/seed/inhambane_dance/800/450',
    duration: '50 min'
  },
  {
    id: '4',
    title: 'Mapiko: Tradição e Mistério',
    instructor: 'Mestre Atanásio',
    style: 'Tradicional',
    thumbnail: 'https://picsum.photos/seed/mapiko_moz/800/450',
    duration: '55 min'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Music className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">FADADA ACADEMY</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Masterclasses</a>
              <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Mentoria</a>
              <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Comunidade</a>
              <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors">
                Entrar
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-zinc-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#" className="text-2xl font-bold text-white">Masterclasses</a>
              <a href="#" className="text-2xl font-bold text-white">Mentoria</a>
              <a href="#" className="text-2xl font-bold text-white">Comunidade</a>
              <button className="mt-4 px-8 py-4 bg-orange-600 text-white text-lg font-bold rounded-2xl">
                Começar Agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-500/20 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-orange-400 mb-8">
                <Sparkles size={16} />
                Nascida em Moçambique, para o mundo
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[0.9]">
                A ALMA DE MOZ, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400">
                  EM MOVIMENTO.
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed">
                A Fadada Academy celebra a diversidade das danças africanas, com foco especial no talento vibrante de <strong>Inhambane</strong> e de todo <strong>Moçambique</strong>. 
                Damos a todo africano a chance de aprender com os maiores mestres e levar nossa cultura ao mundo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
                  Começar Jornada
                  <ChevronRight size={20} />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-2xl flex items-center justify-center gap-2 border border-zinc-800 transition-all">
                  <Play size={20} fill="currentColor" />
                  Ver Trailer
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-zinc-900/30 backdrop-blur-md rounded-3xl border border-zinc-800/50"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Mestres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Aulas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10k+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Alunos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Estilos</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Origin Section */}
        <section className="py-24 bg-zinc-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">A Nossa Origem</h2>
                <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                  A Fadada Academy nasceu da visão de <strong>Agnelio Kizzy das Sainhas</strong> para preservar e elevar a rica herança cultural de <strong>Inhambane</strong> e de todo <strong>Moçambique</strong>. 
                  Desde as batidas do Xigubo até o movimento contemporâneo, a nossa dança é a nossa identidade.
                </p>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  Criamos este programa para que cada bailarino moçambicano e africano tenha acesso ao melhor aprendizado, 
                  unindo a sabedoria dos nossos mestres tradicionais com a inovação da era digital.
                </p>
                <div className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Orgulho Moçambicano</h4>
                    <p className="text-zinc-500 text-sm">Levando a nossa dança para os palcos globais.</p>
                  </div>
                </div>
              </motion.div>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-zinc-800">
                <img 
                  src="https://picsum.photos/seed/agnelio_kizzy/800/800" 
                  alt="Agnelio Kizzy das Sainhas" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Masterclasses Section */}
        <section className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Nossa Herança no Palco</h2>
                <p className="text-zinc-400 max-w-xl">
                  Explore masterclasses de Xigubo, Marrabenta e o estilo único de <strong>Aymos</strong>, 
                  ensinadas pelos maiores talentos de Inhambane e de Moçambique.
                </p>
              </div>
              <button className="text-orange-400 font-semibold flex items-center gap-2 hover:text-orange-300 transition-colors">
                Ver todas as aulas
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MASTERCLASSES.map((mc, idx) => (
                <MasterclassCard key={mc.id} masterclass={mc} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* AI Mentor Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap size={14} />
                  Inteligência Artificial
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Mentoria com <br />
                  <span className="text-orange-500">Sabor Africano.</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                  Dúvidas sobre o gingado ou a história de uma dança? 
                  Nosso mentor de IA conhece as raízes e a evolução da dança em todo o continente africano.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: <Star className="text-indigo-500" />, title: "Dicas Técnicas", desc: "Correções instantâneas e explicações detalhadas." },
                    { icon: <Award className="text-indigo-500" />, title: "Carreira", desc: "Conselhos sobre audições e portfólio." },
                    { icon: <Users className="text-indigo-500" />, title: "Bem-estar", desc: "Prevenção de lesões e dicas de nutrição." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{item.title}</h4>
                        <p className="text-zinc-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-2xl rounded-[2rem] -z-10" />
                <MentorChat />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-orange-600 to-red-700 p-12 md:p-24 text-center">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">VIVA A DANÇA DA ÁFRICA</h2>
              <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                A Fadada Academy é o seu portal para a maestria. Junte-se a nós e leve a dança africana para o próximo nível.
              </p>
              <button className="px-12 py-5 bg-white text-orange-600 font-black text-xl rounded-2xl hover:bg-zinc-100 transition-all hover:scale-105 shadow-2xl shadow-black/20">
                INSCREVA-SE AGORA
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <Music className="text-white" size={18} />
              </div>
              <span className="text-lg font-bold tracking-tighter text-white">FADADA ACADEMY</span>
            </div>
            <div className="flex gap-8 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Suporte</a>
            </div>
            <div className="text-sm text-zinc-600">
              © 2026 Fadada Academy. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
