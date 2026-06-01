/* ========================================
   Indian Valley — App Landing Logic
   ========================================

   Flip LAUNCHED to true once the app is
   live on the App Store / Play Store.
   Update the store URLs below.
   ======================================== */

const LAUNCHED = false;

// Replace these with real store URLs when the app is published
const APP_STORE_URL = 'https://apps.apple.com/app/indian-valley/id000000000';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.indianvalley.app';

// ---- Detect platform ----
function getPlatform() {
  const ua = navigator.userAgent || navigator.vendor || '';
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
  if (/android/i.test(ua)) return 'android';
  return 'desktop';
}

// ---- Boot ----
document.addEventListener('DOMContentLoaded', () => {
  // Set copyright years
  const year = new Date().getFullYear();
  const yearCS = document.getElementById('year-cs');
  const yearDL = document.getElementById('year-dl');
  if (yearCS) yearCS.textContent = year;
  if (yearDL) yearDL.textContent = year;

  // Show the correct view
  const comingSoon = document.getElementById('coming-soon');
  const download = document.getElementById('download');

  if (LAUNCHED) {
    download.classList.add('active');
    handleRedirect();
  } else {
    comingSoon.classList.add('active');
  }
});

// ---- Auto-redirect on mobile when launched ----
function handleRedirect() {
  const platform = getPlatform();
  const msg = document.getElementById('redirect-msg');

  if (platform === 'ios') {
    if (msg) msg.textContent = 'Redirecting to the App Store…';
    setTimeout(() => { window.location.href = APP_STORE_URL; }, 1500);
  } else if (platform === 'android') {
    if (msg) msg.textContent = 'Redirecting to Google Play…';
    setTimeout(() => { window.location.href = PLAY_STORE_URL; }, 1500);
  }

  // Wire up buttons for manual click
  const btnIos = document.getElementById('btn-ios');
  const btnAndroid = document.getElementById('btn-android');
  if (btnIos) btnIos.href = APP_STORE_URL;
  if (btnAndroid) btnAndroid.href = PLAY_STORE_URL;
}
