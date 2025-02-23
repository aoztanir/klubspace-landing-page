import { NodeHtmlMarkdown } from "node-html-markdown";

export const discordParser = new NodeHtmlMarkdown(
	{
		bulletMarker: "-",
	},
	{
		u: {
			spaceIfRepeatingChar: true,
			prefix: "__",
			postfix: "__",
		},
		a: ({ node, options, visitor }) => {
			const href = node.getAttribute("href");
			if (!href) return {};

			// Encodes symbols that can cause problems in markdown
			let encodedHref = "";
			for (const chr of href) {
				switch (chr) {
					case "(":
						encodedHref += "%28";
						break;
					case ")":
						encodedHref += "%29";
						break;
					case "_":
						encodedHref += "%5F";
						break;
					case "*":
						encodedHref += "%2A";
						break;
					default:
						encodedHref += chr;
				}
			}

			// Inline link, when possible
			if (node.textContent === href) return { content: `<${encodedHref}>` };

			return {
				postprocess: ({ content }) => content.replace(/(?:\r?\n)+/g, " "),
				childTranslators: visitor.instance.aTagTranslators,
				prefix: "[",
				postfix: `](<${encodedHref}>)`,
			};
		},
	},
);
