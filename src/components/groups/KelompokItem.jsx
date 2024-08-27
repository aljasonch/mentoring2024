/* eslint-disable no-unused-vars */
// @ts-check

import React, { useEffect } from "react";
import "./main.css";
import { Anggota, Kelompok, AnggotaList } from "../../pages/groups/data";
import { useImmer } from "use-immer";
import PropTypes from "prop-types";
import { HashDataType } from "./data";
/**
 * @param {Object} props
 * @param {Kelompok} props.kelompok
 * @param {((callback: () => void) => void) | null} props.rendermethod
 */
export default function KelompokItem({ kelompok, rendermethod }) {
  const [state, setState] = useImmer({
    /**
     * @type {JSX.Element[]}
     */
    rendereditems: [],
    /**
     * @type {AnggotaList}
     */
    cacheditems: AnggotaList.create(),
  });

  // EXPERIMENTAL incremental rendering
  useEffect(() => {
    //console.log("Cached items", state.cacheditems.list.length);
    if (state.cacheditems.generationID !== kelompok.anggota.generationID) {
      //console.log("Cached items is different from kelompok.anggota");

      setState((draft) => {
        draft.cacheditems = kelompok.anggota;
        draft.rendereditems = [];
      });
    } else {
      if (state.rendereditems.length == kelompok.anggota.list.length) {
        //console.log(state.rendereditems.length, kelompok.anggota.list.length);
      } else {
        if (rendermethod == null) {
          return;
        }
        rendermethod(() => {
          setState((draft) => {
            //console.log("Rendering", kelompok.anggota.list);
            let anggota = kelompok.anggota.list[state.rendereditems.length];
            let leftclass = `${HashGenerator(
              HashDataType.NAMAANGGOTA,
              anggota.nama + anggota.nim
            )} ${
              state.rendereditems.length == kelompok.anggota.list.length - 1 &&
              "tdfinalleft"
            }`;
            let middleclass = `${
              state.rendereditems.length == kelompok.anggota.list.length - 1
                ? "tdmiddlefinal"
                : "tdmiddle"
            }`;
            let rightclass = `${
              state.rendereditems.length == kelompok.anggota.list.length - 1 &&
              "tdfinalright"
            }`;
            //console.log("Rendering", anggota);

            draft.rendereditems.push(
              <tr key={anggota.nim}>
                <td className={`${leftclass}`}>{anggota.nama}</td>
                <td className={`${middleclass}`}>{anggota.nim}</td>
                <td className={`${rightclass}`}>{anggota.jurusan}</td>
              </tr>
            );
          });
        });
      }
    }
  });
  return (
    <div className="flex flex-col items-center justify-center w-full mb-8">
      <div className="mb-6 w-full flex flex-row items-center">
        <div
          className={`bg-white rounded-[50%] aspect-square font-extrabold w-[48px] text-2xl sm:text-4xlsm:w-[80px] md:w-[100px] md:text-5xl lg:w-[120px] lg:text-6xl xl:w-[125px] flex items-center justify-center mr-6`}
        >
          {kelompok.nomorkelompok}
        </div>

        <div className="flex flex-col items-start justify-center text-white">
          <div
            className={`spyagencyRegular font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            KELOMPOK {kelompok.namakelompok}
          </div>
          <div
            className={`spyagencyBoldItal text-sm sm:text-xl md:text-2xl lg:text-3xl`}
          >
            MENTOR: {kelompok.namamentor}
          </div>
          <div
            className={`spyagencyBoldItal text-sm sm:text-xl md:text-2xl lg:text-3xl`}
          >
            SESI: {kelompok.sesi}
          </div>
          {state.rendereditems.length != kelompok.anggota.list.length && (
            <div className="spyagencyRegular text-sm sm:text-xl md:text-2xl lg:text-3xl">
              Loading {kelompok.anggota.list.length} anggota...
            </div>
          )}
        </div>
      </div>
      <table className="w-full border-separate mb-2">
        <thead className="rounded">
          <tr className="spyagencyRegular">
            <th className="thleftmost">Nama</th>
            <th className="thmiddle">NIM</th>
            <th className="thrightmost">Jurusan</th>
          </tr>
        </thead>
        <tbody>{state.rendereditems}</tbody>
      </table>
      <div
        className={`w-full flex flex-row items-center justify-center text-white`}
      >
        ID LINE: {kelompok.idline}
      </div>
    </div>
  );
}

KelompokItem.propTypes = {
  kelompok: PropTypes.object.isRequired,
  rendermethod: PropTypes.func,
};

/**
 *
 * @param {string} typeofdata
 * @param {string} value
 */
export function HashGenerator(typeofdata, value) {
  return btoa(`${typeofdata}-${value}`);
}
