import Header from '../components/Header'
import { Outlet } from "react-router-dom"
import Footer from '../components/Footer'
import { MyIcon } from '../contants/icon'
import { useLayoutTimeline } from '../gsap';
import { useMainLayout } from './useMainLayout.ts';

const MainLayout = () => {
  const { formattedTime, formattedDate } = useMainLayout();
  // Still call hook — it handles ScrollTrigger.refresh() on route change
  useLayoutTimeline();

  return (
    <div className="relative">
      <Header />
      {/* Clock widget */}
      <div className="hidden lg:block fixed top-[5.625rem] right-6 md:right-16 z-40 pointer-events-none">
        <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-[#11161d]/80 backdrop-blur-md text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] pointer-events-auto transition-colors duration-500">
          <MyIcon name="mdi:clock-outline" size={16} />
          <span>{formattedTime}</span>
          <span className="text-gray-400 dark:text-gray-500 mx-1">|</span>
          <span>{formattedDate}</span>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
