// ==========================================
// FILE KONFIGURASI TERPISAH (ASTRAVELIS CONFIG)
// ==========================================

window.APP_CONFIG = {
    // Tautan backend Google Apps Script
    scriptURL: 'https://script.google.com/macros/s/AKfycbw9HX9zRlkd7FUXJfAjOpN8mn4Xn6FuwoaWekoAgkXMUsWBXeZ6abtSkxeJe6bQH0Th/exec',
    
    // Nominal Iuran per bulan
    nominalIuran: 10000,

    // Tautan Penting Kelas (Quick Links & Google Drive & Media Sosial)
    links: {
        zoom: "https://us06web.zoom.us/j/4634019789?pwd=A1Mh6ctFpz0abaJsbkDxxisjZoowVb.1",
        lms: "https://lms.maniclotim.sch.id/",
        lms2: "https://sites.google.com/view/maniclotim-ski-lms/lms",
        cbt: "https://cbt.akademiksistem.my.id/",
        siAsram: "https://sites.google.com/guru.paud.belajar.id/keasramaanmaniclomboktimur/si-asram?authuser=0",
        driveMoment: "https://drive.google.com/drive/folders/1xYiNCGUPes8LU2kJsKFFLTdGrFRTYXU0?usp=sharing",
        driveMateri: "https://drive.google.com/drive/folders/10tKD3rfBM5zUlNKjmgxngLJkD3JzQS8S?usp=sharing",
        instagramClass: "https://www.instagram.com/astravelis__?igsh=MWRlbG5haXR5bmV2NQ=="
    },

    // PIN Pengurus Default (Akses 'adminPanel' dibuka untuk Sekretaris & Ketua/Wakil Kelas)
    defaultRoles: {
        "0101": { name: "Admin", access: ["uangKas", "cekKas", "moment", "materi", "adminPanel"] },
        "2222": { name: "Bendahara", access: ["uangKas", "cekKas"] },
        "3333": { name: "Sekretaris", access: ["moment", "materi", "adminPanel"] },
        "4444": { name: "Ketua/Wakil Kelas", access: ["moment", "materi", "adminPanel"] }
    }
};