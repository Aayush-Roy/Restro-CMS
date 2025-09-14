# WorkManage - Full-Stack CMS Website

A modern, production-ready task management platform built with Next.js 14+ and PayloadCMS.

## 🚀 Features

- **Frontend**: Next.js 14+ with App Router (JavaScript)
- **Backend**: PayloadCMS with MongoDB
- **Styling**: TailwindCSS with animations
- **Multi-language**: English + Hindi support
- **SEO**: Complete optimization with dynamic meta tags
- **UI**: Modern, responsive design matching provided mockup
- **CMS**: Block-based content management

## 📁 Project Structure

```
restroworks-cms/
├── frontend/                 # Next.js frontend application
│   ├── app/
│   │   ├── [locale]/        # Internationalized routes
│   │   ├── components/      # React components
│   │   ├── globals.css      # Global styles
│   │   ├── sitemap.js       # Dynamic sitemap
│   │   └── robots.js        # SEO robots file
│   ├── public/              # Static assets
│   ├── next.config.js       # Next.js configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── package.json         # Frontend dependencies
├── backend/                 # PayloadCMS backend
│   ├── src/
│   │   ├── collections/     # Payload collections
│   │   ├── blocks/          # Content blocks
│   │   ├── globals/         # Global settings
│   │   └── payload.config.js # Payload configuration
│   ├── server.js           # Express server
│   └── package.json        # Backend dependencies
└── README.md
```

## 🛠️ Quick Start

### Prerequisites

- Node.js 16+ and npm
- MongoDB (local or MongoDB Atlas)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/workmanage
   PAYLOAD_SECRET=your-secret-key-here
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   ADMIN_EMAIL=admin@workmanage.com
   ADMIN_PASSWORD=admin123
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The CMS admin panel will be available at: `http://localhost:3001/admin`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The website will be available at: `http://localhost:3000`

## 🎨 Design Features

### UI Components
- Modern gradient hero section
- Animated statistics counters
- Interactive pricing plans
- Responsive navigation with mobile menu
- Language switcher dropdown
- Contact form with validation

### Animations
- Scroll-triggered reveal animations
- Hover effects on cards and buttons
- Smooth transitions between states
- Loading animations
- Floating elements

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
- Flexible grid layouts
- Touch-friendly interactions

## 🌐 Multi-language Support

### Supported Languages
- English (en) - Default
- Hindi (hi)

### Implementation
- Dynamic routing with `[locale]` folder
- Localized content in PayloadCMS
- Language switcher component
- Translated UI text and content

### Adding New Languages
1. Update `locales` array in `payload.config.js`
2. Add translations to component files
3. Update language switcher options

## 🔧 CMS Configuration

### Collections

**Pages**
- Dynamic page creation with blocks
- SEO meta fields
- Multi-language content
- Draft/published status

**Media**
- Image and video uploads
- Alt text for accessibility
- Focal point for cropping
- Localized captions

**Testimonials**
- Customer reviews and ratings
- Profile pictures
- Company information
- Featured testimonials

**Features**
- Product feature management
- Icon selection
- Categorization
- Display order

**Contacts**
- Form submissions
- Status tracking
- Assignment to team members
- Priority levels

### Content Blocks

**Hero Block**
- Main title and highlight text
- Call-to-action buttons
- Background images
- Social proof metrics

**Feature List Block**
- Configurable feature grid
- Icon and color selection
- Multiple layout options

**Testimonial Block**
- Customer testimonials
- Star ratings
- Profile information

**CTA Block**
- Call-to-action sections
- Background customization
- Feature highlights

## 📈 SEO Optimization

### Features
- Dynamic meta tags from CMS
- Open Graph and Twitter Cards
- Structured data for testimonials
- Automatic sitemap generation
- Robots.txt configuration
- Image alt text requirements

### Best Practices
- Semantic HTML structure
- Proper heading hierarchy
- Fast loading times
- Mobile-friendly design
- Accessibility compliance

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
```

### Backend (Heroku/Railway/DigitalOcean)
```bash
cd backend
npm run build
npm start
```

### Environment Variables
Set the following variables in your deployment platform:
- `MONGODB_URI`
- `PAYLOAD_SECRET`
- `FRONTEND_URL`
- `NODE_ENV=production`

## 🛠️ Development

### Code Structure
- **Modular components**: Each component focuses on a single responsibility
- **Separation of concerns**: Clear distinction between UI, logic, and data
- **Reusable utilities**: Shared functions and configurations
- **Type safety**: Proper validation and error handling

### Performance Optimizations
- Next.js Image component for optimized images
- Lazy loading for components
- Efficient MongoDB queries
- Static generation where appropriate
- Proper caching headers

## 📝 Content Management

### Admin Interface
- User-friendly CMS dashboard
- Drag-and-drop page builder
- Real-time preview
- Version control with drafts
- Media library management

### Workflow
1. Create/edit content in PayloadCMS admin
2. Use block-based page builder
3. Preview changes before publishing
4. Frontend automatically reflects updates

## 🔒 Security

### Features
- CORS configuration
- CSRF protection
- Input validation
- File upload restrictions
- Role-based access control

### Best Practices
- Environment variable protection
- Secure authentication
- Regular security updates
- Input sanitization



## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ by Aayush
