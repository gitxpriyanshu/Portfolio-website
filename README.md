# Priyanshu Verma | Digital Headquarters
> A high-performance, 3D-interactive developer portfolio engineered for speed, aesthetics, and professional deployment.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

This repository serves as my official developer portfolio. Beyond a simple showcase, it is a production-grade application designed with a focus on **User Experience (UX)**, **Performance Engineering**, and **Systems Architecture**.

---

## 🏗️ Technical Architecture

The application is built on a modern, reactive stack designed for 60FPS animations and sub-second load times.

### **Core Stack**
*   **Engine**: [Vite](https://vitejs.dev/) + [React 18](https://reactjs.org/) (Functional Components, Hooks API)
*   **3D Orchestration**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei)
*   **Motion System**: [GSAP](https://gsap.com/) for complex timelines & [Framer Motion](https://www.framer.com/motion/) for layout transitions.
*   **Styles**: [Tailwind CSS](https://tailwindcss.com/) (JIT Engine) with a custom design system.

### **Key Engineering Features**
*   **Adaptive 3D Rendering**: Custom hooks monitor device performance and media queries to scale particle counts and shadow quality dynamically.
*   **Atomic Component Design**: Highly reusable UI primitives (Buttons, GlassCards, OptimizedImages) ensuring visual consistency.
*   **Intersection Observer Integration**: Lazy-triggering animations to save CPU/GPU cycles on non-visible sections.
*   **Asset Pipeline**: Automated image optimization via `vite-plugin-imagemin` and smart-lazy loading for 3D assets.

---

## 🚀 DevOps & Deployment

This project is fully containerized and production-ready.

### **Production Infrastructure**
The site is served via an **Nginx** reverse proxy configured inside a multi-stage **Docker** build.
*   **Gzip Compression**: Optimized LCP (Largest Contentful Paint) by compressing text-based assets.
*   **Cache-Control Policy**: Implements immutable caching for fingerprinted Vite assets.
*   **SPA Routing**: Nginx is configured to handle client-side routing fallbacks.

### **Running Locally**
```bash
# Clone the repository
git clone https://github.com/gitxpriyanshu/Portfolio-website.git

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Production Build (Docker)**
```bash
# Build and run the containerized production environment
docker-compose up -d --build
```

---

## 📈 Performance Goals
*   **Performance Score**: 95+ (Lighthouse)
*   **Frame Rate**: Locked 60FPS for 3D interactions
*   **SEO**: Fully semantic HTML5 with metadata optimization

---

## 👨‍💻 Author
**Priyanshu Verma**  
*Full-Stack Developer & AI/ML Undergraduate*  
📍 Pune, India  
📧 [work.priyanshuverma.1310@gmail.com](mailto:work.priyanshuverma.1310@gmail.com)  

---
*Built with passion, caffeine, and clean code.*