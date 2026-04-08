// components/header.js
document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
    <header class="header_section">
      <div class="title_div">
        <span class="material-symbols-outlined">code_xml</span> BaghdadDevLab
      </div>
      <nav class="nav">
        <a href="index.html">Home</a>
        <a href="services.html">Services</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="about.html">About</a>
        <a href="contacts.html">Contact</a>
      </nav>
    </header>
  `;
    document.getElementById("header").innerHTML = headerHTML;
});