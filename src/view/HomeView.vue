<template>
  <div>
    <!-- SECTION TENTANG -->
    <section id="tentang">
      <div class="profile-image-container">
        <img src="/gambar/6.jpeg" alt="Foto Profil Annisa Rahmania Putri" class="profile-img">
      </div>

      <div class="tentang-content">
        <h1>Halo, Saya Annisa Rahmania Putri</h1>
        <h2>Portofolio Hasil Kegiatan Magang / PKL</h2>

        <p>
          Website ini dibuat sebagai bentuk dokumentasi dan portofolio hasil kegiatan magang yang telah saya jalani. Selama masa magang ini, saya belajar banyak hal baru, mengasah keterampilan teknis, serta mempraktikkan secara langsung ilmu yang didapat dari sekolah ke dalam dunia kerja profesional.
        </p>

        <div class="internship-info">
          <div class="info-item">
            <span>Instansi / Perusahaan</span>
            <strong>Kantor Layanan Terpadu (KLT) BSN Pekanbaru Riau</strong>
          </div>
          <div class="info-item">
            <span>Pembimbing Instruktur</span>
            <strong>Sasmita Erlangga S.Kom</strong>
          </div>
          <div class="info-item">
            <span>Status</span>
            <strong>Magang</strong>
          </div>
        </div>

        <p>
          Portofolio ini dipersiapkan atas arahan Bapak Instruktur sebagai bukti pembelajaran dan bekal hasil karya yang akan saya bawa serta presentasikan kembali di sekolah.
        </p>

        <div class="cta-buttons">
          <router-link to="/project" class="btn btn-primary">Lihat Proyek & Dokumentasi</router-link>
        </div>
      </div>
    </section>

    <!-- SECTION KEAHLIAN -->
    <section id="keahlian">
      <h2 class="section-title">Keahlian Dipelajari</h2>
      <div class="skills-grid">

        <div class="skill-card">
          <h3>Pengembangan Web / Teknis</h3>
          <div class="skill-tags">
            <span class="tag">HTML5</span>
            <span class="tag">CSS3</span>
            <span class="tag">JavaScript Dasar</span>
            <span class="tag">Struktur Web Responsive</span>
            <span class="tag">Laravel</span>
            <span class="tag">UI/UX Principles</span>
            <span class="tag">Postman</span>
            <span class="tag">MySQL & XAMPP</span>
          </div>
        </div>

        <div class="skill-card">
          <h3>Software & Peralatan</h3>
          <div class="skill-tags">
            <span class="tag">VS Code</span>
            <span class="tag">Microsoft Word</span>
            <span class="tag">Microsoft Excel</span>
          </div>
        </div>

        <div class="skill-card">
          <h3>Pengalaman Kerja (Soft Skills)</h3>
          <div class="skill-tags">
            <span class="tag">Kedisiplinan</span>
            <span class="tag">Kerja Sama Tim</span>
            <span class="tag">Komunikasi Profesional</span>
            <span class="tag">Problem Solving</span>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
@import "@/assets/css/dokumentasi.css";
</style>