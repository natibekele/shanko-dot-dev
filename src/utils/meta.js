const desc = `Hi, I'm Nathan! 👋 
  Welcome to portfolio. Always trying to learn, always trying to be great. `;

const siteUrl = `https://www.shanko.dev`;
const title = 'Nathan Shanko';
const previewImage = 'https://images.ctfassets.net/tlzlztm3j5rl/41bUtaZHIXKZcKNhQfgCh6/41e92211dedd4ea249256de4e7ce5d45/SITE_PREVIEW.jpg'


const meta = [
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

export default meta;