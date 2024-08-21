// @ts-check

import { Anggota, Kelompok } from "../../pages/groups/data";
export class SearchWorkerMessage {
  query = "";

  requestid = "";

  /**
   * @type {Anggota[]}
   */
  anggotamaster = [];

  /**
   * @type {Kelompok[]}
   */
  kelompokmaster = [];
}

export class SearchResult {
  responseid = "";

  /**
   * @type {(AnggotaResult | KelompokResult)[]}
   */
  result = [];
}

export class AnggotaResultFoundIn {
  static NAMA = 0;
  static NIM = 1;
  static JURUSAN = 2;
  static ANGKATAN = 3;
}

export class AnggotaResult {
  type = "anggota";

  /**
   * @type {Anggota}
   */
  data;

  /**
   * @type {number[]}
   */
  foundin = [];
}

export class KelompokResultFoundIn {
  static NAMAKELOMPOK = 0;
  static NAMAMENTOR = 1;
  static IDLINE = 2;
  static NOMORKELOMPOK = 3;
}

export class KelompokResult {
  type = "kelompok";
  /**
   * @type {Kelompok}
   */
  data;

  /**
   * @type {number[]}
   */
  foundin = [];
}

export class HashDataType {
  static NAMAKELOMPOK = "namakelompok";
  static NAMAMENTOR = "namamentor";
  static IDLINE = "idlinekelompok";
  static NOMORKELOMPOK = "nomorkelompok";

  static NAMAANGGOTA = "namaanggota";
  static NIM = "nim";
  static JURUSAN = "jurusan";
  static ANGKATAN = "angkatan";
}
