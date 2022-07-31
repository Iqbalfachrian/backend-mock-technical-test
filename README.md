backend-mock-technical-test

Tata tertib assessment test
1. Assessment test ini bertujuan untuk report kepada klien - klien binar dan menentukan
leveling talent saat ini.
2. Waktu untuk mengerjakan soal dibawah adalah 2 x 24 Jam.
3. Penting dipahami bahwa kami tidak mentoleransi keterlambatan dalam pengiriman
jawaban.
4. Apabila ada keterlambatan dalam pengiriman jawaban akan sangat mempengaruhi
penilaian.
5. Selesai atau tidak, talent harus mengirimkan jawaban sesuai interval waktu yang telah
ditentukan.


Jawablah pertanyaan dibawah sesuai dengan instruksi!
1. Disebutkan seorang client membutuhkan layanan aplikasi antar makanan. Dan Anda
diminta untuk membuat desain sistem dengan kriteria pelanggan hanya dilayani
dengan mobile apps.
a. Desainlah stack backend dan micro service layanan tersebut beserta tools dan
alasan mengapa memilih design dan tools tersebut.

answers : 
Diasumsikan stack backend menggunakan Windows OS, DBMS my SQL

Desain stack backend

[Backend mock test.pdf]


(https://github.com/Iqbalfachrian/-Iqbalfachrian-backend-mock-technical-test/files/9228175/Backend.mock.test.pdf)




2. Bagaimana menangani keamanan dalam pengiriman data (backend dan mobile apps)
pada sistem diatas.
a. Jelaskan solusi tersebut beserta alasannya.

• Menggunakan HTTPS protokol untuk pertukaran data dari mobile apps ke back-end.
• Autentikasi API dengan Jason web token (JWT)
• Membatasi akses untuk role tertentu, seperti Admin untuk full akses sedangkan user hanya untuk beberapa fitur saja.
• 


3. Buatlah sebuah service RESTFul API berdasarkan dokumentasi apiary berikut. Soal
nomor 3 tidak ada hubungannya dengan soal nomor 1.
https://testbinar.docs.apiary.io/. Boleh menggunakan bahasa apapun.
a. Sertakan panduan cara instalasi tools, pengaturan database, penggunaan kode
dan cara ujicoba kode dalam file Readme.md
b. Sertakan tangkapan layar proses ujicoba API menggunakan postman.
c. Kode yang baik adalah kode yang bisa dibaca dan dipakai oleh orang lain.


Answers : 

- Install NodeJS, Postman (untuk test API), MySQL (di sini saya menggunakan XAMPP)
- Buat direktori yang dibutuhkan 
- Jika sudah selanjutnya install dependensi seperti Express, Sequelize, Passport JS dan bcrypt NodeJS
- Selanjutnya adalah mempersiapkan aplikasi
- Menyiapkan Sequelize dengan mySQL serta mengatur konfigurasi agar keduanya terhubung
- Selanjutnya membuat user model dan menyiapkan Views
- Lalu membuat config passport dan bcrypt 
- Jika sudah, selanjutnya adalah meng-test konfigurasi yang kita buat di Postman
- Selanjutnya jika sesuai maka akan muncul data yang ingin ditampilkan seperti screenshot yang terlampir di bawah :

Login menggunakan JWT sebagai admin :

![Admin-JWT](https://user-images.githubusercontent.com/101652940/182027964-e5c5d221-d471-43aa-b8d0-58371a988868.png)



Login menggunakan JWT sebagai user :
![User-JWT](https://user-images.githubusercontent.com/101652940/182027972-f4c9d070-a445-4e9b-b95c-39d7eeaa3f8b.png)










4. Dari dokumen https://testbinar.docs.apiary.io/, menurut anda, apakah ada desian API
yang kurang maupun keliru? Jika ada, tuliskan kekurangan-kekurangan desain tersebut
dan bagaimana seharusnya dokumentasi itu ditulis.

Answers : sudah sesuai.












