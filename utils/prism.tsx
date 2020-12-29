import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import { RichText } from 'prismic-reactjs'

export default async function markdownToHtml(markdown: any, language_name: string) {

  var language: string;
  switch (language_name) {
    case "HTML / XHTML / XML":
      language = "markup"
      break;
    case "CSS / SCSS":
      language = "css"
      break;
    case "C#":
      language = "csharp";
      break;
    case "Git":
      language = "git";
      break;
    case "JavaScript":
      language = "javascript";
      break;
    case "PowerShell":
      language = "powershell";
      break;
    case "React JSX":
      language = "jsx";
      break;
    case "React TSX":
      language = "tsx";
      break;
    case "Regex":
      language = "regex";
      break;
    case "SQL":
        language = "sql";
        break;
    case "TypeScript ":
      language = "typescript";
      break;
    default:
      language = "";
      break;
  }

  const raw = `
  \`\`\``+language+`
  `+ RichText.asText(markdown) +`
  \`\`\`
  `;

  const result = await remark().use(html).use(prism).process(raw);
  return result.toString();
}