import { SIGNET_BODY_PATH, SIGNET_FACETS, SIGNET_VIEWBOX } from "@/lib/brand";
import { cn } from "@/lib/utils";

/**
 * The Auditor signet from Atlas. Light-surface colours by default, the
 * dark-surface pair under `.dark` (next-themes), exactly as Atlas specifies.
 * Decorative by default; the visible "auditor" wordmark next to it names it.
 */
export function Signet({ className }: { className?: string }) {
  return (
    <svg viewBox={SIGNET_VIEWBOX} aria-hidden focusable="false" className={cn("shrink-0", className)}>
      <path
        fillRule="evenodd"
        d={SIGNET_BODY_PATH}
        className="fill-[#0066B3] dark:fill-[#009DFF]"
      />
      {SIGNET_FACETS.map((points) => (
        <polygon key={points} points={points} className="fill-[#2B89B5] dark:fill-[#A8EDFF]" />
      ))}
    </svg>
  );
}
