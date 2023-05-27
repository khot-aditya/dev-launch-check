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
    title: "Head",
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
            source:
              "https://css-tricks.com/favicon-quiz/?ref=frontendchecklist",
          },
          {
            title: "PNG favicons - caniuse",
            source:
              "https://caniuse.com/#feat=link-icon-png?ref=frontendchecklist",
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
            title:
              "5 common mistakes with rel=canonical - Google Webmaster Blog",
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
        description:
          "The inline critical CSS is correctly injected in the HEAD.",
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
            source:
              "https://github.com/addyosmani/critical?ref=frontendchecklist",
          },
        ],
        tools: null,
      },
      {
        title: "CSS order",
        description:
          "All CSS files are loaded before any JavaScript files in the HEAD",
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
        longDescription:
          "All Facebook Open Graph (OG) are tested and no one is missing or with a false information. Images need to be at least 600 x 315 pixels, although 1200 x 630 pixels is recommended. Using og:image:width and og:image:height will specify the image dimensions to the crawler so that it can render the image immediately without having to asynchronously download and process it.",
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
            source:
              "https://developers.facebook.com/docs/sharing/webmasters/?ref=frontendchecklist",
          },
          {
            title: "Best Practices - Sharing",
            source:
              "https://developers.facebook.com/docs/sharing/best-practices/?ref=frontendchecklist",
          },
        ],
        tools: [
          {
            title: "Test your page with the Facebook OG testing",
            source:
              "https://developers.facebook.com/tools/debug/?ref=frontendchecklist",
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
            source:
              "https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started?ref=frontendchecklist",
          },
        ],
        tools: [
          {
            title: "Test your page with the Twitter card validator",
            source:
              "https://cards-dev.twitter.com/validator?ref=frontendchecklist",
          },
        ],
      },
    ],
  },
  {
    title: "HTML",
    content: [
      {
        title: "HTML5 Semantic Elements",
        description:
          "HTML5 Semantic Elements are used appropriately (header, section, footer, main...).",
        code: `
        
              `,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.BEST_PRACTICES, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: [
          {
            title: "HTML Reference",
            source: "http://htmlreference.io/?ref=frontendchecklist",
          },
        ],
      },
      {
        title: "Error pages",
        description: "Error 404 page and 5xx exist",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.BEST_PRACTICES, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Noopener",
        description:
          'In case you are using external links with target="_blank", your link should have a rel="noopener" attribute to prevent tab nabbing. If you need to support older versions of Firefox, use rel="noopener noreferrer"',
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.BEST_PRACTICES, TAGS.HTML_TAGS, TAGS.SECURITY],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Clean up comments",
        description:
          "Unnecessary code needs to be removed before sending the page to production.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.BEST_PRACTICES, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "W3C compliant",
        description:
          "All pages need to be tested with the W3C validator to identify possible issues in the HTML code.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.HTML_TAGS, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: [
          {
            title: "W3C validator",
            source: "https://validator.w3.org/?ref=frontendchecklist",
          },
        ],
      },
      {
        title: "HTML Lint",
        description:
          "I use tools to help me analyze any issues I could have on my HTML code.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.HTML_TAGS, TAGS.TESTING],
        },
        documentation: null,
        tools: [
          {
            title: "Dirty markup",
            source: "https://dirtymarkup.com/?ref=frontendchecklist",
          },
          {
            title: "webhint",
            source: "https://webhint.io/?ref=frontendchecklist",
          },
        ],
      },
      {
        title: "Link checker",
        description:
          "There are no broken links in my page, verify that you don't have any 404 error.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.HTML_TAGS, TAGS.TESTING],
        },
        documentation: null,
        tools: [
          {
            title: "W3C Link Checker",
            source: "https://validator.w3.org/checklink?ref=frontendchecklist",
          },
        ],
      },
      {
        title: "Adblockers test",
        description:
          "Your website shows your content correctly with adblockers enabled",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.HTML_TAGS, TAGS.TESTING],
        },
        documentation: [
          {
            title: "",
            source: "",
          },
        ],
        tools: null,
      },
    ],
  },
  {
    title: "web fonts",
    content: [
      {
        title: "Webfont format",
        description:
          "WOFF, WOFF2 and TTF are supported by all modern browsers.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.WEB_FONT],
        },
        documentation: [
          {
            title: "WOFF - Web Open Font Format - Caniuse",
            source: "https://caniuse.com/#feat=woff?ref=frontendchecklist",
          },
          {
            title: "WOFF 2.0 - Web Open Font Format - Caniuse",
            source: "https://caniuse.com/#feat=woff2?ref=frontendchecklist",
          },
          {
            title: "TTF/OTF - TrueType and OpenType font support",
            source: "https://caniuse.com/#feat=ttf?ref=frontendchecklist",
          },
          {
            title: "Using @font-face - CSS-Tricks",
            source:
              "https://css-tricks.com/snippets/css/using-font-face/?ref=frontendchecklist",
          },
        ],
        tools: null,
      },
      {
        title: "Webfont size",
        description:
          "Webfont sizes don't exceed 100 KB (all variants included).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.WEB_FONT],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Webfont loader",
        description: "Control loading behavior with a webfont loader.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.WEB_FONT],
        },
        documentation: [
          {
            title: "Typekit Web Font Loader",
            source:
              "https://github.com/typekit/webfontloader?ref=frontendchecklist",
          },
        ],
        tools: null,
      },
    ],
  },
  {
    title: "CSS",
    content: [
      {
        title: "Responsive Web Design",
        description: "The website is using responsive web design.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "CSS Print",
        description:
          "A print stylesheet is provided and is correct on each page.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.CSS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Unique ID",
        description: "If IDs are used, they are unique to a page.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Reset CSS",
        description:
          "A CSS reset (reset, normalize or reboot) is used and up to date.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "JS prefix",
        description:
          "All classes (or id- used in JavaScript files) begin with js- and are not styled into the CSS files.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.JAVASCRIPT, TAGS.BEST_PRACTICES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Embedded or inline CSS",
        description:
          "Avoid at all cost embeding CSS in <style> tags or using inline CSS",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Vendor prefixes",
        description:
          "CSS vendor prefixes are used and are generated accordingly with your browser support compatibility.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Concatenation",
        description:
          "CSS files are concatenated in a single file (Not for HTTP/2).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS, TAGS.PERFORMANCE],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Minification",
        description: "All CSS files are minified.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS, TAGS.PERFORMANCE],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Non-blocking",
        description:
          "CSS files need to be non-blocking to prevent the DOM from taking time to load.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.CSS, TAGS.PERFORMANCE],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Stylelint",
        description: "All CSS or SCSS files are without any errors.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS, TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Responsive web design",
        description: "All pages were tested with the correct breakpoints.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS, TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "CSS Validator",
        description: "The CSS was tested and pertinent errors were corrected.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.CSS, TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Desktop Browsers",
        description:
          "All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, EDGE...)",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS, TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Mobile Browsers",
        description:
          "All pages were tested on all current mobile browsers (Native browser, Chrome, Safari...)",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS, TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "OS",
        description:
          "All pages were tested on all current OS (Windows, Android, iOS, Mac...)",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS, TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Reading direction",
        description:
          "All pages need to be tested for LTR and RTL languages if they need to be supported.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.CSS, TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
    ],
  },
  {
    title: "javascript",
    content: [
      {
        title: "JavaScript Inline",
        description:
          "You don't have any JavaScript code inline (mixed with your HTML code).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.JAVASCRIPT],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Concatenation",
        description: "JavaScript files are concatenated.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.JAVASCRIPT],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Minification",
        description:
          "JavaScript files are minified (you can add the .min suffix).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.JAVASCRIPT],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "JavaScript security:",
        description: "",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.JAVASCRIPT, TAGS.SECURITY],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "noscript tag",
        description:
          " Use `<noscript>` tag in the HTML body if a script type on the page is unsupported or if scripting is currently turned off in the browser. This will be helpful in client-side rendering heavy apps such as React.js.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.JAVASCRIPT],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Non-blocking",
        description:
          "JavaScript files are loaded asynchronously using async or deferred using defer attribute.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.JAVASCRIPT, TAGS.PERFORMANCE],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Modernizer",
        description:
          "If you need to target some specific features you can use a custom Modernizr to add classes in your <html> tag.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.JAVASCRIPT],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "ESLint",
        description:
          "No errors are flagged by ESLint (based on your configuration or standards rules).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.JAVASCRIPT, TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
    ],
  },
  {
    title: "Images",
    content: [
      {
        title: "Optimization",
        description:
          "All images are optimized to be rendered in the browser. WebP format could be used for critical pages (like Homepage)",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.IMAGES, TAGS.BEST_PRACTICES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Picture/Srcset",
        description:
          "You use picture/srcset to provide the most appropriate image for the current viewport of the user.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.IMAGES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Retina",
        description:
          "You provide layout images 2x or 3x, support retina display.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.IMAGES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Sprite",
        description:
          "Small images are in a sprite file (in the case of icons, they can be in an SVG sprite image).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.IMAGES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Width and Height",
        description:
          "Set width and height attributes on <img> if the final rendered image size is known (can be omitted for CSS sizing).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.IMAGES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Alternative text",
        description:
          "All <img> have an alternative text which describe the image visually.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.IMAGES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Lazy loading",
        description:
          "Images are lazyloaded (A noscript fallback is always provided).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.IMAGES, TAGS.PERFORMANCE],
        },
        documentation: null,
        tools: null,
      },
    ],
  },
  {
    title: "Accessibility",
    content: [
      {
        title: "Progressive enhancement",
        description:
          "Major functionality like main navigation and search should work without JavaScript enabled.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.BEST_PRACTICES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Color contrast",
        description:
          "Color contrast should at least pass WCAG AA (AAA for mobile).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.BEST_PRACTICES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "H1",
        description:
          "All pages have an H1 which is not the title of the website.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.BEST_PRACTICES, TAGS.SEO],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Headings",
        description:
          "Headings should be used properly and in the right order (H1 to H6).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.BEST_PRACTICES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Specific HTML5 input types are used",
        description:
          "This is especially important for mobile devices that show customized keypads and widgets for different types.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.BEST_PRACTICES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Label",
        description:
          "A label is associated with each input form element. In case a label can't be displayed, use aria-label instead.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.BEST_PRACTICES, TAGS.SEO],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Accessibility standards testing",
        description:
          "Use the WAVE tool to test if your page respects the accessibility standards.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Keyboard navigation",
        description:
          "Test your website using only your keyboard in a previsible order. All interactive elements are reachable and usable.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Screen reader",
        description:
          "All pages were tested in two or more screen readers (such as JAWS, VoiceOver, and NVDA).",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Focus style",
        description:
          "If the focus is disabled, it is replaced by visible state in CSS.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.BEST_PRACTICES],
        },
        documentation: null,
        tools: null,
      },
    ],
  },
  {
    title: "Performance",
    content: [
      {
        title: "Page weight",
        description: "The weight of each page is between 0 and 500 KB.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.PERFORMANCE],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Minified HTML",
        description: "Your HTML is minified.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.PERFORMANCE, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Lazy loading",
        description:
          "Images, scripts and CSS need to be lazy loaded to improve the response time of the current page (See details in their respective sections)",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.PERFORMANCE],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Cookie size",
        description:
          "If you are using cookies be sure each cookie doesn't exceed 4096 bytes and your domain name doesn't have more than 20 cookies.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.BEST_PRACTICES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Third party components",
        description: "",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.BEST_PRACTICES],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "DNS resolution",
        description:
          "DNS of third-party services that may be needed are resolved in advance during idle time using dns-prefetch.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.REQUESTS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Preconnect",
        description:
          "DNS lookup, TCP handshake and TLS negotiation with services that will be needed soon is done in advance during idle time using preconnect.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.REQUESTS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Prefetching",
        description:
          "Resources that will be needed soon (e.g. lazy loaded images) are requested in advance during idle time using prefetch.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.REQUESTS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Preloading",
        description:
          "Resources needed in the current page (e.g. scripts placed at the end of <body>) in advance using preload.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.LOW,
          tags: [TAGS.REQUESTS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Google PageSpeed",
        description:
          "All your pages were tested (not only the homepage) and have a score of at least 90/100.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
    ],
  },
  {
    title: "SEO",
    content: [
      {
        title: "Google Analytics",
        description: "Google Analytics is installed and correctly configured.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.SEO],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Headings logic",
        description:
          "Heading text helps to understand the content in the current page.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.SEO, TAGS.ACCESSIBILITY, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "sitemap.xml",
        description:
          "A sitemap.xml exists and was submitted to Google Search Console.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.SEO],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "robots.txt",
        description: "The robots.txt is not blocking webpages.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.SEO, TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Structured Data",
        description:
          "Pages using structured data are tested and are without errors. Structured data helps crawlers understand the content in the current page.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.HIGH,
          tags: [TAGS.SEO, TAGS.TESTING],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Sitemap HTML",
        description:
          "An HTML sitemap is provided and is accessible via a link in the footer of your website.",
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.SEO, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
      {
        title: "Pagination link tags",
        description:
          'Provide rel="prev" and rel="next" to indicate paginated content.',
        code: null,
        meta: {
          isChecked: false,
          isHidden: false,
          priority: PRIORITY.MEDIUM,
          tags: [TAGS.SEO, TAGS.HTML_TAGS],
        },
        documentation: null,
        tools: null,
      },
    ],
  },
];
