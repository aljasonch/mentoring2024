// @ts-check

import React, { useEffect } from "react";
import "./main.css";
import PropTypes from "prop-types";

function PulsatingDiv({ children }) {
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
      <div className="w-full flex flex-row items-center">
        <div className="flex flex-col items-start justify-center w-full">
          <div className="spyagencyRegular font-bold text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl w-full">
            <PulsatingDiv>
              <div className="w-full h-full bg-white">3213</div>
            </PulsatingDiv>
          </div>
          <div className="h-4"></div>
          <div className="spyagencyBoldItal text-white text-sm sm:text-xl md:text-2xl lg:text-3xl w-full">
            <PulsatingDiv>
              <div className="w-full h-full bg-white">3213</div>
            </PulsatingDiv>
          </div>
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
        <tbody>
          {[...Array(numberofrows)].map((_, index) =>
            index == numberofrows - 1 ? (
              <tr key={index}>
                <td className="tdfinalleft">
                  <PulsatingDiv>
                    <div className="w-full h-full bg-white">3213</div>
                  </PulsatingDiv>
                </td>
                <td className="tdmiddlefinal w-full h-full">
                  <PulsatingDiv>
                    <div className="w-full h-full bg-white">3213</div>
                  </PulsatingDiv>
                </td>
                <td className="tdfinalright">
                  <PulsatingDiv>
                    <div className="w-full h-full bg-white">3213</div>
                  </PulsatingDiv>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td className="tdleftmost w-full h-full">
                  <PulsatingDiv>
                    <div className="w-full h-full bg-gray-500">3213</div>
                  </PulsatingDiv>
                </td>
                <td className="tdmiddle">
                  <PulsatingDiv>
                    <div className="w-full h-full bg-gray-500">3213</div>
                  </PulsatingDiv>
                </td>
                <td className="tdrightmost w-full h-full">
                  <PulsatingDiv>
                    <div className="w-full h-full bg-gray-500">
                      you cant see this
                    </div>
                  </PulsatingDiv>
                </td>
              </tr>
            )
          )}
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
