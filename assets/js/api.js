// URL API yang akan diambil data-nya
const apiUrl = 'https://reqres.in/api-docs/#/default/get_users';

// Lakukan permintaan GET ke API menggunakan fetch()
fetch(apiUrl)
  .then(response => {
    // Periksa status respons
    if (!response.ok) {
      throw new Error('Terjadi kesalahan dalam mengambil data');
    }
    // Jika respons berhasil, ubah respons ke dalam bentuk JSON
    return response.json();
  })
  .then(data => {
    // Data berhasil diambil dan berada dalam format JSON
    console.log(data);
    // Lakukan sesuatu dengan data di sini
  })
  .catch(error => {
    // Tangani kesalahan jika terjadi
    console.error('Terjadi kesalahan:', error);
  });
