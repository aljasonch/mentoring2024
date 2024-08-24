/* eslint-disable no-unused-vars */
// @ts-check

import React, { useEffect } from "react";
import "./main.css";
import PropTypes from "prop-types";

export function PulsatingDiv({ children }) {
  return (
    <div className="animate-pulse w-full h-full rounded-[12px] overflow-hidden">
      <div className="w-full h-full bg-gray-300 text-transparent">1</div>
    </div>
  );
}

/**
 * @param {Object} props
 * @param {number} props.numberofrows
 */
export default function KelompokItemSkeleton({ numberofrows }) {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-8">
      <div className="w-full flex flex-row items-center mb-6">
        <div className="flex flex-col items-start justify-center w-full">
          <div className="spyagencyRegular font-bold text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl w-full">
            <PulsatingDiv>
              <div className="w-full h-full bg-white">3213</div>
            </PulsatingDiv>
          </div>
          <div className="h-4"></div>
          <div className="spyagencyBoldItal text-white text-sm sm:text-xl md:text-2xl lg:text-3xl w-full">
            <PulsatingDiv>
              <div className="w-full h-full bg-white"></div>
            </PulsatingDiv>
          </div>
        </div>
      </div>
      <table className="w-full border-separate">
        <thead className="rounded">
          <tr className="spyagencyRegular">
            <th className="thleftmost">Nama</th>
            <th className="thmiddle">Jurusan</th>
            <th className="thrightmost">Angkatan</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(numberofrows)].map((_, index) => {
            let left =
              index == numberofrows - 1
                ? "tdfinalleft"
                : "tdleftmost w-full h-full";
            let middle =
              index == numberofrows - 1
                ? "tdmiddlefinal w-full h-full"
                : "tdmiddle";
            let right =
              index == numberofrows - 1
                ? "tdfinalright"
                : "tdrightmost w-full h-full";

            return (
              <tr key={index}>
                <td className={left}>
                  <PulsatingDiv>
                    <div className="w-full h-full bg-white"></div>
                  </PulsatingDiv>
                </td>
                <td className={middle}>
                  <PulsatingDiv>
                    <div className="w-full h-full bg-white"></div>
                  </PulsatingDiv>
                </td>
                <td className={right}>
                  <PulsatingDiv>
                    <div className="w-full h-full bg-white"></div>
                  </PulsatingDiv>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

KelompokItemSkeleton.propTypes = {
  numberofrows: PropTypes.number.isRequired,
};

PulsatingDiv.propTypes = {
  children: PropTypes.node,
};
