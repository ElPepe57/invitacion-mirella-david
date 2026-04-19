import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Car } from 'lucide-react';
import { BotanicalLeaf } from './BotanicalLeaf';
// Using standard relative path for the attached image
import heroImage from '../../imports/Captura_de_pantalla_2026-04-18_213850.png';

export function Invitation() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#1A2A44] flex flex-col md:flex-row items-center justify-center p-4 md:p-8 font-['Montserrat',sans-serif]">
      {/* 
        We use a flip-card approach for desktop to feel like a real invitation,
        but allow it to just be a standard view on mobile.
        Actually, let's make it a beautiful flip card everywhere for that premium feel!
      */}
      
      <div className="relative w-[min(90vw,400px)] h-[85vh] max-h-[800px] shadow-2xl rounded-sm" style={{ perspective: 1500 }}>
        <motion.div
          className="w-full h-full relative"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 40, damping: 15 }}
          style={{
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
          }}
        >
          {/* CARA FRONTAL */}
          <div 
            className={`absolute inset-0 w-full h-full flex flex-col justify-between overflow-hidden bg-[#F9F5F0] rounded-sm border border-[#A68B67]/20 ${isFlipped ? 'pointer-events-none' : ''}`}
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            {/* Inner Border Frame */}
            <div className="absolute inset-4 border border-[#A68B67]/20 z-0 pointer-events-none" />

            {/* Content Frontal */}
            <div className="relative z-20 flex flex-col items-center justify-between h-full py-12 px-6 text-center">
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="pt-6 flex flex-col items-center space-y-4"
              >
                <BotanicalLeaf className="text-[#A68B67]" width={24} height={24} />
                <p className="font-['Montserrat',sans-serif] uppercase tracking-[0.3em] text-[9px] text-[#1A2A44] font-medium">
                  Nos Casamos
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="w-[65%] max-w-[220px] aspect-[3/4] rounded-t-full overflow-hidden p-1.5 border border-[#A68B67]/30 my-6"
              >
                <img 
                  src={heroImage} 
                  alt="Novios" 
                  className="w-full h-full object-cover rounded-t-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="pb-10 flex flex-col items-center space-y-3"
              >
                <h1 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-[#1A2A44] leading-none font-medium">
                  Mirella <span className="text-2xl italic mx-1 font-light text-[#A68B67]">&amp;</span> David
                </h1>
                <p className="font-['Cormorant_Garamond',serif] italic text-[#1A2A44] text-sm">
                  27 de Junio 2026
                </p>
              </motion.div>
            </div>
            
            {/* Interactive hint to flip */}
            <button 
              onClick={() => setIsFlipped(true)}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            >
              <span className="text-[#1A2A44] text-[8px] uppercase tracking-widest font-medium">Girar</span>
              <div className="w-3.5 h-3.5 border border-[#1A2A44] rounded-full flex items-center justify-center animate-bounce">
                <div className="w-0.5 h-0.5 bg-[#1A2A44] rounded-full" />
              </div>
            </button>
          </div>

          {/* CARA POSTERIOR */}
          <div 
            className={`absolute inset-0 w-full h-full bg-[#F9F5F0] flex flex-col items-center overflow-y-auto px-8 py-16 md:px-12 rounded-sm border border-[#A68B67]/20 ${!isFlipped ? 'pointer-events-none' : ''}`}
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              WebkitTransform: 'rotateY(180deg)',
            }}
          >
            <BotanicalLeaf className="text-[#A68B67] mb-8 shrink-0" width={48} height={48} />
            
            <div className="flex-1 flex flex-col items-center justify-start text-center w-full max-w-[90%] mx-auto space-y-12 pb-12">
              
              <div className="space-y-4">
                <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-xl italic">
                  Junto a nuestras familias
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-3xl font-medium">
                  Mirella & David
                </h2>
                <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-lg leading-relaxed">
                  Tienen el honor de invitarte a celebrar su matrimonio.
                </p>
              </div>

              <div className="w-12 h-[1px] bg-[#A68B67]/40 shrink-0" />

              <div className="space-y-2 w-full">
                <p className="font-['Montserrat',sans-serif] text-[#1A2A44] uppercase tracking-[0.2em] text-[10px] font-medium">
                  Sábado
                </p>
                <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-3xl">
                  27 . 06 . 2026
                </p>
              </div>

              {/* Ceremonia */}
              <div className="space-y-3 w-full">
                <p className="font-['Montserrat',sans-serif] text-[#1A2A44] uppercase tracking-[0.2em] text-[10px] font-semibold">
                  Ceremonia - 11:00 AM
                </p>
                <a 
                  href="https://maps.app.goo.gl/HbZw2G8boJSgCR2L7"
                  target="_blank" rel="noreferrer"
                  className="block group"
                >
                  <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-xl group-hover:text-[#A68B67] transition-colors">
                    Av. Brasil 3501
                  </p>
                  <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44]/70 text-sm italic group-hover:text-[#A68B67]/70 transition-colors">
                    Magdalena del Mar
                  </p>
                  <span className="text-[9px] uppercase tracking-widest text-[#A68B67] mt-3 inline-block border-b border-[#A68B67]/30 pb-0.5">Ver Mapa</span>
                </a>
              </div>

              {/* Celebración */}
              <div className="space-y-3 w-full">
                <p className="font-['Montserrat',sans-serif] text-[#1A2A44] uppercase tracking-[0.2em] text-[10px] font-semibold">
                  Celebración - 2:00 PM
                </p>
                <a 
                  href="https://maps.app.goo.gl/dh8X2XRqF83wXoFP7"
                  target="_blank" rel="noreferrer"
                  className="block group"
                >
                  <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-xl group-hover:text-[#A68B67] transition-colors">
                    Jr. Teniente Arístides del Carpio 1216
                  </p>
                  <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44]/70 text-sm italic group-hover:text-[#A68B67]/70 transition-colors">
                    Cercado de Lima
                  </p>
                  <span className="text-[9px] uppercase tracking-widest text-[#A68B67] mt-3 inline-block border-b border-[#A68B67]/30 pb-0.5">Ver Mapa</span>
                </a>
              </div>

              <div className="w-12 h-[1px] bg-[#A68B67]/40 shrink-0" />

              {/* Dress Code */}
              <div className="space-y-3 w-full">
                <p className="font-['Montserrat',sans-serif] text-[#1A2A44] uppercase tracking-[0.2em] text-[10px] font-semibold">
                  Dress Code
                </p>
                <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-2xl">
                  Formal
                </p>
                <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44]/80 text-[15px] italic max-w-[220px] mx-auto leading-relaxed">
                  El blanco está reservado,<br/>¡nos encantará verte en otros colores!
                </p>
              </div>

              <div className="w-12 h-[1px] bg-[#A68B67]/40 shrink-0" />

              {/* Regalos */}
              <div className="space-y-6 w-full">
                <h3 className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-4xl italic">
                  Regalos
                </h3>
                <p className="font-['Montserrat',sans-serif] text-[#1A2A44] text-[9.5px] uppercase tracking-wider leading-loose max-w-[280px] mx-auto">
                  NUESTRO MEJOR REGALO ES QUE ESTÉS CON NOSOTROS EN NUESTRO DÍA, PERO SI QUIERES HACERNOS UN OBSEQUIO. ¡AQUÍ ESTÁ NUESTRO NÚMERO DE CUENTA O PODRÁS TRAERLO EL GRAN DÍA!
                </p>
                
                <div className="flex justify-center py-2">
                  <div className="w-16 h-16 rounded-full border border-[#A68B67]/30 flex items-center justify-center">
                    <Gift className="text-[#A68B67] w-6 h-6 stroke-[1.5]" />
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1">
                    <p className="font-['Montserrat',sans-serif] text-[#1A2A44] text-[9px] uppercase tracking-widest font-semibold">
                      N° DE CUENTA INTERBANK ES:
                    </p>
                    <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-xl">
                      158 3302567164
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-['Montserrat',sans-serif] text-[#1A2A44] text-[9px] uppercase tracking-widest font-semibold">
                      N° DE CUENTA INTERBANCARIO (CCI) ES:
                    </p>
                    <p className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-xl">
                      003 158 013302567164 34
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-12 h-[1px] bg-[#A68B67]/40 shrink-0" />

              {/* Countdown */}
              <div className="space-y-8 w-full pt-4">
                <div className="flex justify-center">
                  <Car className="text-[#1A2A44] w-12 h-12 stroke-[1]" />
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-[#1A2A44] text-4xl italic">
                  Nos vemos en...
                </h3>
                <Countdown targetDate="2026-06-27T11:00:00" />
              </div>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfI02-br2LOKs7OD21mVaKzBLTLvvU7mcnROdjjp8XAYAhzEQ/viewform"
                target="_blank" rel="noreferrer"
                className="mt-12 px-8 py-4 bg-[#1A2A44] text-[#F9F5F0] font-['Montserrat',sans-serif] text-[10px] uppercase tracking-widest hover:bg-[#1A2A44]/90 transition-colors w-full cursor-pointer shadow-md inline-block"
              >
                Confirmar Asistencia
              </a>

            </div>

            <button 
              onClick={() => setIsFlipped(false)}
              className="mt-8 text-[#A68B67] text-[10px] uppercase tracking-[0.2em] border-b border-[#A68B67]/30 pb-1 hover:border-[#A68B67] transition-colors cursor-pointer relative z-50"
            >
              Volver al inicio
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-start justify-center gap-2 md:gap-4 text-[#1A2A44] pt-4">
      <div className="flex flex-col items-center w-14">
        <span className="font-['Cormorant_Garamond',serif] text-5xl">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="font-['Montserrat',sans-serif] text-[7px] uppercase tracking-widest mt-2">Days</span>
      </div>
      <span className="font-['Cormorant_Garamond',serif] text-3xl mt-2">:</span>
      <div className="flex flex-col items-center w-14">
        <span className="font-['Cormorant_Garamond',serif] text-5xl">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="font-['Montserrat',sans-serif] text-[7px] uppercase tracking-widest mt-2">Hours</span>
      </div>
      <span className="font-['Cormorant_Garamond',serif] text-3xl mt-2">:</span>
      <div className="flex flex-col items-center w-14">
        <span className="font-['Cormorant_Garamond',serif] text-5xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="font-['Montserrat',sans-serif] text-[7px] uppercase tracking-widest mt-2">Minutes</span>
      </div>
      <span className="font-['Cormorant_Garamond',serif] text-3xl mt-2">:</span>
      <div className="flex flex-col items-center w-14">
        <span className="font-['Cormorant_Garamond',serif] text-5xl text-[#8E9FCA]">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="font-['Montserrat',sans-serif] text-[7px] uppercase tracking-widest mt-2">Seconds</span>
      </div>
    </div>
  );
}
