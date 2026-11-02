import Link from 'next/link';

// Hand-drawn "road" arrow on the homepage hero that points up at the
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
          className="pointer-events-auto group absolute top-1 right-[108px] xl:right-[288px] flex items-end gap-1"
        >
          <span className="mb-1 whitespace-nowrap rounded-full bg-teal px-3 py-1 text-sm font-bold text-navy shadow-md transition-colors group-hover:bg-teal-light">
            Try for free
          </span>
          <svg
            width="150"
            height="104"
            viewBox="0 0 150 104"
            fill="none"
            aria-hidden="true"
            className="drop-shadow"
          >
            {/* the road */}
            <path
              d="M4 96 C 34 98, 40 74, 64 70 S 104 66, 108 46 S 116 22, 118 14"
              stroke="#2BB3C0"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* dashed center line */}
            <path
              d="M4 96 C 34 98, 40 74, 64 70 S 104 66, 108 46 S 116 22, 118 14"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray="5 6"
            />
            {/* arrowhead, pointing up at the nav button */}
            <path d="M118 0 L107 17 L129 17 Z" fill="#2BB3C0" />
          </svg>
        </Link>
        </div>
      </div>
    </div>
  );
}
