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
import { Anggota, Kelompok } from "../../pages/groups/data";
import PropTypes from "prop-types";
// @ts-expect-error
import personicon from "../../assets/personicon.svg";
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
      <div className="w-[90%] bg-white h-12 sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] rounded-[24px] flex flex-row items-center justify-start overflow-hidden">
        <div className="w-6"></div>
        <img src={searchicon} className="w-6 h-6" />
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
        />
      </div>
      {state.startedsearching && state.searchquery.length > 0 ? (
        state.skeleton ? (
          <>
            <div className="h-4"></div>
            <div className="h-4 w-[90%] sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%]">
              <PulsatingDiv />
            </div>
            <div className="h-4"></div>
            <div className="w-[90%] sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] bg-white/[.25] rounded flex flex-col p-2">
              <div className="h-20">
                <PulsatingDiv />
              </div>
              <div className="h-4"></div>
              <div className="h-20">
                <PulsatingDiv />
              </div>
              <div className="h-4"></div>
              <div className="h-20">
                <PulsatingDiv />
              </div>
              <div className="h-4"></div>
              <div className="h-20">
                <PulsatingDiv />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-4"></div>
            <div className="text-white text-lg w-[90%] sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] flex flex-row justify-start items-center">
              Found{" "}
              {state.latestsearchresult == null
                ? 0
                : state.latestsearchresult.result.length}{" "}
              results
            </div>
            <div className="h-4"></div>
            <div className="w-[90%] sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] bg-white/[.25] rounded flex flex-col p-2 pb-0">
              <IncrementalListBuilder
                generationid={state.latestsearchresult?.responseid ?? ""}
                items={state.latestsearchresult?.result ?? []}
                itemgenerator={(item) => <SearchResultItem result={item} />}
                key={Math.random().toString()}
              />
            </div>
          </>
        )
      ) : (
        <></>
      )}
    </>
  );
}

SearchSubSection.propTypes = {
  kelompokdata: PropTypes.array,
};

/**
 * @param {Object} props
 * @param {any[]} props.items
 * @param {(x: any) => JSX.Element} props.itemgenerator
 * @param {string} props.generationid
 */
function IncrementalListBuilder({ items, itemgenerator, generationid }) {
  const [state, setState] = useImmer({
    /**
     * @type {any[]}
     */
    cacheditems: [],
    /**
     * @type {JSX.Element[]}
     */
    rendercache: [],
    cachedgenerationid: "",
  });
  useEffect(() => {
    if (state.cachedgenerationid !== generationid) {
      setState((draft) => {
        draft.cacheditems = items;
        draft.rendercache = [];
        draft.cachedgenerationid = generationid;
      });
    } else {
      if (state.rendercache.length === state.cacheditems.length) {
        console.log("Incremental rendering done");
        console.log(state.rendercache.length, state.cacheditems.length);
      } else {
        requestAnimationFrame(() => {
          setState((draft) => {
            let item = state.cacheditems[state.rendercache.length];
            //console.log("Rendering", item);
            draft.rendercache.push(itemgenerator(item));
          });
        });
      }
    }
  });
  return <>{state.rendercache}</>;
}

IncrementalListBuilder.propTypes = {
  items: PropTypes.array.isRequired,
  itemgenerator: PropTypes.func.isRequired,
  generationid: PropTypes.string.isRequired,
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
      <div className="bg-white/[.25] rounded mb-4 flex flex-row p-4">
        <div className="min-w-full flex flex-row">
          <div
            className="bg-white rounded-[50%]
        aspect-square
        font-extrabold
        w-[120px]
        text-2xl
        sm:text-4xl
        sm:w-[132px]
        md:w-[140px]
        md:text-5xl
        lg:w-[150px]
        lg:text-6xl
        xl:w-[160px]
        flex items-center justify-center
        mr-6
        hover:bg-black/[.2]
        transition-all
        "
            onClick={() => {
              JumpToHash(
                HashGenerator(
                  HashDataType.NAMAANGGOTA,
                  data.data.nama + data.data.nim
                )
              );
            }}
          >
            <img src={personicon} className="w-[70%] h-[70%]" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <div
              className="spyagencyRegular font-bold text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl hover:bg-white/[.5] rounded transition-all"
              onClick={() => {
                JumpToHash(
                  HashGenerator(
                    HashDataType.NAMAANGGOTA,
                    data.data.nama + data.data.nim
                  )
                );
              }}
            >
              {data.data.nama}
            </div>
            <div
              className="spyagencyBoldItal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl hover:bg-white/[.5] rounded transition-all"
              onClick={() => {
                JumpToHash(
                  HashGenerator(
                    HashDataType.NAMAANGGOTA,
                    data.data.nama + data.data.nim
                  )
                );
              }}
            >
              {data.data.nim}
            </div>
            <div
              className="spyagencyBoldItal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl hover:bg-white/[.5] rounded transition-all"
              onClick={() => {
                JumpToHash(
                  HashGenerator(
                    HashDataType.JURUSAN,
                    data.data.jurusan + data.data.nim
                  )
                );
              }}
            >
              {data.data.jurusan}
            </div>
            <div
              className="spyagencyBoldItal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl hover:bg-white/[.5] rounded transition-all"
              onClick={() => {
                JumpToHash(
                  HashGenerator(
                    HashDataType.ANGKATAN,
                    data.data.angkatan + data.data.nim
                  )
                );
              }}
            >
              {data.data.angkatan}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (result.type === "kelompok") {
    /**
     * @type {KelompokResult}
     */
    // @ts-ignore
    let data = result;

    rendered = (
      <div className="bg-white/[.25] rounded mb-4 flex flex-row p-4">
        <div className="min-w-full flex flex-row">
          <div
            className="bg-white rounded-[50%]
        aspect-square
        font-extrabold
        w-[120px]
        text-2xl
        sm:text-4xl
        sm:w-[132px]
        md:w-[140px]
        md:text-5xl
        lg:w-[150px]
        lg:text-6xl
        xl:w-[160px]
        flex items-center justify-center
        mr-6
        hover:bg-black/[.2]
        transition-all
        "
            onClick={() => {
              JumpToHash(
                HashGenerator(
                  HashDataType.NOMORKELOMPOK,
                  data.data.nomorkelompok
                )
              );
            }}
          >
            <div className="spyagencyRegular font-bold text-black text-lg sm:text-2xl md:text-3xl lg:text-4xl rounded">
              {data.data.nomorkelompok}
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div
              className="spyagencyRegular font-bold text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl hover:bg-white/[.5] rounded transition-all"
              onClick={() => {
                JumpToHash(
                  HashGenerator(
                    HashDataType.NAMAKELOMPOK,
                    data.data.namakelompok + data.data.nomorkelompok
                  )
                );
              }}
            >
              Kelompok {data.data.namakelompok}
            </div>
            <div
              className="spyagencyBoldItal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl hover:bg-white/[.5] rounded transition-all"
              onClick={() => {
                JumpToHash(
                  HashGenerator(
                    HashDataType.NAMAMENTOR,
                    data.data.namamentor + data.data.nomorkelompok
                  )
                );
              }}
            >
              Mentor: {data.data.namamentor}
            </div>
            <div
              className="spyagencyBoldItal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl hover:bg-white/[.5] rounded transition-all"
              onClick={() => {
                JumpToHash(
                  HashGenerator(
                    HashDataType.NAMAMENTOR,
                    data.data.idline + data.data.nomorkelompok
                  )
                );
              }}
            >
              Id Line: {data.data.idline}
            </div>
          </div>
        </div>
      </div>
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
