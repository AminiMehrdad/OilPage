"use client";

import { Flame } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import {
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type TransitionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function TransitionLink({
  href,
  className,
  children,
}: TransitionLinkProps) {
  const router = useRouter();

  const timerRef = useRef<number | null>(null);
  const navigationTimeoutRef = useRef<number | null>(null);

  const [mounted, setMounted] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }

      if (navigationTimeoutRef.current !== null) {
        window.clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // Allow open-in-new-tab and modified clicks.
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();

    if (isNavigating) {
      return;
    }

    setIsNavigating(true);
    setProgress(0);

    timerRef.current = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + 4, 100);

        if (next === 100) {
          if (timerRef.current !== null) {
            window.clearInterval(timerRef.current);
            timerRef.current = null;
          }

          navigationTimeoutRef.current = window.setTimeout(() => {
            router.push(href);
          }, 100);
        }

        return next;
      });
    }, 26);
  }

  const transitionOverlay =
    mounted && isNavigating
      ? createPortal(
          <div
            className="fixed inset-0 z-[9999] flex h-dvh w-screen items-center justify-center overflow-hidden bg-[#07100f] px-6 text-white"
            role="status"
            aria-live="polite"
            aria-label="Loading page"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(45,212,191,0.2),transparent_28%),radial-gradient(circle_at_50%_62%,rgba(251,191,36,0.16),transparent_28%)]" />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,#07100f_0%,#0b1715_50%,#07100f_100%)]" />

            <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
              <div className="flex size-24 animate-transition-logo items-center justify-center rounded-lg bg-amber-400 text-[#07100f] shadow-2xl shadow-amber-950/60">
                <Flame className="size-10" />
              </div>

              <p className="mt-7 text-xl font-semibold">
                PetroVision Energy
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Preparing workspace
              </p>

              <div className="mt-7 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-300 to-teal-300 transition-[width] duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-300">
                {progress}%
              </p>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>

      {transitionOverlay}
    </>
  );
}