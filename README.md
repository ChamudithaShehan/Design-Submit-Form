# Custom Branding Studio | Logo & Cover Photo Ordering Portal

**Live Demo:** [Custom Branding Studio | Logo & Cover Photo Ordering Portal](https://design-submit-form.vercel.app/)

A modern, highly responsive single-page web application built to streamline the process of ordering custom brand identities. This portal allows clients to browse premium logo and cover photo design templates, customize them with their business details, and effortlessly submit their orders directly via WhatsApp.

## 🌟 Key Features

- **Interactive Design Gallery**: Browse beautifully rendered logo and cover photo design options with high-quality imagery.
- **Real-Time Selection Summary**: A sticky summary bar keeps track of selected designs and their total prices.
- **Bilingual Video Guide**: Embedded YouTube video instructions to help clients choose the right branding package (supported in English and Sinhala).
- **Customization Form**: An intuitive form for users to input their business name, tagline, color preferences, and even upload reference materials.
- **Direct WhatsApp Integration**: Automatically generates a formatted WhatsApp message with all the user's order details for instant submission.
- **Fully Responsive**: Optimized for all devices, from large desktop monitors to small mobile screens, ensuring a seamless user experience.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the application in action.

## ⚙️ Environment Configuration

To enable image uploads and configure the WhatsApp destination number, create a `.env.local` file in the root directory and add the following variables:

```env
# Required: The destination WhatsApp number for orders (format: Country Code + Number)
NEXT_PUBLIC_WHATSAPP_NUMBER=94*********

# Required: API key for ImgBB to handle image uploads
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key_here
```

## 🐳 Docker Deployment

Build and run using Docker Compose:

```bash
docker compose up -d --build
```

Access the portal at `http://localhost:3001`.

## 📁 Project Structure

- `app/` - Next.js App Router pages and layouts.
- `components/` - Reusable UI components (Header, DesignCard, CustomizationForm, etc.).
- `data/` - Static data models defining the available logo and cover designs.
- `public/` - Static assets, including custom logos and cover photos.

## 📝 License

This project is proprietary.
