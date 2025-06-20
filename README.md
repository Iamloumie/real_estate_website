# Loumie Homes - Real Estate Application

A modern, full-featured real estate website built with React.js and Next.js, showcasing rental homes and properties for sale with advanced filtering capabilities and detailed property views.

## 🏠 Features

- **Property Listings**: Browse both rental homes and properties for sale
- **Advanced Filtering**: Filter properties by price, location, property type, bedrooms, bathrooms, and more
- **Property Details**: Comprehensive property detail pages with full specifications
- **Image Carousel**: Interactive image gallery for each property listing
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Search Functionality**: Search properties by location, keywords, or specific criteria
- **Modern UI/UX**: Clean, intuitive interface built with modern design principles

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) - React framework with server-side rendering
- **UI Library**: [React.js](https://reactjs.org/) - Component-based user interface
- **CHAKRA UI**: (https://chakra-ui.com) - responsive user interface library for design and styling
- **Image Optimization**: Next.js Image component for optimized loading
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v13 or higher)
- chakra ui
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/realtor-app.git
   cd realtor-app
   ```

2. **Install dependencies**
   ```bash
   npm install next@12 react@18 react-dom@18 eslint-config-next@13 eslint@8   @chakra-ui/react   @emotion/react   @emotion/styled   axios framer-motion millify nprogress   react-horizontal-scrolling-menu react-icons --legacy-peer-deps

   # or

   yarn install next@12 react@18 react-dom@18 eslint-config-next@12 eslint@8   @chakra-ui/react   @emotion/react   @emotion/styled   axios framer-motion millify nprogress   react-horizontal-scrolling-menu react-icons --legacy-peer-deps
   ```


3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
real_estate_website/
├── assets/images          # contains the house and noresult image
├── components/          # Reusable React components
│   ├── Property/       # Property-related components
│   ├── SearchFilters/        # Filtering components
│   ├── ImageScrollbar/       # Image carousel component
│   └── Layout/         # Layout components
│   └── Footer/         # footer components
│   └── Navbar/         # Navbar components
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   ├── property/[id]    # Individual Property listing pages
│   └── search/      # property search page
│   └── _app/      # Main file linking all components and files
│   └── index/      # Home page
│   └── _document/      # NProgress header page
├── styles/             # CSS and styling files
├── utils/              # Utility functions
├── public/             # Static assets
```

## 🎯 Key Components

### Property Filtering
- **Location Filter**: Search by city, neighborhood, or ZIP code
- **Price Range**: Adjustable price sliders for rent/purchase
- **Property Type**: Houses, apartments, condos, townhouses
- **Specifications**: Bedrooms, bathrooms, square footage
- **Amenities**: Pool, garage, garden, etc.
- **Purpose**: Rent or Sale.


### Property Details Page
- High-resolution image carousel with thumbnail navigation
- Comprehensive property information and specifications
- Interactive map integration
- Similar properties recommendations

### Search & Browse
- Real-time search with autocomplete
- Sort options (price, date, popularity)
- Pagination for large result sets

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar filters
- **Tablet**: Collapsible filters and touch-friendly navigation
- **Mobile**: Bottom navigation and swipe gestures for image carousel

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Manual Deployment
```bash
npm run build
npm run export  # For static export if needed
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Real estate data provided by [Rapid API]
- Icons by [ React icons]
- Images from [google]

## 📞 Contact

Your Name - [@iamloumie](https://x.com/iamloumie?s=21&t=TV1CWqx5f-bQdR0wq3fXLw) - lawaladedamolaolumide@gmail.com

Project Link: [https://github.com/Iamloumie/real_estate_website](https://github.com/Iamloumie/real_estate_website)

Live Demo: [https://loumiehomes.vercel.app](https://loumiehomes.vercel.app)

---

⭐ Star this repository if you found it helpful!