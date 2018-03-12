# mongoosecrud
express + mongoose crud
========================================================
review dan latihan
========================================================
1. basicCRUD (orang+buku)<br/>
 __Model__ <br/>
   >__Orang__: nama <br/>
    __Buku__: judul, _pengarang
2. [LATIHAN] tambah genre ke buku ---> STOP!!!! Bikin dulu... ga usah populate <br/>
 kalo bingung bs liat branch latihan/ wa poppy, no copas ya :D <br/><br/>
  __Model__ <br/>
    > __Orang__: nama <br/>
     __Buku__: judul, _pengarang, [genre] <br/>
     __Genre__: genre_name

   Masukin banyak genre (pas create Buku) gimana dari postman? <br/>
   genre: genreid1<br/>
   genre: genreid2<br/>
   dibikin beberapa row yg isinya genre di body<br/>
 
3. routing genre dari buku<br/>
  __Route__ Buku.js<br/>
    > PUT /:id/genre (harus diatas PUT /:id biar ga ketimpa)<br/>
      
    __Controller__ BukuCtrl.js<br/>
     > getAll -> populate _pengarang (ambil nama aja) _genre<br/>
        getOne -> populate _pengarang (ambil nama aja), _genre<br/>
4. [LATIHAN] populate Orang ----> STOP!!!! Bikin dulu....<br/>
   __Model__ <br/>
     > __Orang__: nama, ___buku_favorit__ (ref tbl_buku)<br/>
      __Buku__: judul, _pengarang, [genre] <br/>
      __Genre__: genre_name
     
   __Controller__ OrangCtrl.js<br/>
      > update -> if (typeof req.body._buku_favorit !== 'undefined') orang.update === req.body._buku_favorit<br/>
      > getOne -> populate _buku_favorite (ambil judul aja)<br/>
     
5. [LATIHAN] bikin pinjam (di PinjamCtrl)<br/>
  __Model__ <br/>
   > __Orang__: nama, _buku_favorit <br/>
     __Buku__: judul, _pengarang, [genre], [list_peminjam] (ref tbl_orang) <br/>
     __Genre__: genre_name<br/>
     __Pinjam__: _buku (ref tbl_buku), _peminjam (ref tbl_orang), tgl_pinjam<br/>
     
     
   Model berubah di buku.js dan pinjam.js<br/>
   __Model__ Pinjam.js<br/> 
    > _buku_id ref tbl_buku<br/>
     _peminjam ref tbl_orang<br/>
     tgl_pinjam: {<br/>
         type: Date,<br/>
         default: Date.now //kalo ga diinsert lsg dimasukin waktu sekarang<br/>
     }<br/>
     
    __Route__ Buku.js<br/>
     > PUT /:id/pinjam (harus diatas PUT /:id biar ga ketimpa)<br/>

   __Controller__ BukuCtrl.js<br/>
    > ga usah insert date karena dah di default 
6. user_getListPinjam<br/>
   __Controller__ OrangCtrl.js<br/>
   > getUserPinjam<br/>
   
   __Routes__ orang.js<br/>
   > GET /:id/pinjam<br/>
   
7. authorization + token<br/>
========================================================<br/>
rabu, dikelas<br/>
validation (model & controller)<br/>
client<br/>
=========================================================

# starting
1. clone this repository
2. npm install
3. create .env file 
 - PASS_DB=<your db password>
 - USER_DB=<your db username>
 - HASH_SECRET_KEY=<your secret key to hash password>
 - TOKEN_SECRET_KEY=<your secret key to encode & decode json web token>

# contoh relasi table
1. Orang

| _id **      | nama      | _buku_favorit  |
| ----------- | --------- | --------------:|
| iduser1     | poppy     | idbuku1        |
| iduser2     | orang2    |                |
| iduser3     | orang3    | idbuku2        |

2. Genre

| _id         | description   |
| ----------- | -------------:|
| idgenre1    | horror        |
| idgenre2    | action        |
| idgenre3    | comedy        |

3. Buku

| _id         | judul         | _pengarang     | [genre]              |  [list_peminjam]   |
| ----------- | ------------- |:--------------:| --------------------:| ------------------:| 
| idbuku1     | buku1         |  iduser1       | [idgenre1, idgenre2] | [iduser2, iduser1] |
| idbuku2     | buku2         |  iduser2       | [idgenre1]           |                    |

4. Pinjam

| _id         | _buku_id      | _peminjam      | tgl_pinjam       |
| ----------- | ------------- |:--------------:| ----------------:|
| idpinjam1    | idbuku1       |  iduser2      | < autogenerate > |
| idpinjam2    | idbuku1       |  iduser3      | < autogenerate > |

** semua id auto generate, ga usah create sendiri, ini cuma contoh saja
