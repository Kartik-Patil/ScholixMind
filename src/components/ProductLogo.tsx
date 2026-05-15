
import { ImageIcon } from 'lucide-react'

type Props = {
  src?: string
  alt?: string
  size?: number
  className?: string
}

export default function ProductLogo({ src, alt = 'logo', size = 56, className = '' }: Props) {
  const pad = Math.max(8, Math.round(size * 0.18))

  return (
    <div
      className={`rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm shadow-[0_8px_30px_rgba(79,70,229,0.08)] flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size, padding: pad }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement
            img.style.display = 'none'
            const fb = img.parentElement!.querySelector('.fallback') as HTMLElement
            if (fb) fb.style.display = 'flex'
          }}
        />
      ) : null}

      <div className="fallback" style={{ display: src ? 'none' : 'flex' }}>
        <ImageIcon size={Math.round(size * 0.5)} className="text-primary-600" />
      </div>
    </div>
  )
}
