import { motion } from 'framer-motion';

type AnimatedBackgroundProps = {
  variant?: 'primary' | 'secondary' | 'accent';
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
};

export default function AnimatedBackground({
  variant = 'primary',
  intensity = 'medium',
  animated = true,
}: AnimatedBackgroundProps) {
  const intensityMap = {
    low: 'opacity-3',
    medium: 'opacity-5',
    high: 'opacity-8',
  };

  const variantColors = {
    primary: {
      gradients: ['from-primary-600/30', 'via-primary-400/20', 'to-primary-500/25'],
      animationColors: ['from-primary-500/20', 'to-transparent'],
    },
    secondary: {
      gradients: ['from-accent-600/25', 'via-accent-400/15', 'to-accent-500/20'],
      animationColors: ['from-accent-500/15', 'to-transparent'],
    },
    accent: {
      gradients: ['from-purple-600/20', 'via-pink-400/10', 'to-purple-500/15'],
      animationColors: ['from-purple-400/10', 'to-transparent'],
    },
  };

  const colors = variantColors[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient blob */}
      <motion.div
        animate={
          animated
            ? {
                y: [0, 40, 0],
                x: [0, 20, 0],
              }
            : {}
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br ${colors.gradients[0]} rounded-full mix-blend-multiply filter blur-3xl ${intensityMap[intensity]}`}
      />

      {/* Secondary blob */}
      <motion.div
        animate={
          animated
            ? {
                y: [0, -30, 0],
                x: [0, -25, 0],
              }
            : {}
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className={`absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br ${colors.gradients[1]} rounded-full mix-blend-multiply filter blur-3xl ${intensityMap[intensity]}`}
      />

      {/* Tertiary accent */}
      <motion.div
        animate={
          animated
            ? {
                y: [0, 20, -10, 0],
                x: [0, -15, 15, 0],
              }
            : {}
        }
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className={`absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br ${colors.gradients[2]} rounded-full mix-blend-multiply filter blur-3xl ${intensityMap[intensity]} transform -translate-x-1/2 -translate-y-1/2`}
      />
    </div>
  );
}
