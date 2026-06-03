import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

// Register only the plugins actually used
// Flip and TextPlugin removed — they were loaded but never used (+60KB saved)
gsap.registerPlugin(ScrollTrigger, CustomEase);

// ─── Custom Eases ─────────────────────────────────────────────────────────────
CustomEase.create(
  'elastic.out',
  'M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,1.037 0.414,1.093 0.502,1.093 0.545,1.093 0.58,1.063 0.612,1.035 0.648,1.003 0.699,1 1,1'
);
CustomEase.create('expo.out', '0.19,1,0.22,1');

// ─── ScrollTrigger Performance Config ─────────────────────────────────────────
ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
  syncInterval: 40,
});

// ─── GSAP Global Defaults ─────────────────────────────────────────────────────
gsap.defaults({
  overwrite: 'auto',
});

// ─── Ticker Performance ───────────────────────────────────────────────────────
// lagSmoothing(threshold, adjustedLag): if a frame takes >500ms, treat it as 33ms
gsap.ticker.lagSmoothing(500, 33);

export { gsap, ScrollTrigger, CustomEase };
