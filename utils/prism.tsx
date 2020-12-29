import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import { RichText } from 'prismic-reactjs'

export default async function markdownToHtml(markdown, language) {

  const raw = `
  \`\`\``+language+`
  `+ RichText.asText(markdown) +`
  \`\`\`
  `;

  const result = await remark().use(html).use(prism).process(raw);
  return result.toString();
}