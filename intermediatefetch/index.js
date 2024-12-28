// @ts-check

const SPREADHSHEETID = "1djMwAh9pZB8izWkCQca7P9yRp-rJxb7Q-Q7-VDy4Yuw";
require('dotenv').config()
const APIKEY = process.env.API_KEY;
import { parse } from "jsonstream";
import fs from "fs";
import fetch from "node-fetch";

/**
 * @param {number} kelompoknumber
 * @returns {string}
 */
function sessionGenerator(kelompoknumber) {
  if (kelompoknumber <= 82) {
    return "Sesi Pagi";
  } else if (kelompoknumber <= 165) {
    return "Sesi Siang";
  }
  return "Sesi Unassigned";
}
class MemberRecord {
  name = "";
  nim = "";
  prodi = "";
  /**
   * @param {string} name
   * @param {string} nim
   * @param {string} prodi
   *
   */
  constructor(name, nim, prodi) {
    this.name = name;
    this.nim = nim;
    this.prodi = prodi;
  }
}

class KelompokRecord {
  namamentor = "";
  idline = "";

  /**
   * @type {MemberRecord[]}
   */
  members = [];
  sesi = "";

  /**
   * @param {string} namamentor
   * @param {string} idline
   * @param {MemberRecord[]} members
   * @param {string} sesi
   */
  constructor(namamentor, idline, members, sesi) {
    this.namamentor = namamentor;
    this.idline = idline;
    this.members = members;
    this.sesi = sesi;
  }
}

let request = await fetch(
  `
            https://sheets.googleapis.com/v4/spreadsheets/${SPREADHSHEETID}?includeGridData=true
        `,
  {
    headers: {
      "X-goog-api-key": APIKEY,
    },
  }
);

/**
 * @type {{[key: string]: KelompokRecord}}
 */
let kelompoks = {};

request.body
  ?.pipe(parse("sheets.*"))
  .on("data", (sheet) => {
    /**
     * @type {string}
     */
    let title = sheet.properties.title;
    let isGroupSheet = title.match(/[0-9]/g)?.length == title.length;

    if (isGroupSheet) {
      let kelompoknumber = Number.parseInt(title);
      let kelompokrecord = new KelompokRecord(
        "",
        "",
        [],
        sessionGenerator(kelompoknumber)
      );
      /**
       * @type {MemberRecord[]}
       */
      let memberrecords = [];
      {
        // parsing for mentor
        /**
         * @type {string}
         */
        let fullheader = sheet.data[0].rowData[0].values[0].formattedValue;
        let header = fullheader.split("-");
        // remove everything before (
        let mentorname = header[0].split("(")[1];
        kelompokrecord.namamentor = mentorname;
      }
      {
        // parsing for idline
        /**
         * @type {string}
         */
        let fullheader = sheet.data[0].rowData[0].values[0].formattedValue;
        let splitted = fullheader.split(": ")[1];
        let removed = splitted.split(")")[0];
        kelompokrecord.idline = removed;
      }
      let currentmemberrecord = new MemberRecord("", "", "");
      for (let index = 2; true; index++) {
        currentmemberrecord = new MemberRecord(
          sheet.data[0].rowData[index].values[1].formattedValue,
          sheet.data[0].rowData[index].values[2].formattedValue,
          sheet.data[0].rowData[index].values[3].formattedValue
        );
        //console.log(currentmemberrecord);
        if (
          currentmemberrecord.name == undefined ||
          currentmemberrecord.name.length == 0
        ) {
          break;
        }
        memberrecords.push(currentmemberrecord);
      }
      kelompokrecord.members = memberrecords;
      kelompoks[kelompoknumber] = kelompokrecord;
    }
  })
  .on("error", (error) => {
    console.error("Error parsing JSON stream:", error);
  })
  .on("end", () => {
    let serialized = JSON.stringify(kelompoks, null, 2);
    fs.writeFileSync("..\\public\\kelompoks.json", serialized);
    fs.writeFileSync("..\\dist\\kelompoks.json", serialized);
    fs.writeFileSync("..\\src\\assets\\kelompoks.json", serialized);
    fs.writeFileSync("kelompoks.json", serialized);
  });
