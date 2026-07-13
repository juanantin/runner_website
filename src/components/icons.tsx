// Brand marks Lucide doesn't ship (X/Twitter bird-less logo, Telegram paper
// plane). Kept as small inline SVGs so we don't pull in another icon pack.

export function XLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.24 2H21l-6.5 7.43L22.2 22h-6.2l-4.86-6.36L5.5 22H2.7l6.96-7.95L1.8 2h6.35l4.4 5.82L18.24 2Zm-1.08 18.17h1.72L7.02 3.74H5.17l12 16.43Z" />
    </svg>
  );
}

export function TelegramLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.9 4.4 18.6 20.3c-.25 1.1-.9 1.37-1.83.85l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.15L18 5.9c.4-.36-.09-.56-.62-.2L6.3 12.6l-5-1.56c-1.08-.34-1.1-1.08.23-1.6L20.5 3.1c.9-.33 1.7.2 1.4 1.3Z" />
    </svg>
  );
}
