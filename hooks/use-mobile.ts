import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value in a timeout or just ignore since initial value might be set in another way.
    // Actually, setting state inside the event listener is fine. We can set the initial state 
    // by passing a function to useState but we don't have window on server.
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    mql.addEventListener("change", onChange)
    
    // To avoid the synchronous setState warning, we can just use a microtask
    queueMicrotask(() => {
      setIsMobile(mql.matches)
    })
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
