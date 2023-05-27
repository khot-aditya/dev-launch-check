export const PRIORITY = {
  HIGH: 0,
  MEDIUM: 1,
  LOW: 2,
};

export const TAGS = {
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

export const dataArray = [
  {
    "title": "Head",
    "content": [
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
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: [
          {
            title: "Determining the character encoding - HTML5 W3C",
            source:
              "https://www.w3.org/TR/html5/syntax.html#determining-the-character-encoding?ref=frontendchecklist",
          },
        ],
        tools: null,
      },
      {
        title: "Charset",
        description: "The charset declared (UTF-8) is declared correctly.",
        code: `
        <!-- Set character encoding for the document -->
        <meta charset="utf-8">
              `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Viewport",
        description: "The viewport is declared correctly.",
        code: `
        <!-- Viewport for responsive web design -->
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
              `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Title",
        description: "A title is used on all pages",
        longDescription:
          "SEO: Google calculates the pixel width of the characters used in the title and cuts off between 472 and 482 pixels. Average character limit would be around 55 characters",
        code: `
        <!-- Document Title -->
        <title>Page Title less than 55 characters</title>
              `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: [
          {
            title: "Title - HTML - MDN",
            source:
              "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title?ref=frontendchecklist",
          },
        ],
        tools: [
          {
            title: "SERP Snippet Generator",
            source:
              "https://www.sistrix.com/serp-snippet-generator/?ref=frontendchecklist",
          },
        ],
      },
      {
        title: "Description",
        description:
          "A meta description is provided, it is unique and doesn't possess more than 150 characters.",
        code: `
        <!-- Meta Description -->
        <meta name="description" content="Description of the page less than 150 characters">
              `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: [
          {
            title: "Meta Description - HTML - MDN",
            source:
              "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_an_author_and_description?ref=frontendchecklist",
          },
        ],
        tools: null,
      },
      {
        title: "Favicons",
        description: "Each favicon has been created and displays correctly.",
        longDescription:
          "If you have only a favicon.ico, put it at the root of your site. Normally you won't need to use any markup. However, it's still good practice to link to it using the example below. Today, PNG format is recommended over .ico format (dimensions: 32x32px).",
        code: `
        <!-- Standard favicon -->
        <link rel="icon" type="image/x-icon" href="https://example.com/favicon.ico">
        <!-- Recommended favicon format -->
        <link rel="icon" type="image/png" href="https://example.com/favicon.png">
              `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: [
          {
            title: "Favicon Cheat Sheet",
            source:
              "https://github.com/audreyr/favicon-cheat-sheet?ref=frontendchecklist",
          },
          {
            title:
              "Favicons, Touch Icons, Tile Icons, etc. Which Do You Need? - CSS Tricks",
            source: "https://css-tricks.com/favicon-quiz/?ref=frontendchecklist",
          },
          {
            title: "PNG favicons - caniuse",
            source: "https://caniuse.com/#feat=link-icon-png?ref=frontendchecklist",
          },
        ],
        tools: [
          {
            title: "Favicon Generator",
            source: "https://www.favicon-generator.org/?ref=frontendchecklist",
          },
          {
            title: "RealFaviconGenerator",
            source: "https://realfavicongenerator.net/?ref=frontendchecklist",
          },
        ],
      },
      {
        title: "Apple Web App Meta",
        description: "Apple meta-tags are present.",
        code: `
        <!-- Apple Touch Icon (at least 200x200px) -->
        <link rel="apple-touch-icon" href="/custom-icon.png">
        
        <!-- To run web application in full-screen -->
        <meta name="apple-mobile-web-app-capable" content="yes">
         
        <!-- Status Bar Style (see Supported Meta Tags below for available values) -->
        <!-- Has no effect unless you have the previous meta tag -->
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
              `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: [
          {
            title: "Configuring Web Applications",
            source:
              "https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html?ref=frontendchecklist",
          },
          {
            title: "Supported Meta Tags",
            source:
              "https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html?ref=frontendchecklist",
          },
        ],
        tools: null,
      },
      {
        title: "Windows Tiles",
        description: "Windows tiles are present and linked.",
        code: `
        <!-- Microsoft Tiles -->
        <meta name="msapplication-config" content="browserconfig.xml">
              `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: [
          {
            title: "Browser configuration schema reference",
            source:
              "https://msdn.microsoft.com/en-us/library/dn320426(v=vs.85).aspx?ref=frontendchecklist",
          },
        ],
        tools: null,
      },
      {
        title: "Canonical",
        description: 'Use rel="canonical" to avoid duplicate content.',
        code: `
        <!-- Helps prevent duplicate content issues -->
        <link rel="canonical" href="http://example.com/2017/09/a-new-article-to-read.html">
              `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: [
          {
            title: "Use canonical URLs - Search Console Help - Google Support",
            source:
              "https://support.google.com/webmasters/answer/139066?hl=en?ref=frontendchecklist",
          },
          {
            title: "5 common mistakes with rel=canonical - Google Webmaster Blog",
            source:
              "https://webmasters.googleblog.com/2013/04/5-common-mistakes-with-relcanonical.html?ref=frontendchecklist",
          },
        ],
        tools: null,
      },
      {
        title: "Language attribute",
        description:
          "The <code>lang</code> attribute of your website is specified and related to the language of the current page.",
        code: `
          <code> const a = 1 + 2; </code>
              `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Direction attribute",
        description:
          "The direction of lecture is specified on the html tag (It can be used on another HTML tag).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Alternate language",
        description:
          "The language tag of your website is specified and related to the language of the current page.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Conditional comments",
        description: "Conditional comments are present for IE if needed.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.HTML_TAGS],
        },
        documentation: [
          {
            title:
              "About conditional comments (Internet Explorer) - MSDN - Microsoft",
            source:
              "https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx?ref=frontendchecklist",
          },
        ],
        tools: null,
      },
      {
        title: "RSS feed",
        description:
          "If your project is a blog or has articles, an RSS link was provided.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Inline critical CSS",
        description: "The inline critical CSS is correctly injected in the HEAD.",
        longDescription:
          "The CSS critical (or above the fold) collects all the CSS used to render the visible portion of the page. It is embedded before your principal CSS call and between `<style></style>` in a single line (minified).",
        code: `
        <style>
          .red-div {
            background-color: red;
          }
        </style>
            `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.HTML_TAGS, TAGS.CSS, TAGS.PERFORMANCE],
        },
        documentation: [
          {
            title: "Critical by Addy Osmani on GitHub automates this.",
            source: "https://github.com/addyosmani/critical?ref=frontendchecklist",
          },
        ],
        tools: null,
      },
      {
        title: "CSS order",
        description: "All CSS files are loaded before any JavaScript files in the HEAD",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.META_TAGS, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Facebook Open Graph:",
        longDescription: "All Facebook Open Graph (OG) are tested and no one is missing or with a false information. Images need to be at least 600 x 315 pixels, although 1200 x 630 pixels is recommended. Using og:image:width and og:image:height will specify the image dimensions to the crawler so that it can render the image immediately without having to asynchronously download and process it.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.SOCIAL_MEDIA, TAGS.TESTING],
        },
        documentation: [
          {
            title: "A Guide to Sharing for Webmasters",
            source: "https://developers.facebook.com/docs/sharing/webmasters/?ref=frontendchecklist",
          },
          {
            title: "Best Practices - Sharing",
            source: "https://developers.facebook.com/docs/sharing/best-practices/?ref=frontendchecklist",
          },
        ],
        tools: [
          {
            title: "Test your page with the Facebook OG testing",
            source: "https://developers.facebook.com/tools/debug/?ref=frontendchecklist",
          },
        ],
      },
      {
        title: "Twitter Card",
        description: "",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.SOCIAL_MEDIA, TAGS.TESTING],
        },
        documentation: [
          {
            title: "Getting started with cards — Twitter Developers",
            source: "https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started?ref=frontendchecklist",
          },
        ],
        tools: [
          {
            title: "Test your page with the Twitter card validator",
            source: "https://cards-dev.twitter.com/validator?ref=frontendchecklist",
          },
        ],
      },
    ]
  }
]
