const PRIORITY = {
  HIGH: 0,
  MEDIUM: 1,
  LOW: 2,
};

const TAGS = {
  ALL: "all",
  BEST_PRACTICES: "best practices",
  SEO: "seo",
  TESTING: "testing",
  CSS: "css",
  JAVASCRIPT: "javascript",
  PERFORMANCE: "performance",
  META_TAGS: "meta tags",
  HTML_TAGS: "html tags",
  SOCIAL_MEDIA: "social media",
  SECURITY: "security",
  IMAGES: "images",
  REQUESTS: "requests",
  ACCESSIBILITY: "accessibility",
  WEB_FONT: "web font",
};

export const array = [
  {
    title: "Head",
    meta: {
      progress: 0,
    },
    filters: {
      isChecked: false,
      isHidden: false,
      priority: 0, // 0 high, 1 medium, 2 low
    },
    content: [
      {
        title: "Doctype",
        description:
          "The Doctype is HTML5 and is at the top of all your HTML pages.",
        code: `
            <!-- Doctype HTML5 -->
            <!doctype html>
        `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.SEO, TAGS.HTML_TAGS],
        },
        documentation: [
          {
            title: "Determining the character encoding - HTML5 W3C",
            source:
              "https://www.w3.org/TR/html5/syntax.html#determining-the-character-encoding?ref=frontendchecklist",
          },
        ],
        tools: [
          {
            title: null,
            source: null,
          },
        ],
      },
    ],
  },
];
