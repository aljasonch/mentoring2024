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
                <td
                  className={`break-words text-xs sm:text-sm lg:text-lg  ${leftclass}`}
                >
                  {anggota.nama}
                </td>
                <td
                  className={`break-words text-xs sm:text-sm lg:text-lg  ${middleclass}`}
                >
                  {anggota.nim}
                </td>
                <td
                  className={`break-words text-xs sm:text-sm lg:text-lg  ${rightclass}`}
                >
                  {anggota.jurusan}
                </td>
              </tr>
            );
          });
        });
      }
    }
  });
  return (
    <div className="flex flex-col items-center justify-center w-full mb-8 home">
      <div className="mb-6 w-full flex flex-row items-center">
        <div
          className={`bg-white rounded-[50%] aspect-square font-extrabold w-[40px] text-xl sm:text-2xl sm:w-[55px] md:w-[65px] md:text-3xl lg:w-[70px] lg:text-4xl xl:w-[80px] flex items-center justify-center sm:mr-6 mr-4`}
        >
          {kelompok.nomorkelompok}
        </div>

        <div className="flex flex-col items-start justify-center text-white">
          <div
            className={`spyagencyRegular font-bold  text-sm sm:text-xl md:text-2xl lg:text-3xl`}
          >
            KELOMPOK {kelompok.namakelompok}
          </div>
          <div
            className={`spyagencyBoldItal text-base leading-4 mb-0.5 sm:mb-0 sm:text-2xl md:text-3xl lg:text-4xl text-left ${HashGenerator(
              HashDataType.NAMAMENTOR,
              kelompok.namamentor
            )}`}
          >
            MENTOR: {kelompok.namamentor}
          </div>
          <div
            className={`font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl`}
          >
            {kelompok.sesi}
          </div>
          {state.rendereditems.length != kelompok.anggota.list.length && (
            <div className="spyagencyRegular text-sm sm:text-xl md:text-2xl lg:text-3xl">
              Loading {kelompok.anggota.list.length} anggota...
            </div>
          )}
        </div>
      </div>

      <table className="w-full border-separate mb-2 hyphens-auto">
        <thead className="rounded">
          <tr>
            <th
              colSpan={3}
              className="text-center text-white border-b-0 rounded-t-lg"
            >
              ID LINE: {kelompok.idline}
            </th>
          </tr>
          <tr className="spyagencyRegular">
            <th className="thleftmost w-[50%]">Nama</th>
            <th className="thmiddle w-[20%]">NIM</th>
            <th className="thrightmost w-[30%]">Jurusan</th>
          </tr>
        </thead>
        <tbody className="text-sm">{state.rendereditems}</tbody>
      </table>
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
