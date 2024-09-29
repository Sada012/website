document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニューの制御
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });

        // メニュー項目をクリックしたときにメニューを閉じる
        const navItems = document.querySelectorAll('.nav-links li a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            });
        });
    }

    // スライドショーのコード（他ページの影響を避けるため必要なページでのみ動作）
    if (document.querySelector('.slideshow-container')) {
        let slideIndex = 1;
        showSlides(slideIndex);

        // 自動スライド用のタイマーID
        let autoSlide;
        const autoSlideInterval = 5000; // 5秒ごとにスライドを変更
        let isAutoSliding = true;

        // 次/前のスライドを表示
        window.plusSlides = function(n) {
            showSlides(slideIndex += n);
            stopAutoSlide();
        }

        // 特定のスライドを表示
        window.currentSlide = function(n) {
            showSlides(slideIndex = n);
            stopAutoSlide();
        }

        function showSlides(n) {
            const slides = document.getElementsByClassName("slides");
            const dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");  
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active");
            }
            slides[slideIndex-1].classList.add("active");  
            dots[slideIndex-1].classList.add("active");
        }

        // 自動スライド開始
        function startAutoSlide() {
            autoSlide = setInterval(function() {
                slideIndex++;
                showSlides(slideIndex);
            }, autoSlideInterval);
            isAutoSliding = true;
        }

        // 自動スライド停止
        function stopAutoSlide() {
            if (isAutoSliding) {
                clearInterval(autoSlide);
                isAutoSliding = false;
            }
        }

        // 初期自動スライド開始
        startAutoSlide();

        // ユーザーが操作したら自動スライドを停止
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            // Stop auto sliding on user interaction
            const userInteractions = ['click', 'touchstart'];
            userInteractions.forEach(event => {
                slideshowContainer.addEventListener(event, () => {
                    stopAutoSlide();
                });
            });
        }
    }

    // タブ切り替えの制御
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length && tabPanes.length) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                // Hide all panes
                tabPanes.forEach(pane => pane.classList.remove('active'));
                // Show target pane
                const target = button.getAttribute('data-target');
                const targetPane = document.getElementById(target);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }
});


