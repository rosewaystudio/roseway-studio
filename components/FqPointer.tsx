import Link from 'next/link';

// Dashed arrow on the homepage hero that points up at the
// Foundation Quest button in the nav. Hidden on phones, where that button
// lives inside the menu. The arrow tip lines up with the button's center:
// - 640–1279px: the button sits just left of the menu icon
// - 1280px+:    the button sits just left of "Book a Discovery Call"
// If the nav buttons change size, adjust the right offsets below.

export default function FqPointer() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden sm:block">
      <div className="container-width">
        <div className="relative">
        <Link
          href="/foundation-quest"
          aria-label="Try Foundation Quest for free"
          className="pointer-events-auto group absolute top-1 right-[108px] xl:right-[288px] flex items-center gap-0.5"
        >
          <span className="mb-7 whitespace-nowrap rounded-full bg-teal px-3 py-1 text-sm font-bold text-navy shadow-md transition-colors group-hover:bg-teal-light">
            Try for free
          </span>
          <svg width="150" height="90" viewBox="0 0 150 90" fill="none" aria-hidden="true">
            {/* dashed path from the pill up to the nav button */}
            <path
              d="M4 36 C 46 44, 106 52, 118 4"
              stroke="#2BB3C0"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="7 7"
            />
            {/* arrowhead, drawn as part of the line; tip at x=118 */}
            <path
              d="M106 14 L118 2 L130 14"
              stroke="#2BB3C0"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        </div>
      </div>
    </div>
  );
}
