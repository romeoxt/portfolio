import { useEffect, useRef, useState } from "react";

/**
 * Mount children only when near the viewport, or after idle (for above-the-fold heavy assets).
 */
const DeferredMount = ({
  children,
  rootMargin = "200px",
  minHeight = 0,
  className = "",
  /** If set, wait for idle (or this timeout) instead of intersecting — use for hero 3D */
  idleMs,
}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return undefined;

    const reveal = () => setShow(true);

    if (typeof idleMs === "number") {
      let idleId;
      let timeoutId;

      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(reveal, { timeout: idleMs });
      } else {
        timeoutId = setTimeout(reveal, idleMs);
      }

      return () => {
        if (idleId != null && typeof window.cancelIdleCallback === "function") {
          window.cancelIdleCallback(idleId);
        }
        clearTimeout(timeoutId);
      };
    }

    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [show, rootMargin, idleMs]);

  return (
    <div
      ref={ref}
      className={className}
      style={show || !minHeight ? undefined : { minHeight }}
    >
      {show ? children : null}
    </div>
  );
};

export default DeferredMount;
