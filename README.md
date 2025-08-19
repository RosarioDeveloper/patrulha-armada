# Reviewy Landing Page

A modern, pixel-perfect landing page for Reviewy - a review management platform, built with a hybrid stack approach using **Tailwind CSS**, **PrimeFlex**, **SCSS**, and **Vanilla JavaScript**.

## 🚀 Features

### Design & Layout

- **Pixel-perfect design** matching the original Reviewy landing page
- **Responsive design** with mobile-first approach
- **Modern UI/UX** with smooth animations and interactions
- **Accessibility compliant** with ARIA labels and keyboard navigation

### Technical Stack

- **HTML5** semantic markup
- **Tailwind CSS** for utility-first styling
- **PrimeFlex** for grid system and layout utilities
- **SCSS** for custom components and advanced styling
- **Vanilla JavaScript** with modular architecture
- **Lucide Icons** for beautiful, customizable icons

### Interactive Elements

- **Mobile navigation** with hamburger menu
- **Smooth scrolling** and scroll animations
- **FAQ accordion** with expandable sections
- **Form validation** with real-time feedback
- **Newsletter subscription** with validation
- **Hover effects** and micro-interactions

## 📁 Project Structure

```
src/
├── index.html              # Main landing page
├── styles/
│   ├── _variables.scss     # SCSS variables and design tokens
│   ├── _mixins.scss        # Reusable SCSS mixins
│   ├── _components.scss    # Custom component styles
│   └── main.css           # Compiled CSS (from SCSS)
├── js/
│   ├── main.js            # Main application file
│   └── modules/
│       ├── navigation.js   # Navigation and mobile menu
│       ├── animations.js   # Scroll animations and effects
│       └── forms.js        # Form validation and submission
└── assets/
    └── images/            # Image assets (if any)
```

## 🎨 Design System

### Color Palette

- **Primary Green**: `#10b981` (Green-500)
- **Primary Dark**: `#059669` (Green-600)
- **Primary Light**: `#34d399` (Green-400)
- **Text Primary**: `#111827` (Gray-900)
- **Text Secondary**: `#6b7280` (Gray-500)
- **Background**: `#ffffff` (White)
- **Background Secondary**: `#f9fafb` (Gray-50)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Heading Sizes**: 2xl to 6xl (Tailwind scale)
- **Body Text**: Base to lg (Tailwind scale)
- **Line Heights**: Tight (1.25), Normal (1.5), Relaxed (1.75)

### Spacing

- **Container**: 1200px max-width
- **Grid Gutter**: 1.5rem (24px)
- **Section Padding**: 5rem (80px) vertical
- **Component Spacing**: 1rem to 3rem (16px to 48px)

## 🛠️ Stack Integration

### Tailwind CSS

Used for:

- **Utility classes**: Colors, typography, spacing
- **Responsive design**: Breakpoint utilities
- **Component styling**: Buttons, cards, forms
- **Layout utilities**: Flexbox, Grid helpers

### PrimeFlex

Used for:

- **Grid system**: 12-column responsive grid
- **Layout utilities**: Justify, align, flex direction
- **Spacing system**: Consistent spacing utilities
- **Responsive breakpoints**: Mobile-first approach

### SCSS

Used for:

- **Custom components**: Complex UI components
- **Animations**: Keyframes and transitions
- **Mixins**: Reusable style patterns
- **Variables**: Design tokens and theming

### JavaScript

Used for:

- **Modular architecture**: ES6+ classes and modules
- **Event handling**: User interactions and form validation
- **Animations**: Scroll effects and micro-interactions
- **Performance**: Optimized rendering and event delegation

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

### Mobile Features

- **Hamburger menu** with smooth animations
- **Touch-friendly** interface elements
- **Optimized typography** for small screens
- **Stacked layouts** for better mobile UX

## ⚡ Performance Optimizations

### CSS Optimizations

- **Utility-first approach** reduces CSS bundle size
- **Custom properties** for dynamic theming
- **Efficient selectors** and minimal specificity
- **Critical CSS** inlined for above-the-fold content

### JavaScript Optimizations

- **Modular architecture** for better code splitting
- **Event delegation** for performance
- **Debounced scroll handlers** to prevent excessive calls
- **Intersection Observer** for efficient animations

