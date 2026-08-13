type OrpheionMarkProps = {
  className?: string;
  /** Accessible name when the mark stands alone. Omit when paired with visible “Orpheion” text. */
  title?: string;
  decorative?: boolean;
};

/**
 * Classical lyre mark — Orpheus mythic root.
 * Brand wordmark remains “Orpheion” (not Orpheus).
 * Uses currentColor for light limestone and dark hero surfaces.
 */
export function OrpheionMark({
  className,
  title = "Orpheion",
  decorative = false,
}: OrpheionMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
    >
      <g fill="currentColor">
        {/* Left arm: base → curve → outward volute */}
        <path d="M24.5 46.8c-5.2-4.8-8.1-11.4-7.6-18.4.4-5.6 2.8-10.6 6.8-14.2l-.9-1.6C18.2 16.8 15.2 22.8 14.7 29.5c-.6 8.1 2.7 15.7 8.7 21.2l1.1.9z" />
        <path d="M23.7 14.2c-2.6-1.2-4.1-4.1-3.4-6.9.7-2.9 3.5-4.7 6.4-4.2 1.9.3 3.4 1.6 4.1 3.3.4 1.1-.1 2.3-1.2 2.8-1 .4-2.2-.1-2.7-1.1-.3-.6-1-1-1.7-.8-.9.2-1.5 1.1-1.3 2 .2.9 1.1 1.5 2 1.3l-.2 1.8c-1.1.1-2.1-.3-2.9-.9.3.9.3 1.9 0 2.7z" />
        {/* Right arm + volute */}
        <path d="M39.5 46.8c5.2-4.8 8.1-11.4 7.6-18.4-.4-5.6-2.8-10.6-6.8-14.2l.9-1.6c4.6 4.2 7.6 10.2 8.1 16.9.6 8.1-2.7 15.7-8.7 21.2l-1.1.9z" />
        <path d="M40.3 14.2c2.6-1.2 4.1-4.1 3.4-6.9-.7-2.9-3.5-4.7-6.4-4.2-1.9.3-3.4 1.6-4.1 3.3-.4 1.1.1 2.3 1.2 2.8 1 .4 2.2-.1 2.7-1.1.3-.6 1-1 1.7-.8.9.2 1.5 1.1 1.3 2-.2.9-1.1 1.5-2 1.3l.2 1.8c1.1.1 2.1-.3 2.9-.9-.3.9-.3 1.9 0 2.7z" />

        {/* Crossbar */}
        <path d="M18.8 15.1h26.4c.8 0 1.4.6 1.4 1.4v.6c0 .8-.6 1.4-1.4 1.4H18.8c-.8 0-1.4-.6-1.4-1.4v-.6c0-.8.6-1.4 1.4-1.4z" />
        <rect x="16.9" y="14.2" width="2.6" height="4.6" rx="0.6" />
        <rect x="44.5" y="14.2" width="2.6" height="4.6" rx="0.6" />

        {/* Strings */}
        <rect x="22.6" y="18.5" width="1.35" height="23.2" rx="0.45" />
        <rect x="27" y="18.5" width="1.35" height="23.2" rx="0.45" />
        <rect x="31.35" y="18.5" width="1.35" height="23.2" rx="0.45" />
        <rect x="35.7" y="18.5" width="1.35" height="23.2" rx="0.45" />
        <rect x="40.05" y="18.5" width="1.35" height="23.2" rx="0.45" />

        {/* Soundboard */}
        <path d="M22.8 42.4c2.5 3.8 6 5.8 9.2 5.8s6.7-2 9.2-5.8c.5-.7 0-1.7-.9-1.7H23.7c-.9 0-1.4 1-.9 1.7z" />
        {/* Leaf / flame */}
        <path d="M32 37.2c2 1.7 3 3.7 3 5.4 0 2.1-1.3 3.5-3 3.5s-3-1.4-3-3.5c0-1.7 1-3.7 3-5.4z" />

        {/* Pedestal */}
        <rect x="21.2" y="49" width="21.6" height="3" rx="0.8" />
        <rect x="24.6" y="52.8" width="14.8" height="2.5" rx="0.7" />
      </g>
    </svg>
  );
}
