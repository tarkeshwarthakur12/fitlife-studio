document.addEventListener('DOMContentLoaded', () => {
  const navbarHTML = `
    <nav class="navbar">
      <div class="container">
        <a href="index.html" class="nav-brand">
          <span class="brand-title">FITLIFE STUDIO</span>
          <span class="brand-tagline-mini">BY TARAKESHWAR THAKUR</span>
        </a>
        <div class="nav-links">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="videos.html">Videos</a>
          <a href="blog.html">Blog</a>
          <a href="contact.html">Contact</a>
          <a href="https://youtube.com/@fitlife_studio?si=1lTWsEIpqnYN5mSS" target="_blank" class="nav-cta">YouTube Channel</a>
        </div>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h3>FITLIFE STUDIO</h3>
            <p>"YOUR FITNESS. YOUR JOURNEY. YOUR LIFE." Led by Tarakeshwar Thakur, inspiring sustainable health, weight management, and fitness education.</p>
            <p style="color: var(--color-neon-blue); font-weight: 600;">Official YouTube: @fitlife_studio</p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Creator</a></li>
              <li><a href="videos.html">Fitness Videos</a></li>
              <li><a href="blog.html">Wellness Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><a href="videos.html">Weight Loss</a></li>
              <li><a href="videos.html">Exercise & Workouts</a></li>
              <li><a href="videos.html">Protein & Nutrition</a></li>
              <li><a href="blog.html">Morning Health Hacks</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 FitLife Studio – Tarakeshwar Thakur. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `;

  const headerContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');

  if (headerContainer) headerContainer.innerHTML = navbarHTML;
  if (footerContainer) footerContainer.innerHTML = footerHTML;
});