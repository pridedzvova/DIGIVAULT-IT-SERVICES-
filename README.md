# DIGIVAULT IT SERVICES Website

A professional, responsive website for DIGIVAULT IT SERVICES built with pure HTML, CSS, and JavaScript.

## Features

### 🎨 Design Components
- **Responsive Navigation Bar** - Sticky header with hamburger menu for mobile
- **Hero Section** - Eye-catching banner with call-to-action button
- **Services Showcase** - Six service categories with icons and descriptions
- **Team Profiles** - Team member cards with roles and bios
- **Blog Section** - Latest articles and news
- **Contact Form** - Functional contact form with validation
- **Footer** - Social media links and copyright information

### ✨ Key Features
- ✅ Fully Responsive Design (Mobile, Tablet, Desktop)
- ✅ Smooth Scrolling Navigation
- ✅ Interactive Forms with Validation
- ✅ Hover Effects and Animations
- ✅ Modern Color Scheme
- ✅ SEO-Friendly Structure
- ✅ Fast Loading Performance

## File Structure

```
DIGIVAULT-IT-SERVICES/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # Documentation
```

## Services Offered

1. **Cybersecurity** - Advanced threat detection and compliance management
2. **Cloud Solutions** - Cloud migration and infrastructure management
3. **Network Management** - Network design, deployment, and monitoring
4. **IT Support** - Technical support and system maintenance
5. **Data Management** - Data storage, backup, and analytics
6. **IT Consulting** - Strategic IT planning and consultation

## Getting Started

### Option 1: Deploy with GitHub Pages (Recommended)
1. Go to repository Settings
2. Scroll to "GitHub Pages" section
3. Select `website-setup` branch as source
4. Your site will be live at `https://pridedzvova.github.io/DIGIVAULT-IT-SERVICES-`

### Option 2: Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/pridedzvova/DIGIVAULT-IT-SERVICES-.git
   ```
2. Open `index.html` in your web browser
3. Edit files with your preferred code editor

## Customization

### Update Company Information
Edit the following in `index.html`:
- Company name and contact details in the header
- Phone number, email, and address in contact section
- Team member names and roles

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Darker shade */
    --accent-color: #f59e0b;       /* Highlight color */
}
```

### Add More Team Members
Copy a `.team-member` div in the team section and update:
- Name
- Job title (`.role` class)
- Bio/description

### Add Blog Posts
Add new `.blog-card` articles to the blog section with:
- Publication date
- Article title
- Summary
- Link to full article

## Contact Form Setup

The contact form currently validates and displays submissions in the browser console. For production, you'll need:

### Option 1: Backend Service
Set up a backend endpoint to handle form submissions:
```javascript
// Update script.js to send to your backend
fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({...})
})
```

### Option 2: Email Service
Use a service like:
- Formspree
- Netlify Forms
- SendGrid
- AWS SES

## Performance Tips

- Images are loaded from CDN (Font Awesome icons)
- CSS and JavaScript are minified for production
- Lazy loading on scroll animations
- Mobile-optimized viewport settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization

- Semantic HTML5 structure
- Meta tags for viewport and charset
- Descriptive page title
- Proper heading hierarchy (h1, h2, h3)
- Alt text ready for images
- Open Graph meta tags (can be added)

## Future Enhancements

- [ ] Add blog post template system
- [ ] Integrate CMS for content management
- [ ] Add testimonials section
- [ ] Implement email notifications
- [ ] Add pricing plans section
- [ ] Create service detail pages
- [ ] Add portfolio/case studies
- [ ] Implement online booking system

## License

© 2026 DIGIVAULT IT SERVICES. All rights reserved.

## Contact

- **Email:** info@digivault.com
- **Phone:** +1 (555) 123-4567
- **Address:** 123 Tech Avenue, Innovation City, IC 12345

---

Built with ❤️ by DIGIVAULT IT SERVICES Team