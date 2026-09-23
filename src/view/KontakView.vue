<template>
<div>
    <section id="kontak">
            <h2 class="section-title">Kontak & Informasi</h2>
            <div class="kontak-wrapper">
                
                <div class="kontak-info">
                    <p>Jika ada pertanyaan dari pihak sekolah atau instruktur mengenai portofolio dan hasil kegiatan magang ini, silakan hubungi kontak berikut:</p>
                    
                    <div class="email-box">
                        <span id="email-text">annisa.putri@email.com</span>
                        <button class="btn-copy" onclick="copyEmail()">Salin</button>
                    </div>
                </div>

                <form onsubmit="handleSubmit(event)">
                    <input type="text" placeholder="Nama Anda / Guru / Instruktur" required>
                    <input type="email" placeholder="Email Anda" required>
                    <textarea placeholder="Pesan / Catatan Evaluasi..." required></textarea>
                    <button type="submit" class="btn btn-primary">Kirim Pesan</button>
                </form>
            </div>
    </section>
</div>
</template>