import { formatDate, truncateText } from "@lib/utils";
import type { CollectionEntry } from "astro:content";

type Props = {
  entry: CollectionEntry<"blog">;
};

export default function BlogCard({ entry }: Props) {
  return (
    <div class="animate fi-section fi-section-hoverable p-6 transition-[background-color,border-color] duration-200">
      {/* title thingy */}
      <h2 class="text-base font-semibold text-[rgb(var(--c-50))] mb-1.5">
        {entry.data.title}
      </h2>

      {/* dateeeee */}
      {entry.data.date && (
        <p class="text-xs text-[rgb(var(--c-400))] font-mono mb-3">
          {formatDate(entry.data.date)}
        </p>
      )}

      {/* our beloved mdd */}
      <div class="max-w-full prose prose-invert text-xs text-[rgb(var(--c-300))]">
        <div innerHTML={entry.rendered?.html}></div>
      </div>

      {/* tagzzz */}
      {entry.data.tags?.length > 0 && (
        <ul class="flex flex-wrap mt-4 gap-1.5">
          {entry.data.tags?.map((tag: string) => (
            <li class="fi-badge text-[0.6875rem] uppercase py-0.5 px-2 bg-white/3 text-[rgb(var(--c-300))] border border-hairline">
              {truncateText(tag, 20)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
