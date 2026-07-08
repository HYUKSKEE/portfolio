export type RawChunk = {
  heading: string;
  text: string;
};

const MAX_CHUNK_LENGTH = 900;

/**
 * Splits a markdown document into retrieval-friendly chunks.
 * Splits on `##` headings first, then further splits any section
 * that is still too long into smaller pieces on paragraph boundaries.
 */
export function chunkMarkdown(markdown: string): RawChunk[] {
  const withoutFrontHeading = markdown.replace(/^#\s+.*$/m, "").trim();
  const sections = withoutFrontHeading
    .split(/\n(?=##\s+)/g)
    .map((section) => section.trim())
    .filter(Boolean);

  const chunks: RawChunk[] = [];

  for (const section of sections) {
    const headingMatch = section.match(/^##\s+(.*)$/m);
    const heading = headingMatch ? headingMatch[1].trim() : "General";
    const body = section.replace(/^##\s+.*$/m, "").trim();

    if (!body) continue;

    if (body.length <= MAX_CHUNK_LENGTH) {
      chunks.push({ heading, text: body });
      continue;
    }

    const paragraphs = body.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
    let buffer = "";
    for (const paragraph of paragraphs) {
      if ((buffer + "\n\n" + paragraph).length > MAX_CHUNK_LENGTH && buffer) {
        chunks.push({ heading, text: buffer.trim() });
        buffer = paragraph;
      } else {
        buffer = buffer ? `${buffer}\n\n${paragraph}` : paragraph;
      }
    }
    if (buffer) chunks.push({ heading, text: buffer.trim() });
  }

  return chunks;
}
