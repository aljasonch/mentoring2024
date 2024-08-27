// @ts-check

const SPREADHSHEETID = "1djMwAh9pZB8izWkCQca7P9yRp-rJxb7Q-Q7-VDy4Yuw";
const APIKEY = "AIzaSyC5003RftoO-ljl_yBOT6BomvHKLUvICZQ";
import { parse } from "jsonstream";
import fs from "fs";
import fetch from "node-fetch";

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
 * @type {{[key: string]: MemberRecord[]}}
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
      let memberrecords = [];
      let currentmemberrecord = new MemberRecord("", "", "", title);
      for (let index = 3; true; index++) {
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
      kelompoks[kelompoknumber] = memberrecords;
    }
  })
  .on("error", (error) => {
    console.error("Error parsing JSON stream:", error);
  })
  .on("end", () => {
    let serialized = JSON.stringify(kelompoks);
    fs.writeFileSync("..\\dist\\kelompoks.json", serialized);
  });
