import {
  MemberRecord,
  KelompokRecord,
  KelompokList,
  AnggotaList,
  Anggota,
} from "./data";

/**
 * @returns {Promise<KelompokList>}
 */
export async function fetchDataFromCache() {
  let request = await fetch(
    `https://raw.githubusercontent.com/aljasonch/mentoring2024/main/intermediatefetch/kelompoks.json`
  );

  let kelompoklist = new KelompokList();

  /**
   * @type {{[key: string]: KelompokRecord}}
   */
  let data = await request.json();

  for (var key in data) {
    let anggotalist = AnggotaList.create();
    for (var memberrecord of data[key].members) {
      let anggota = new Anggota();
      anggota.nama = memberrecord.name;
      anggota.nim = memberrecord.nim;
      anggota.jurusan = memberrecord.prodi;

      anggotalist.list.push(anggota);
    }
    kelompoklist.kelompok.push({
      anggota: anggotalist,
      namakelompok: key,
      nomorkelompok: Number.parseInt(key),
      idline: data[key].idline,
      namamentor: data[key].namamentor,
      sesi: data[key].sesi,
    });
  }
  return kelompoklist;
}
