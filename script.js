// Mengambil data JSON
fetch('Hasil.json')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('dataTable');

    // Membuat header tabel
    const headerRow = table.insertRow();
    for (const key in data[0]) {
      const headerCell = headerRow.insertCell();
      headerCell.textContent = key;
    }

    // Membuat baris data
    data.forEach(item => {
      const dataRow = table.insertRow();
      for (const key in item) {
        const dataCell = dataRow.insertCell();
        dataCell.textContent = item[key];
      }
    });
  })
  .catch(error => console.error('Error:', error)); 
