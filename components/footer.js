// components/footer.js
document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
    <footer class="footer_section">
      <div class="container d-flex flex-wrap justify-content-between">
        <div class="about_div mb-3">
          <div class="title_div"><span class="material-symbols-outlined">code_xml</span> BaghdadDevLab</div>
          <p>Professional Python development services specializing in automation, desktop apps, and web tools.</p>
        </div>
        <div class="links_div mb-3">
          <h6>Quick Links</h6>
          <nav>
            <a href="index.html">Home</a>
            <a href="services.html">Services</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="about.html">About</a>
            <a href="contacts.html">Contact</a>
          </nav>
        </div>
        <div class="contacts_div mb-3">
          <h6>Contacts</h6>
          <nav>
            <a href="mailto:bdad2446@gmail.com"><span class="material-symbols-outlined">mail</span> bdad2446@gmail.com</a>
            <a href="#"><span class="material-symbols-outlined">public</span> Algeria <img class="flag" src="https://flagcdn.com/w40/dz.png" alt="Algeria"></a>
          </nav>
          <div class="social_icons mt-2">
            <a href="https://github.com/yourusername" target="_blank"><i class="bi bi-github"></i></a>
            <a href="https://wa.me/213XXXXXXXXX" target="_blank"><i class="bi bi-whatsapp"></i></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <p class="text-center mt-3">&copy; 2026 Baghdad DevLab. All rights reserved.</p>
    </footer>
  `;
    document.getElementById("footer").innerHTML = footerHTML;
});