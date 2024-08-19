// @ts-check

import React, { useEffect } from "react";
import "./main.css";
import { Anggota, Kelompok, AnggotaList } from "../../pages/groups/data";
import { useImmer } from "use-immer";
import PropTypes from "prop-types";
/**
 * @param {Object} props
 * @param {Kelompok} props.kelompok
 */
export default function KelompokItem({ kelompok }) {
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
  useEffect(
    () => {
      //console.log("Cached items", state.cacheditems.list.length);
      if (state.cacheditems.generationID !== kelompok.anggota.generationID) {
        //console.log("Cached items is different from kelompok.anggota");

        setState((draft) => {
          draft.cacheditems = kelompok.anggota;
          draft.rendereditems = [];
        });
      } else {
        if (state.rendereditems.length == kelompok.anggota.list.length) {
          console.log(state.rendereditems.length, kelompok.anggota.list.length);
        } else {
          requestAnimationFrame(() => {
            setState((draft) => {
              //console.log("Rendering", kelompok.anggota.list);
              let anggota = kelompok.anggota.list[state.rendereditems.length];
              //console.log("Rendering", anggota);
              if (
                state.rendereditems.length ==
                kelompok.anggota.list.length - 1
              ) {
                draft.rendereditems.push(
                  <tr key={anggota.nim}>
                    <td className="tdfinalleft">{anggota.nama}</td>
                    <td className="tdmiddlefinal">{anggota.jurusan}</td>
                    <td className="tdfinalright">{anggota.angkatan}</td>
                  </tr>
                );
              } else {
                draft.rendereditems.push(
                  <tr key={anggota.nim}>
                    <td>{anggota.nama}</td>
                    <td className="tdmiddle">{anggota.jurusan}</td>
                    <td>{anggota.angkatan}</td>
                  </tr>
                );
              }
            });
          });
        }
      }
    } /* , [
    state.rendereditems,
    kelompok.anggota,
    setState,
    state.cacheditems,
    kelompok,
  ] */
  );
  return (
    <div className="flex flex-col items-center justify-center w-full mb-8">
      <div className="w-full flex flex-row items-center">
        <div
          className="bg-white rounded-[50%]
        aspect-square
        font-extrabold
        w-[48px]
        text-2xl
        sm:text-4xl
        sm:w-[80px]
        md:w-[100px]
        md:text-5xl
        lg:w-[120px]
        lg:text-6xl
        xl:w-[125px]
        flex items-center justify-center
        mr-6
        "
        >
          {kelompok.nomorkelompok}
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="spyagencyRegular font-bold text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            KELOMPOK {kelompok.namakelompok}
          </div>
          <div className="spyagencyBoldItal text-white text-sm sm:text-xl md:text-2xl lg:text-3xl ">
            MENTOR: {kelompok.namamentor}
          </div>
          {state.rendereditems.length != kelompok.anggota.list.length && (
            <div className="spyagencyRegular text-white text-sm sm:text-xl md:text-2xl lg:text-3xl">
              Loading {kelompok.anggota.list.length} anggota...
            </div>
          )}
        </div>
      </div>
      <div className="h-6"></div>
      <table className="w-full border-separate">
        <thead className="rounded">
          <tr className="spyagencyRegular">
            <th className="thleftmost">Nama</th>
            <th className="thmiddle">Jurusan</th>
            <th className="thrightmost">Angkatan</th>
          </tr>
        </thead>
        <tbody>{state.rendereditems}</tbody>
      </table>
    </div>
  );
}

KelompokItem.propTypes = {
  kelompok: PropTypes.object.isRequired,
};
