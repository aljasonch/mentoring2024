import { MemberRecord, KelompokList, AnggotaList, Anggota } from "./data";

/**
 * @returns {Promise<KelompokList>}
 */
export async function fetchDataFromCache() {
  let request = await fetch(
    `` //TODO - Fill in the URL
  );

  let kelompoklist = new KelompokList();

  /**
   * @type {{[key: string]: MemberRecord[]}}
   */
  let data = await request.json();

  for (var key in data) {
    let anggotalist = AnggotaList.create();
    for (var memberrecord of data[key]) {
      let anggota = new Anggota();
      anggota.nama = memberrecord.name;
      anggota.nim = memberrecord.nim;
      anggota.jurusan = memberrecord.prodi;
      anggotalist.list.push(anggota);
    }
    kelompoklist.kelompok.push({
      anggota: anggotalist,
      namakelompok: key,
    });
  }
  return kelompoklist;
}
