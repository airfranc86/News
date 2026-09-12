function renderInline(text) {
  const parts = text.split(/_(.+?)_/g);
  return parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part));
}

export default function ArticleBody({ blocks }) {
  return (
    <div className="p-8 md:p-12 text-ink text-lg leading-relaxed space-y-7 font-sans">
      {blocks.map((block, i) => {
        if (block.type === 'h3') {
          return (
            <h3 key={i} id={block.id} className="font-display text-ribbon font-semibold text-2xl mt-10 mb-4">
              {block.text}
            </h3>
          );
        }
        if (block.type === 'blockquote') {
          return (
            <blockquote key={i} className="my-10 p-6 md:p-8 bg-paper border border-rule font-display text-xl md:text-2xl italic text-ink font-light">
              {renderInline(block.text)}
            </blockquote>
          );
        }
        return <p key={i}>{renderInline(block.text)}</p>;
      })}
    </div>
  );
}
