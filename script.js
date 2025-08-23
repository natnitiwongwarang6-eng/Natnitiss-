document.addEventListener('DOMContentLoaded', () => {
    // ກຳນົດຕົວປ່ຽນສຳລັບໜ້າຈໍຫຼັກ
    const loginPage = document.getElementById('login-page');
    const dashboardPage = document.getElementById('dashboard-page');
    const adminPage = document.getElementById('admin-page');

    // ກຳນົດຕົວປ່ຽນສຳລັບຟອມລັອກອິນ ແລະ ສະໝັກສະມາຊິກ
    const showSignupLink = document.getElementById('show-signup');
    const showSigninLink = document.getElementById('show-signin');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    // ກຳນົດຕົວປ່ຽນສຳລັບປຸ່ມ ແລະ ລິ້ງຕ່າງໆ ໃນໜ້າ Dashboard ແລະ Admin
    const dashboardNavLinks = document.querySelectorAll('#dashboard-page .main-nav a');
    const dashboardContent = document.querySelectorAll('#dashboard-page .page-content');
    const adminNavLinks = document.querySelectorAll('#admin-page .main-nav a');
    const adminContent = document.querySelectorAll('#admin-page .page-content');
    const logoutButton = document.getElementById('logout-button');
    const adminLogoutButton = document.getElementById('admin-logout-button');

    // --- ຈັດການການປ່ຽນຟອມ (Sign In / Sign Up) ---
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        signinForm.style.display = 'none';
        signupForm.style.display = 'block';
    });
    showSigninLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.style.display = 'none';
        signinForm.style.display = 'block';
    });

    // --- ຈັດການການລັອກອິນ (ແບບໃຊ້ງານຈິງ) ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // ຂໍ້ມູນຜູ້ໃຊ້ຈຳລອງ: ເພື່ອໃຫ້ສາມາດທົດສອບລະບົບໄດ້
        const users = {
            'user': 'user123',
            'admin': 'admin123'
        };

        if (users[username] === password) {
            loginPage.classList.remove('active-page');
            if (username === 'admin') {
                adminPage.classList.add('active-page');
            } else {
                dashboardPage.classList.add('active-page');
            }
            alert(`ເຂົ້າສູ່ລະບົບສຳເລັດ! ຍິນດີຕ້ອນຮັບ ${username}`);
        } else {
            alert('ຊື່ຜູ້ໃຊ້ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ');
        }
    });

    // --- ຈັດການການສະໝັກສະມາຊິກ (ແບບຈຳລອງ) ---
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        // ໃນການໃຊ້ງານຈິງ ຄວນສົ່ງຂໍ້ມູນນີ້ໄປທີ່ເຊີບເວີເພື່ອບັນທຶກ
        alert(`ບັນຊີ "${username}" ສ້າງສຳເລັດແລ້ວ! ກະລຸນາເຂົ້າສູ່ລະບົບ`);
        signupForm.style.display = 'none';
        signinForm.style.display = 'block';
    });

    // --- ຈັດການການອອກຈາກລະບົບ (ສຳລັບຜູ້ໃຊ້ ແລະ ແອັດມິນ) ---
    const handleLogout = (pageToHide) => {
        pageToHide.classList.remove('active-page');
        loginPage.classList.add('active-page');
        document.getElementById('login-form').reset();
    };
    if (logoutButton) {
        logoutButton.addEventListener('click', () => handleLogout(dashboardPage));
    }
    if (adminLogoutButton) {
        adminLogoutButton.addEventListener('click', () => handleLogout(adminPage));
    }

    // --- ຈັດການການປ່ຽນໜ້າເນື້ອໃນໃນ Dashboard ແລະ Admin Panel ---
    const switchContent = (navLinks, contentPages) => {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
                
                const targetPageId = link.dataset.page;
                contentPages.forEach(page => page.classList.remove('active-content'));
                document.getElementById(targetPageId).classList.add('active-content');
            });
        });
    };

    // ນຳໃຊ້ຟັງຊັນກັບທັງຜູ້ໃຊ້ ແລະ ແອັດມິນ
    switchContent(dashboardNavLinks, dashboardContent);
    switchContent(adminNavLinks, adminContent);
});
