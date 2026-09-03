import type { Block } from "@/lib/insights/types";

/**
 * Renders the typed article blocks. Kept deliberately plain: articles are
 * long-form reading, so the job here is measure, rhythm and contrast rather
 * than decoration.
 */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mx-auto max-w-2xl">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="font-display text-h3 text-ink-950 mt-14 mb-5 first:mt-0">
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3 key={i} className="font-display text-xl text-ink-950 mt-10 mb-4">
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p key={i} className="text-ink-700 leading-relaxed mb-5">
                {block.text}
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="mb-6 space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-ink-700 leading-relaxed">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "table":
            return (
              <figure key={i} className="my-8">
                <div className="overflow-x-auto rounded-lg border border-line">
                  <table className="w-full border-collapse text-small">
                    <thead>
                      <tr className="bg-ink-950 text-paper-50">
                        {block.head.map((cell, j) => (
                          <th key={j} scope="col" className="px-4 py-3 text-start font-body font-semibold">
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {block.rows.map((row, j) => (
                        <tr key={j} className="align-top">
                          {row.map((cell, k) => (
                            <td
                              key={k}
                              className={`px-4 py-3 ${k === 0 ? "text-ink-800" : "text-ink-700 whitespace-nowrap"}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {block.note ? (
                  <figcaption className="mt-3 text-micro text-ink-500">{block.note}</figcaption>
                ) : null}
              </figure>
            );

          case "callout":
            return (
              <aside key={i} className="my-8 rounded-lg border-s-2 border-brass-500 bg-paper-100 px-6 py-5">
                {block.title ? (
                  <p className="font-display text-lg text-ink-950 mb-2">{block.title}</p>
                ) : null}
                <p className="text-ink-700 leading-relaxed">{block.text}</p>
              </aside>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
