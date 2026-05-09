import { useEffect, useState } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      // Small delay so the loader is visible briefly even on fast connections
      setTimeout(() => setHidden(true), 500)
      setTimeout(() => setRemoved(true), 1100)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      // Safety fallback
      const fallback = setTimeout(handleLoad, 2500)
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(fallback)
      }
    }
  }, [])

  if (removed) return null

  return (
    <div className={`preloader ${hidden ? 'is-hidden' : ''}`} aria-hidden="true">
      <div className="preloader-inner">
        <div className="preloader-logo">
          <img src="/images/Rozet-.png" alt="ROZET" />
        </div>
        <div className="preloader-spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}
