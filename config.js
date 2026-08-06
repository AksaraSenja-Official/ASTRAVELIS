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
        cbt: "https://cbt.akademiksistem.my.id/",
        driveMoment: "https://drive.google.com/drive/folders/1xYiNCGUPes8LU2kJsKFFLTdGrFRTYXU0?usp=sharing",
        driveMateri: "https://drive.google.com/drive/folders/10tKD3rfBM5zUlNKjmgxngLJkD3JzQS8S?usp=sharing",
        instagramClass: "https://www.instagram.com/astravelis__?igsh=MWRlbG5haXR5bmV2NQ=="
    },

    // PIN Pengurus Default (Dapat dikelola di Panel Admin)
    defaultRoles: {
        "0101": { name: "Admin", access: ["uangKas", "cekKas", "moment", "materi", "adminPanel", "profil"] },
        "2222": { name: "Bendahara", access: ["uangKas", "cekKas"] },
        "3333": { name: "Sekretaris", access: ["moment", "materi", "profil"] },
        "4444": { name: "Ketua/Wakil Kelas", access: ["moment", "materi", "profil"] }
    },

    // DAFTAR PROFIL ANGGOTA KELAS (Dapat disesuaikan/diubah via Panel Admin)
    defaultMembers: [
        { name: "FIRDAUS MAULANA", role: "Ketua / Admin", birthdate: "2008-01-15", photo: "FIRDAUS.jpg" },
        { name: "AHMAD ADITYA RISKI PRATAMA", role: "Ketua", birthdate: "2008-02-10", photo: "ADIT.jpg" },
        { name: "AHMAD DONI ILYASA", role: "Anggota", birthdate: "2008-03-05", photo: "DONI.JPG" },
        { name: "AISAH TAHIRA", role: "Anggota", birthdate: "2008-04-12", photo: "AISH.JPG" },
        { name: "ALYNA ASRATIKAL LAIL", role: "Anggota", birthdate: "2008-05-20", photo: "ALYNA.webp" },
        { name: "AMAILYA AYUDIA PUTRI", role: "Anggota", birthdate: "2008-06-15", photo: "AMAIL.JPG" },
        { name: "AYATUL HUSNA", role: "Anggota", birthdate: "2008-07-08", photo: "AYAK.JPG" },
        { name: "BAIQ SALSABILA", role: "Anggota", birthdate: "2008-08-22", photo: "CACA.jpg" },
        { name: "BRAYEN RASYA NUESTA", role: "Anggota", birthdate: "2008-09-14", photo: "BRAYEN.JPG" },
        { name: "BRILIAN AURA MUHASSABAH", role: "Anggota", birthdate: "2008-10-01", photo: "BRIL.JPG" },
        { name: "ESTETIK MUSTIKA CAHYANI", role: "Anggota", birthdate: "2008-11-11", photo: "ESTI.JPG" },
        { name: "FATONI KHAWARIZMI", role: "Anggota", birthdate: "2008-12-05", photo: "FATONI.jpg" },
        { name: "LALU ABDURRAHMAN MAS'UD", role: "Anggota", birthdate: "2008-01-25", photo: "DUDI.JPG" },
        { name: "M. YUSUF SYAH AL KHALIFI", role: "Bendahara", birthdate: "2008-02-18", photo: "ALIF.jpg" },
        { name: "MUH GALANG RADYFA", role: "Anggota", birthdate: "2008-03-30", photo: "GALANG.JPG" },
        { name: "MIRZA AQILLAH GAZZEL", role: "Anggota", birthdate: "2008-04-04", photo: "GAZZEL.JPG" },
        { name: "M. FADLIL AZHAM AL FAYIR", role: "Anggota", birthdate: "2008-05-16", photo: "FAYER.jpg" },
        { name: "NUR TSABITA FARHANI", role: "Anggota", birthdate: "2008-06-28", photo: "BITA.jpg" },
        { name: "TALITA SYIFA ARQENA", role: "Sekretaris", birthdate: "2008-07-19", photo: "CIPU.jpg" },
        { name: "SYIFA ILMIRA ABID", role: "Anggota", birthdate: "2008-08-09", photo: "ABID.JPG" },
        { name: "TUHFATUL AHWAZIYAH", role: "Anggota", birthdate: "2008-09-30", photo: "ZIA.jpg" },
        { name: "SYDZWINA RAMADANI", role: "Anggota", birthdate: "2008-10-17", photo: "WINA.JPG" },
        { name: "ZAHRA MAULIDA", role: "Anggota", birthdate: "2008-11-23", photo: "ZAHRA.JPG" }
    ]
};