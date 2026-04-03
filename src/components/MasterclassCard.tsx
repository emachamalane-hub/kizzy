import { Play, Clock, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Masterclass } from '../types';
import { cn } from '../lib/utils';

interface MasterclassCardProps {
  masterclass: Masterclass;
  index: number;
}

export default function MasterclassCard({ masterclass, index }: MasterclassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={masterclass.thumbnail}
          alt={masterclass.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play fill="currentColor" size={20} />
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-orange-600/80 backdrop-blur-md rounded-md text-[10px] font-bold uppercase tracking-wider text-white">
            {masterclass.style}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white line-clamp-1 group-hover:text-zinc-300 transition-colors">
          {masterclass.title}
        </h3>
        <div className="mt-3 flex items-center justify-between text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <User size={14} />
            <span>{masterclass.instructor}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{masterclass.duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
