# Project Design Requirements (PDR)
## Family Business Website Redesign

### Executive Summary
This PDR outlines the requirements for redesigning the family business website to incorporate modern 3D animations, parallax effects, and a "wow factor" similar to the Mont-Fort Group website, while maintaining the professional corporate identity of the current Energi website.

---

## 1. Current State Analysis

### 1.1 Client Company Profile: Energi

**Company Overview:**
- **Company Name**: Energi
- **Tagline**: "Delivering Heat, Light, Mobility"
- **Industry**: Midstream and downstream energy company
- **Mission**: Building sustainable, independent liquid storage terminals, infrastructure, and logistics
- **Founded**: Over 30 years ago
- **Geographic Presence**: MENA, Far East, and East Africa

**Key Business Statistics:**
- **Storage Capacity**: 260,000 m³
- **Fleet**: 90+ distribution vehicles
- **2021 Distribution**: 10+ Million Metric Tons (MMTs) product distributed
- **Steel Processing**: 20,000 MTs processed in 2021
- **Regional Storage**: 2.8 million barrels across MENA, Far East, and East Africa
- **Engineering Facility**: Located in UAE
- **Expansion Plans**: Service stations in Pakistan and Africa

**Business Segments:**
1. **Trading** - Energy commodity trading operations
2. **Storage** - Liquid storage terminals and infrastructure
3. **Logistics** - Distribution and transportation services
4. **Retail** - Consumer-facing energy services
5. **Engineering** - Technical infrastructure development
6. **Responsibility** - Sustainability and CSR initiatives

**Sustainability Framework:**
- Health and Safety
- Environmental Protection
- Community Engagement
- Human Rights
- Corporate Social Responsibility

**Digital Presence:**
- Website: energi.ae
- Social Media: YouTube, LinkedIn, Instagram, Facebook

### 1.2 Current Website (energi.ae) Analysis
**Strengths:**
- Clean, modern corporate design
- Professional color scheme (green and white)
- Mobile-responsive layout
- Clear value proposition: "Delivering Heat, Light, Mobility"
- Well-organized content hierarchy
- Comprehensive business segment coverage
- Strong statistical presentation
- Multi-regional presence clearly communicated

**Areas for Enhancement:**
- Lacks interactive animations and 3D elements
- Traditional corporate design without modern visual effects
- Limited parallax or scroll-triggered animations
- Could benefit from more engaging visual storytelling
- Statistics presentation could be more dynamic
- Business segments could benefit from interactive elements

### 1.3 Inspiration Website (mont-fort.com)
**Key Features to Emulate:**
- Clean, minimalist aesthetic with modern corporate identity
- Scroll-triggered reveal animations
- View transition animations using Astro.js
- Subtle parallax effects and smooth page transitions
- Professional yet engaging user experience
- Global corporate branding approach

---

## 2. Design Requirements

### 2.1 Visual Design Goals
- **Wow Factor**: Implement 3D animations and parallax effects that create visual impact
- **Professional Identity**: Maintain corporate credibility while adding modern flair
- **User Experience**: Ensure animations enhance rather than distract from content
- **Brand Consistency**: Preserve existing brand colors and messaging
- **Mobile Optimization**: Ensure all effects work smoothly on mobile devices

### 2.2 Core Animation Features
1. **3D Background Elements**
   - Animated 3D backgrounds using Vanta.js effects
   - Interactive polygon water backgrounds with ripple effects
   - Colored fog or cloud animations
   - Flying particles or geometric shapes

2. **Parallax Scrolling Effects**
   - Multi-layer parallax backgrounds
   - Scroll-triggered element animations
   - Smooth transitions between sections
   - Depth-based movement effects

3. **Interactive Elements**
   - Hover effects on navigation and buttons
   - Mouse-following animations
   - Click-triggered 3D transformations
   - Loading animations with 3D elements

---

## 3. Technical Implementation Strategy

### 3.1 Recommended Technology Stack

**Primary Animation Libraries:**
1. **GSAP (GreenSock Animation Platform)** - Industry standard for high-performance animations
   - Excellent for parallax effects and scroll-triggered animations
   - Superior performance and browser compatibility
   - Professional-grade tools for complex animations

2. **Three.js** - For 3D graphics and animations
   - WebGL-based 3D rendering
   - Extensive documentation and community support
   - Perfect for creating 3D backgrounds and interactive elements

3. **Vanta.js** - For pre-built 3D backgrounds
   - Easy implementation with minimal code
   - Multiple pre-defined effects (fog, birds, water, etc.)
   - Built on Three.js with optimized performance

### 3.2 Alternative Modern Solutions
- **Motion One** - Modern web animation library using Web Animations API
- **Theatre.js** - Visual editor for creating expressive animations
- **Babylon.js** - Comprehensive 3D engine for complex 3D scenes

### 3.3 Pre-built Solutions
**Template Sources:**
- Colorlib parallax templates (25+ options for 2025)
- FlowRadar Three.js Webflow cloneables
- Envato parallax website templates

**Implementation Frameworks:**
- React/Vue.js integration with animation libraries
- WordPress/Divi integration for CMS-based approach
- Pure HTML/CSS/JS for maximum performance

