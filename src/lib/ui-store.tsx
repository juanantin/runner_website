"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ToastState = { id: number; message: string } | null;

type UIContextValue = {
  trailerOpen: boolean;
  openTrailer: () => void;
  closeTrailer: () => void;
  toast: ToastState;
  showToast: (message: string) => void;
};

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openTrailer = useCallback(() => setTrailerOpen(true), []);
  const closeTrailer = useCallback(() => setTrailerOpen(false), []);

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ id: Date.now(), message });
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  return (
    <UIContext.Provider
      value={{ trailerOpen, openTrailer, closeTrailer, toast, showToast }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within a UIProvider");
  return ctx;
}
