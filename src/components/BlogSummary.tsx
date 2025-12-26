import { formatDate, truncateText } from "@lib/utils";
import type { CollectionEntry } from "astro:content";

type Props = {
  entry: CollectionEntry<"blog">;
};

export default function BlogCard({ entry }: Props) {
  return (
    <div class="animate p-6 border border-black/25 dark:border-white/25 rounded-lg hover:bg-black/5 hover:dark:bg-white/10 shadow-none hover:shadow-xl hover:shadow-black/50 transition-[background-color,box-shadow] duration-300">
      {/* title thingy */}
      <h2 class="text-2xl font-bold mb-2">{entry.data.title}</h2>

      {/* dateeeee */}
      {entry.data.date && (
        <p class="text-sm text-gray-500 mb-4">{formatDate(entry.data.date)}</p>
      )}

      {/* our beloved mdd */}
      <div class="prose max-w-full dark:prose-invert">
        <div innerHTML={entry.rendered?.html}></div>
      </div>

      {/* tagzzz */}
      {entry.data.tags?.length > 0 && (
        <ul class="flex flex-wrap mt-4 gap-2">
          {entry.data.tags?.map((tag: string) => (
            <li class="text-xs uppercase py-0.5 px-2 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">
              {truncateText(tag, 20)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
