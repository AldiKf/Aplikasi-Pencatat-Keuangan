let data = JSON.parse(localStorage.getItem("dataKeuangan")) || [];

function formatRupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

function renderTable() {
  const tabel = document.getElementById("tabelTransaksi");
  tabel.innerHTML = "";

  let totalIncome = 0;
  let totalOutcome = 0;

  data.forEach((item, index) => {
    if (item.kategori === "income") {
      totalIncome += Number(item.nominal);
    } else {
      totalOutcome += Number(item.nominal);
    }

    tabel.innerHTML += `
            <tr>
                <td>${item.nama}</td>
                <td>${formatRupiah(Number(item.nominal))}</td>
                <td>${
                  item.kategori === "income" ? "Pemasukan" : "Pengeluaran"
                }</td>
                <td>
                    <button class="action-btn edit" onclick="editTransaksi(${index})">Edit</button>
                    <button class="action-btn delete" onclick="hapusTransaksi(${index})">Hapus</button>
                </td>
            </tr>
        `;
  });

  document.getElementById("totalIncome").textContent =
    formatRupiah(totalIncome);
  document.getElementById("totalOutcome").textContent =
    formatRupiah(totalOutcome);
  document.getElementById("totalBalance").textContent = formatRupiah(
    totalIncome - totalOutcome
  );
}

function simpanTransaksi() {
  const nama = document.getElementById("nama").value;
  const nominal = document.getElementById("nominal").value;
  const kategori = document.getElementById("kategori").value;
  const editIndex = document.getElementById("editIndex").value;

  if (!nama || !nominal || !kategori) {
    alert("Semua field harus diisi!");
    return;
  }

  const transaksi = { nama, nominal, kategori };

  if (editIndex === "") {
    data.push(transaksi);
  } else {
    data[editIndex] = transaksi;
    document.getElementById("editIndex").value = "";
  }

  localStorage.setItem("dataKeuangan", JSON.stringify(data));

  document.getElementById("nama").value = "";
  document.getElementById("nominal").value = "";
  document.getElementById("kategori").value = "";

  renderTable();
}

function editTransaksi(index) {
  document.getElementById("nama").value = data[index].nama;
  document.getElementById("nominal").value = data[index].nominal;
  document.getElementById("kategori").value = data[index].kategori;
  document.getElementById("editIndex").value = index;
}

function hapusTransaksi(index) {
  if (confirm("Yakin ingin menghapus transaksi ini?")) {
    data.splice(index, 1);
    localStorage.setItem("dataKeuangan", JSON.stringify(data));
    renderTable();
  }
}

renderTable();







