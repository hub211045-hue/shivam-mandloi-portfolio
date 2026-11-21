import { AnimatePresence, motion } from 'framer-motion';

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <div className="rounded-2xl border border-emerald-700/20 bg-forest px-4 py-3 text-sm font-medium text-cream shadow-xl">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