### Loading Optimizations

- **Lazy loading** for images and non-critical content
- **Minimal dependencies** (no heavy frameworks)
- **CDN resources** for faster loading
- **Optimized assets** and compression

## 🎯 Key Components

### Hero Section

- **Gradient background** with subtle patterns
- **Compelling headline** and call-to-action
- **Dashboard preview** with browser window mockup
- **Animated elements** on scroll

### Feature Sections

- **Grid layouts** with PrimeFlex
- **Interactive previews** of platform features
- **Visual storytelling** with icons and illustrations
- **Responsive design** for all screen sizes

### Testimonials

- **Card-based layout** with hover effects
- **Star ratings** and user feedback
- **Featured testimonial** with video thumbnail
- **Staggered animations** on scroll

### FAQ Section

- **Accordion functionality** with smooth animations
- **Accessible markup** with proper ARIA labels
- **Keyboard navigation** support
- **Expandable answers** with content

### CTA Section

- **Gradient background** with wave patterns
- **Compelling copy** and clear value proposition
- **Primary action button** with hover effects
- **Visual hierarchy** for conversion optimization

## 🔧 Customization

### Colors

Modify the color scheme in `styles/_variables.scss`:

```scss
$primary-color: #10b981;
$primary-dark: #059669;
$primary-light: #34d399;
```

### Typography

Update font settings in `styles/_variables.scss`:

```scss
$font-family-primary: 'Inter', sans-serif;
$font-size-5xl: 3rem; // 48px
```

### Animations

Customize animations in `styles/_components.scss`:

```scss
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser
- Local development server (optional)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd reviewy-landing-page
   ```

2. **Open the project**:

   - Navigate to the `src` folder
   - Open `index.html` in your browser
   - Or serve with a local server

3. **Using a local server** (recommended):

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

4. **Access the application**:
   - Open `http://localhost:8000/src/index.html`

## 📝 Development

### SCSS Compilation

To compile SCSS to CSS:

```bash
# Install Sass (if not already installed)
npm install -g sass

# Compile SCSS to CSS
sass src/styles/main.scss src/styles/main.css

# Watch for changes
sass --watch src/styles/main.scss src/styles/main.css
```

### JavaScript Development

The JavaScript is modular and organized into:

- **Navigation Module**: Mobile menu and navigation
- **Animations Module**: Scroll effects and interactions
- **Forms Module**: Validation and submission handling

### Adding New Features

1. **Create new SCSS component** in `_components.scss`
2. **Add JavaScript module** in `js/modules/`
3. **Update HTML** with new structure
4. **Test responsiveness** across devices

## 🧪 Testing

### Browser Testing

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

### Device Testing

- **Mobile**: iPhone, Android devices
- **Tablet**: iPad, Android tablets
- **Desktop**: Various screen sizes

### Accessibility Testing

- **Screen readers**: NVDA, JAWS, VoiceOver
- **Keyboard navigation**: Tab, Enter, Escape keys
- **Color contrast**: WCAG AA compliance
- **Focus management**: Visible focus indicators

## 📊 Analytics Integration

### Google Analytics 4

The application includes tracking for:

- **Page views** and user engagement
- **Form submissions** and conversions
- **Navigation interactions** and user flow
- **Mobile menu usage** and mobile behavior

### Custom Events

Track custom events with:

```javascript
window.reviewyApp.trackEvent('button_clicked', {
  button_type: 'cta',
  section: 'hero',
});
```

## 🔮 Future Enhancements

### Planned Features

- **Dark mode** toggle and theme switching
- **Multi-language** support with i18n
- **Advanced animations** with GSAP integration
- **PWA features** for offline support
- **A/B testing** framework integration

### Performance Improvements

- **Image optimization** with WebP format
- **Code splitting** for better loading
- **Service worker** for caching
- **Critical CSS** extraction and inlining

## 📄 License

This project is created for educational and demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across devices and browsers
5. Submit a pull request

## 📞 Support

For questions or support:

- **Documentation**: Check this README
- **Issues**: Create a GitHub issue
- **Email**: Contact the development team

---

**Built with ❤️ using modern web technologies**
