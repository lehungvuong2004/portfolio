import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';

// ─── Lazy-loaded route components ─────────────────────────────────────────────
// Each page is split into its own JS chunk, loaded only when visited.
// This dramatically reduces the initial bundle size.
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Introduce = lazy(() => import('./pages/Introduce/Introduce.jsx'));
const SkillsPortfolio = lazy(() => import('./pages/Skill/Skill.jsx'));
const ProjectsPage = lazy(() => import('./pages/Product/Product.jsx'));
const Certificates = lazy(() => import('./pages/Certificate/Certificates.jsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'));

// ─── Page transition fallback ─────────────────────────────────────────────────
const PageLoader = () => (
  <div className="min-h-screen bg-slate-50 dark:bg-[#090b0e] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full border-2 border-blue-500/20 border-t-blue-500 dark:border-cyan-500/20 dark:border-t-cyan-500 animate-spin" />
      <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Loading</span>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          } />
          <Route path="/introduce" element={
            <Suspense fallback={<PageLoader />}>
              <Introduce />
            </Suspense>
          } />
          <Route path="/skill" element={
            <Suspense fallback={<PageLoader />}>
              <SkillsPortfolio />
            </Suspense>
          } />
          <Route path="/products" element={
            <Suspense fallback={<PageLoader />}>
              <ProjectsPage />
            </Suspense>
          } />
          <Route path="/certificates" element={
            <Suspense fallback={<PageLoader />}>
              <Certificates />
            </Suspense>
          } />
          <Route path="/contacts" element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;