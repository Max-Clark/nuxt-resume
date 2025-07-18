# Nuxt Resume

A modern, customizable resume website built with Nuxt 3 and Vue.js.
Create a professional, responsive resume that showcases your skills,
experience, and education with a clean, modern design.

## **WARNING**

When utilizing this repo, you may may add personally identifiable
information (PII) into your site. Be very careful when dealing with
this information! Certain provisions have been made to prevent accidental
exposure (e.g., .gitignore-ing resume data, disallowing search engine
indexing), however, this code provides no warranty for what data you put
into it or the result of doing so.

❌ DONT'S

- Do not add any PII into any file other than `data/resume.ts`
  - Do not modify .gitignore to allow `data/resume.ts` to be committed
- Do not add any PII that you would be unwilling to share to everyone
- Never commit any PII at any time. Git holds all commit history,
  and without special commands, that data will still be in the repo!

✅ DO'S

- Verify the changes for every commit. There are many tools on the
  internet that can help with this if you are not git savvy.
- Utilize secure CI/CD processes to store and extract your PII.
  - Alternatively, manually deploy your site

## Quick Start

1. **Clone or download** this repository
2. **Install dependencies** using your preferred package manager
3. **Edit your resume data** in `data/resume.ts`
4. **Run the development server** to see your changes
5. **Build and deploy!**

## Prerequisites

- Node.js 20+
- yarn (or your favorite package manager)

## Project Structure

```
nuxt-resume/
├── classes/                 # TypeScript classes/interfaces
├── components/              # Vue components for each resume section
├── data/
│   ├── resume.ts            # Your actual resume data (edit this!)
│   └── resume.example.ts    # Example/template data
├── pages/
│   └── index.vue            # Main resume page
└── assets/css/              # Global styles and customizations
```

## Adding Your Resume Data

The heart of customization is the `data/resume.ts` file. This file exports
a `resumeSections` array containing all your resume information. This file
is protected by the .gitignore to make sure you don't accidentally dox yourself!

### Step-by-Step Guide

1. **Open `data/resume.ts`** in your editor
2. **Update each section** with your information

### Customization Tips

- **Icons**: Use any [Heroicons](https://heroicons.com/) icon with the `i-heroicons-` prefix
- **Colors**: All colors use [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors) classes
- **Order**: Sections appear in the order defined in the `resumeSections` array

## Development

### Setup

Install dependencies:

```bash
yarn install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

### Static Site Generation Build

This project was built with static site generation in mind. Doing so allows
for serverless hosting (e.g., S3/CloudFront, Cloudflare Pages, GitHub Pages)
and can generally be hosted for free (within reason).

See [static site hosting](https://nuxt.com/docs/3.x/getting-started/deployment#static-hosting) for more info.

```bash
yarn generate
```

### Production Build

Build the application for production:

```bash
yarn build
```

### Preview Production Build

Locally preview production build:

```bash
yarn preview
```

### Preview Production Build

Locally preview production build:

```bash
yarn preview
```

## 🚀 Deployment

This was initially built to run as a static generated site, but nuxt sites
can be deployed on many different services.

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/3.x/getting-started/deployment)
for platform-specific instructions.

## 🤝 Contributing

Contributions are welcome! Contributors must follow the [code of conduct](./code-of-conduct.md)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📚 Additional Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Vue.js Guide](https://vuejs.org/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/) for icons
