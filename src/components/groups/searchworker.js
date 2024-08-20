import {
  SearchWorkerMessage,
  SearchResult,
  AnggotaResult,
  AnggotaResultFoundIn,
  KelompokResult,
  KelompokResultFoundIn,
} from "./data";

// @ts-check
onmessage = function (e) {
  /**
   * @type {SearchWorkerMessage}
   */
  let data = e.data;

  let result = new SearchResult();
  result.responseid = data.requestid;
  for (let anggota of data.anggotamaster) {
    /**
     * @type {number[]}
     */
    let foundin = [];
    if (anggota.nama.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(AnggotaResultFoundIn.NAMA);
    }
    if (anggota.nim.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(AnggotaResultFoundIn.NIM);
    }
    if (anggota.jurusan.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(AnggotaResultFoundIn.JURUSAN);
    }
    if (anggota.angkatan.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(AnggotaResultFoundIn.ANGKATAN);
    }
    if (foundin.length > 0) {
      let resultanggota = new AnggotaResult();
      resultanggota.data = anggota;
      resultanggota.foundin = foundin;
      result.result.push(resultanggota);
    }
  }

  for (let kelompok of data.kelompokmaster) {
    /**
     * @type {number[]}
     */
    let foundin = [];
    if (
      kelompok.namakelompok.toLowerCase().includes(data.query.toLowerCase())
    ) {
      foundin.push(KelompokResultFoundIn.NAMAKELOMPOK);
    }

    if (kelompok.namamentor.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(KelompokResultFoundIn.NAMAMENTOR);
    }
    if (kelompok.idline.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(KelompokResultFoundIn.IDLINE);
    }
    if (
      kelompok.nomorkelompok.toLowerCase().includes(data.query.toLowerCase())
    ) {
      foundin.push(KelompokResultFoundIn.NOMORKELOMPOK);
    }

    if (foundin.length > 0) {
      let resultkelompok = new KelompokResult();
      resultkelompok.data = kelompok;
      resultkelompok.foundin = foundin;
      result.result.push(resultkelompok);
    }
  }
  console.log("Search done");
  postMessage(result);
};
