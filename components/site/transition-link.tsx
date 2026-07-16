"use client";

import { Flame } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

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
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
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
    setIsNavigating(true);
    setProgress(0);

    timerRef.current = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + 4, 100);

        if (next >= 100) {
          if (timerRef.current) {
            window.clearInterval(timerRef.current);
          }
          window.setTimeout(() => router.push(href), 120);
        }

        return next;
      });
    }, 26);
  }

  return (
    <>
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>

      {isNavigating ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#07100f]/95 px-6 text-white backdrop-blur-xl"
          role="status"
          aria-live="polite"
        >
          <div className="w-full max-w-sm text-center">
            <div className="mx-auto flex size-20 animate-transition-logo items-center justify-center rounded-lg bg-amber-400 text-[#07100f] shadow-2xl shadow-amber-950/50">
              <Flame className="size-10" />
            </div>
            <p className="mt-6 text-lg font-semibold">PetroVision Energy</p>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-300 to-teal-300 transition-[width] duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-300">
              {progress}%
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