---

## 4. Specific Feature Requirements

### 4.1 Homepage Enhancements
- **Hero Section**: 3D animated background with Energi logo overlay and tagline "Delivering Heat, Light, Mobility"
- **Statistics Section**: Animated counters showcasing key metrics:
  - 260,000 m³ storage capacity
  - 90+ distribution vehicles
  - 10+ Million Metric Tons distributed
  - 2.8 million barrels regional storage
- **Business Segments Section**: Interactive 3D cards for each of the 6 business segments:
  - Trading (with trading floor animations)
  - Storage (with tank/terminal visualizations)
  - Logistics (with vehicle/transport animations)
  - Retail (with consumer service visuals)
  - Engineering (with technical infrastructure)
  - Responsibility (with sustainability icons)
- **Geographic Presence**: Interactive 3D map showing MENA, Far East, and East Africa operations

### 4.2 Navigation & Interactions
- **Smooth Scrolling**: Implement smooth scroll behavior between sections
- **Menu Animations**: Sliding or morphing navigation menu
- **Page Transitions**: Smooth transitions between pages
- **Loading Animations**: Custom 3D loading screens

### 4.3 Content Sections
- **Business Segments**: 3D icons or illustrations for each of the 6 services
- **Company Story**: Parallax storytelling highlighting 30+ years of experience
- **Sustainability Section**: Interactive visualization of the 5-pillar framework
- **Contact Section**: Interactive regional map with office locations
- **Footer**: Animated company information with social media integration (YouTube, LinkedIn, Instagram, Facebook)

---

## 5. Performance Considerations

### 5.1 Optimization Guidelines
- **Mobile Performance**: Implement fallbacks for low-performance devices
- **Loading Strategy**: Progressive loading of 3D assets
- **File Size**: Optimize 3D models and textures (target ~120kb for Vanta.js)
- **Browser Compatibility**: Ensure fallbacks for older browsers

### 5.2 Technical Constraints
- Limit to 1-2 intensive WebGL effects per page
- Implement device detection for mobile optimization
- Use hardware acceleration where available
- Provide option to disable animations for accessibility

---

## 6. Implementation Timeline

### Phase 1: Foundation (Week 1-2)
- Set up development environment
- Implement basic GSAP and Three.js integration
- Create responsive layout structure

### Phase 2: Core Animations (Week 3-4)
- Implement 3D background effects using Vanta.js
- Add parallax scrolling functionality
- Create scroll-triggered animations

### Phase 3: Interactive Elements (Week 5-6)
- Add hover effects and interactive components
- Implement navigation animations
- Optimize for mobile devices

### Phase 4: Testing & Refinement (Week 7-8)
- Cross-browser testing
- Performance optimization
- User experience refinements

---

## 7. Budget Considerations

### 7.1 Development Costs
- **GSAP License**: $199/year for commercial use
- **Premium Templates**: $50-200 for high-quality templates
- **Hosting**: Enhanced hosting for 3D content delivery
- **Development Time**: 6-8 weeks for full implementation

### 7.2 Maintenance Requirements
- Regular updates for animation libraries
- Performance monitoring and optimization
- Browser compatibility updates
- Content management system integration

---

## 8. Success Metrics

### 8.1 User Experience Metrics
- **Engagement Time**: Target 50% increase in average session duration
- **Bounce Rate**: Reduce bounce rate by 30%
- **Mobile Performance**: Maintain loading times under 3 seconds
- **User Feedback**: Positive response to visual enhancements

### 8.2 Technical Performance
- **Core Web Vitals**: Maintain good scores despite animations
- **Browser Compatibility**: 95% compatibility across modern browsers
- **Mobile Optimization**: Smooth performance on mid-range devices
- **SEO Impact**: Maintain or improve search rankings

---

## 9. Recommendations

### 9.1 Immediate Actions
1. **Start with Vanta.js**: Implement 3D backgrounds as quick wins
2. **GSAP Integration**: Add scroll-triggered animations to existing content
3. **Mobile-First**: Ensure all animations work on mobile devices
4. **Performance Monitoring**: Set up metrics to track loading times

### 9.2 Long-term Strategy
1. **Content Strategy**: Develop content that leverages 3D capabilities
2. **Brand Evolution**: Evolve brand identity to match modern aesthetic
3. **User Testing**: Conduct A/B testing for animation effectiveness
4. **Continuous Improvement**: Regular updates based on user feedback

---

## 10. Conclusion

This PDR provides a comprehensive roadmap for transforming the current corporate website into a modern, engaging platform with 3D animations and parallax effects. The recommended approach balances visual impact with performance, ensuring the website maintains its professional credibility while adding the desired "wow factor."

**Key Success Factors:**
- Maintain professional corporate identity
- Implement performance-optimized animations
- Ensure mobile compatibility
- Focus on user experience enhancement
- Use proven, industry-standard technologies

The combination of GSAP, Three.js, and Vanta.js provides a robust foundation for creating the desired visual effects while maintaining the performance and reliability expected from a corporate website.