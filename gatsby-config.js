require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

const desc = `Hi, I'm Nathan! 👋
  Welcome to portfolio. Always trying to learn, always trying to be great. `;

const siteUrl = `https://www.shanko.dev`;
const title = 'Nathan Shanko';
const previewImage = 'https://images.ctfassets.net/tlzlztm3j5rl/41bUtaZHIXKZcKNhQfgCh6/41e92211dedd4ea249256de4e7ce5d45/SITE_PREVIEW.jpg'

module.exports = {
  siteMetadata: {
    title,
     meta: [
      {
        property: 'title',
        content: title,
      },
      {
        property: 'description',
        content: desc
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: siteUrl
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: desc
      },
      {
        property: 'og:image',
        content: previewImage
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:url',
        content: siteUrl
      },
      {
        property: 'twitter:title',
        content: title
      },
      {
        property: 'twitter:description',
        content: desc
      },
      {
        property: 'twitter:image',
        content: previewImage
      }
    ]
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
  ],
  
};
