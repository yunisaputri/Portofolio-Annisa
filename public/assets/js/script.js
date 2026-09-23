
        // Fitur Salin Email
        function copyEmail() {
            const email = document.getElementById('email-text').innerText;
            navigator.clipboard.writeText(email).then(() => {
                alert('Email berhasil disalin!');
            });
        }

        // Fitur Submit Form Kontak Sederhana
        function handleSubmit(e) {
            e.preventDefault();
            alert('Pesan/Catatan berhasil dikirim! Terima kasih.');
            e.target.reset();
        }

        // Highlight Menu Navigasi Aktif saat Scroll
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= (sectionTop - 120)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').includes(current)) {
                    item.classList.add('active');
                }
            });
        });
    