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

function capitalizeWords(sentence) {
  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

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
    antiblur: false,
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
      message.kelompokmaster = kelompokdata;
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
      <div
        className="overflow-visible h-12 w-[90%] bg-white sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] rounded-[24px] z-10"
        onMouseEnter={() => {
          setState((draft) => {
            draft.antiblur = true;
          });
        }}
        onMouseLeave={() => {
          setState((draft) => {
            draft.antiblur = false;
          });
        }}
      >
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
                if (state.antiblur) {
                  return;
                }
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
                      setState={setState}
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
 * @param {(updater: (state: {antiblur: boolean, hideresults: boolean}) => void) => void} props.setState
 */
function SearchResultItem({ result, setState }) {
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
          className="w-full hover:bg-black/25 cursor-pointer transition-all duration-150 min-h-12 flex flex-row items-center justify-start text-left"
          onClick={() => {
            setState((draft) => {
              draft.antiblur = false;
              draft.hideresults = true;
            });
            JumpToHash(
              HashGenerator(
                HashDataType.NAMAANGGOTA,
                data.data.nama + data.data.nim
              )
            );
          }}
        >
          <img src={searchicon} className="ml-5 w-5 h-5 lg:ml-6 lg:w-6 lg:h-6" />
          <div className="text-black text-sm md:text-base lg:text-lg ml-4">
            {capitalizeWords(data.data.nama)} - {data.data.nim}
          </div>
        </div>
      </>
    );
  } else if (result.type == "kelompok") {
    /**
     * @type {KelompokResult}
     */
    // @ts-ignore
    let data = result;
    rendered = (
      <>
        <div
          className="w-full hover:bg-black/25 cursor-pointer transition-all duration-150 min-h-12 flex flex-row items-center justify-start text-left"
          onClick={() => {
            setState((draft) => {
              draft.antiblur = false;
              draft.hideresults = true;
            });
            JumpToHash(
              HashGenerator(HashDataType.NAMAMENTOR, data.data.namamentor)
            );
          }}
        >
          <img src={searchicon} className="ml-5 w-5 h-5 lg:ml-6 lg:w-6 lg:h-6" />
          <div className="text-black text-sm md:textbase lg:text-lg ml-4">{data.data.namamentor}</div>
        </div>
      </>
    );
  }
  return rendered;
}

SearchResultItem.propTypes = {
  result: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

/**
 * @param {string} hash
 */
function JumpToHash(hash) {
  console.log("Jumping to hash", hash);
  let element = document.getElementsByClassName(hash)[0];
  if (element != null) {
    element.scrollIntoView({
      block: "center",
    });
  }
}
