// @ts-check
import { immerable } from "immer";

export function generateGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export class KelompokList {
  /**
   * @type {Kelompok[]}
   */
  kelompok = [];
  generationID = "";

  constructor() {
    this[immerable] = true;
    this.generationID = generateGUID();
    this.kelompok = [];
  }

  static create() {
    return new KelompokList();
  }
}

export class AnggotaList {
  /**
   * @type {Anggota[]}
   */
  list = [];
  generationID = "";

  constructor() {
    this[immerable] = true;
    this.generationID = generateGUID();
    this.list = [];
  }

  static create() {
    return new AnggotaList();
  }
}

export class Anggota {
  nama = "";
  nim = "";
  jurusan = "";
  angkatan = "";

  constructor() {
    this[immerable] = true;
    this.nama = "";
    this.nim = "";
    this.jurusan = "";
    this.angkatan = "";
  }

  static create() {
    return new Anggota();
  }
}

export class Kelompok {
  namakelompok = "";
  namamentor = "";
  idline = "";
  nomorkelompok = "";
  /**
   * @type {AnggotaList}
   */
  anggota = AnggotaList.create();
  generationID = "";
  constructor(namakelompok, namamentor, idline, nomorkelompok) {
    this.namakelompok = namakelompok;
    this.namamentor = namamentor;
    this.idline = idline;
    this.nomorkelompok = nomorkelompok;
    this.generationID = generateGUID();
  }
  generateHugeData() {
    for (let i = 0; i < 1000; i++) {
      /**
       * @type {Anggota}
       */
      let anggota = Anggota.create();
      anggota.nama = "Anggota Dengan nama yang panjang" + i;
      anggota.nim = "000000000" + i;
      anggota.jurusan = "Teknik Informatika";
      anggota.angkatan = "2024";
      this.anggota.list.push(anggota);
    }
  }
}

export class IncrementalRenderingMethod {
  /**
   * @type {(callback: () => void) => void}
   */
  static FIREFOX_FAST = (callback) => {
    setTimeout(callback);
  };
  /**
   * @type {(callback: () => void) => void}
   */
  static FAILSAFE = (callback) => {
    requestAnimationFrame(() => callback());
  };
  /**
   * @type {(callback: () => void) => void}
   */
  static ALL_EXCEPT_SAFARI = (callback) => {
    requestIdleCallback(() => callback(), {
      timeout: 1000 / 30, // 30 times per second
    });
  };
}
