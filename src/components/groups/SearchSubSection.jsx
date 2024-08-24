/* eslint-disable no-unused-vars */
// @ts-check

import React, { useEffect } from "react";

// @ts-expect-error
import searchicon from "../../assets/searchicon.svg";

// @ts-expect-error
import Worker2 from "./searchworker?worker";
import { useImmer } from "use-immer";

import {
  AnggotaResult,
  HashDataType,
  KelompokResult,
  SearchResult,
  SearchWorkerMessage,
} from "./data";
import { IncrementalListBuilder } from "./IncrementalListBuilder";
import { Anggota, Kelompok } from "../../pages/groups/data";
import PropTypes from "prop-types";
import "./main.css";
import { PulsatingDiv } from "./KelompokItemSkeleton";
import { HashGenerator } from "./KelompokItem";
/**
 * @type {Worker}
 */
const searchworker = new Worker2();

/**
 * @param {Object} props
 * @param {Kelompok[]} props.kelompokdata
 * @returns {JSX.Element}
 * */
export default function SearchSubSection({ kelompokdata }) {
  const [state, setState] = useImmer({
    /**
     * @type {SearchResult | null}
     */
    latestsearchresult: null,

    searchquery: "",

    throttlingsearch: false,

    throttingtimeout: -1,

    dosearch: false,

    skeleton: true,

    startedsearching: false,
    hideresults: false,
  });
  useEffect(() => {
    if (state.dosearch && !state.throttlingsearch) {
      /**
       * @type {Anggota[]}
       */

      let anggotamaster = [];
      for (let kelompok of kelompokdata) {
        anggotamaster = anggotamaster.concat(kelompok.anggota.list);
      }
      let message = new SearchWorkerMessage();
      message.query = state.searchquery;
      message.anggotamaster = anggotamaster;
      message.requestid = "search" + Math.random().toString();
      searchworker.postMessage(message);
      setState((draft) => {
        draft.throttlingsearch = true;
        draft.dosearch = false;
      });
      searchworker.onmessage = (ev) => {
        /**
         * @type {SearchResult}
         */
        let data = ev.data;
        setState((draft) => {
          draft.latestsearchresult = data;
          draft.throttlingsearch = false;
          draft.skeleton = false;
        });
      };
    }
  });
  useEffect(() => {
    if (state.throttingtimeout != -1) {
      clearTimeout(state.throttingtimeout);
    }
    if (state.searchquery.length > 0) {
      /**
       * @type {number}
       * */
      // @ts-ignore
      let timeout = setTimeout(() => {
        setState((draft) => {
          draft.throttlingsearch = false;
          draft.throttingtimeout = -1;
        });
      }, 500);
      setState((draft) => {
        draft.throttingtimeout = timeout;
        draft.dosearch = true;
        draft.skeleton = true;
        draft.throttlingsearch = true;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.searchquery]);
  return (
    <>
      <div className="overflow-visible h-12 w-[90%] bg-white sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] rounded-[24px] z-10">
        <div className="w-full flex flex-col bg-white rounded-[24px] items-center justify-start h-fit overflow-hidden">
          <div className="w-full h-12 flex flex-row items-center justify-start">
            <img src={searchicon} className="ml-6 w-6 h-6" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-12 bg-transparent outline-none border-transparent"
              onChange={(e) => {
                setState((draft) => {
                  draft.startedsearching = true;
                  draft.searchquery = e.target.value;
                });
              }}
              style={{
                borderWidth: "0px",
                boxShadow: "none",
              }}
              onBlur={() => {
                setState((draft) => {
                  draft.hideresults = true;
                });
              }}
              onFocus={() => {
                setState((draft) => {
                  draft.hideresults = false;
                });
              }}
            />
          </div>
          {state.startedsearching && state.searchquery.length > 0 ? (
            state.skeleton ? (
              <>
                <div className="h-4 w-[90%] m-4">
                  <PulsatingDiv />
                </div>
                <div className="h-4 w-[90%] m-4">
                  <PulsatingDiv />
                </div>
                <div className="h-4 w-[90%] m-4">
                  <PulsatingDiv />
                </div>
                <div className="h-4 w-[90%] m-4">
                  <PulsatingDiv />
                </div>
              </>
            ) : (state.latestsearchresult?.result ?? []).length > 0 ? (
              <div
                className={`w-full transition-all duration-150 ${
                  !state.hideresults ? "" : "opacity-0 h-0"
                }`}
              >
                <IncrementalListBuilder
                  generationid={state.latestsearchresult?.responseid ?? ""}
                  items={state.latestsearchresult?.result ?? []}
                  itemgenerator={(item) => (
                    <SearchResultItem
                      result={item}
                      key={Math.random().toString()}
                    />
                  )}
                  key={Math.random().toString()}
                />
              </div>
            ) : (
              <div className="mb-4">No results found.</div>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

SearchSubSection.propTypes = {
  kelompokdata: PropTypes.array,
};

/**
 * @param {Object} props
 * @param {KelompokResult | AnggotaResult} props.result
 */
function SearchResultItem({ result }) {
  let rendered = <></>;
  //console.log("Rendering", result);
  if (result.type === "anggota") {
    /**
     * @type {AnggotaResult}
     */
    // @ts-ignore
    let data = result;
    rendered = (
      <>
        <div
          className="w-full hover:bg-black/25 cursor-pointer transition-all duration-150 h-12 flex flex-row items-center justify-start"
          onClick={() =>
            JumpToHash(
              HashGenerator(
                HashDataType.NAMAANGGOTA,
                data.data.nama + data.data.nim
              )
            )
          }
        >
          <img src={searchicon} className="ml-6 w-6 h-6" />
          <div className="text-black text-lg ml-4">
            {data.data.nama} - {data.data.nim}
          </div>
        </div>
      </>
    );
  }
  return rendered;
}

SearchResultItem.propTypes = {
  result: PropTypes.object.isRequired,
};

/**
 * @param {string} hash
 */
function JumpToHash(hash) {
  let element = document.getElementsByClassName(hash)[0];
  if (element != null) {
    element.scrollIntoView({
      block: "center",
    });
  }
}
