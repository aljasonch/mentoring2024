/* eslint-disable no-unused-vars */
// @ts-check
import { useImmer } from "use-immer";
import {
  Kelompok,
  Anggota,
  AnggotaList,
  KelompokList,
  IncrementalRenderingMethod,
} from "./data";
import React, { memo, useCallback, useEffect, useState } from "react";
import KelompokItem from "../../components/groups/KelompokItem";
import { immerable } from "immer";
import KelompokItemSkeleton from "../../components/groups/KelompokItemSkeleton";
import SearchSubSection from "../../components/groups/SearchSubSection";
import { detect } from "detect-browser";
import { fetchDataFromCache } from "./datafetcher";
import "./style.css";
class PageState {
  [immerable] = true;
  /**
   * Semua kelompok yang ada, termasuk anggotanya
   * @type {KelompokList}
   * @public
   */
  semuakelompok = KelompokList.create();

  /**
   * @type {JSX.Element[]}
   */
  rendercache = [];

  /**
   * @type {KelompokList}
   */
  statecache = KelompokList.create();

  /**
   * Set ke true jika user mulai search, untuk throttle
   */
  triggersearch = true;

  showsearch = false;

  initialdatafetch = false;

  startdatafetch = true;

  skeleton = true;
  /**
   * @type {((callback: () => void) => void) | null}
   * */
  renderingmethod = null;
}

export class Globals {
  static StateContext = React.createContext({
    /**
     * @type {PageState | null}
     * */
    state: null,
    setState: (k) => {},
  });
}

export default function Groups() {
  /**
   * @type {[PageState, (k: PageState) => void]}
   *
   * */
  const [state, setState] = useImmer(new PageState());
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (state.renderingmethod == null) {
      const browser = detect();
      switch (browser && browser.name) {
        case "edge":
        case "edge-chromium":
        case "chromium-webview":
        case "chrome":
          setState(
            /**
             * @param {PageState} draft
             */
            // @ts-ignore
            (draft) => {
              console.log("Rendering with ALL_EXCEPT_SAFARI");
              draft.renderingmethod =
                IncrementalRenderingMethod.ALL_EXCEPT_SAFARI;
            }
          );
          break;
        case "firefox":
          setState(
            /**
             * @param {PageState} draft
             */
            // @ts-ignore
            (draft) => {
              console.log("Rendering with FIREFOX_FAST method");
              draft.renderingmethod = IncrementalRenderingMethod.FIREFOX_FAST;
            }
          );
          break;
        default:
          setState(
            /**
             * @param {PageState} draft
             */
            // @ts-ignore
            (draft) => {
              console.log("Rendering with FAILSAFE method");
              draft.renderingmethod = IncrementalRenderingMethod.FAILSAFE;
            }
          );
          break;
      }
    }
  }, [state.renderingmethod, setState]);
  useEffect(() => {
    if (state.startdatafetch) {
      let request = fetchDataFromCache();
      setState(
        /**
         * @param {PageState} draft
         */
        // @ts-ignore
        (draft) => {
          draft.skeleton = true;
          draft.startdatafetch = false;
        }
      );
      console.log("Fetching data");
      request
        .then((kelompoklist) => {
          setState(
            /**
             * @param {PageState} draft
             */
            // @ts-ignore
            (draft) => {
              if (draft.semuakelompok.kelompok.length != 0) {
                console.log("Data already fetched");
                return;
              }
              draft.startdatafetch = false;
              draft.initialdatafetch = true;
              draft.skeleton = false;

              draft.semuakelompok = kelompoklist;
              draft.rendercache = [];
            }
          );
        })
        .catch((err) => {
          console.error(err);
          setState(
            /**
             * @param {PageState} draft
             */
            // @ts-ignore
            (draft) => {
              draft.startdatafetch = true;
            }
          );
        });
    }
  }, [state, setState]);
  useEffect(() => {
    if (!state.initialdatafetch) {
      return;
    }
    if (state.semuakelompok.generationID !== state.statecache.generationID) {
      console.log("Resetting render cache");

      setState(
        /**
         * @param {PageState} draft
         */
        // @ts-ignore
        (draft) => {
          draft.statecache = state.semuakelompok;
          draft.rendercache = [];
        }
      );
    } else {
      if (state.rendercache.length === state.semuakelompok.kelompok.length) {
        console.log("Top Rendering done");
        console.log(
          state.rendercache.length,
          state.semuakelompok.kelompok.length
        );
      } else {
        if (state.renderingmethod == null) {
          return;
        }
        state.renderingmethod(() => {
          setState(
            /**
             * @param {PageState} draft
             */
            // @ts-ignore
            (draft) => {
              let kelompok =
                state.semuakelompok.kelompok[state.rendercache.length];
              //console.log("Rendering", kelompok.anggota.list.length);
              draft.rendercache.push(
                <KelompokItem
                  key={kelompok.namakelompok}
                  kelompok={kelompok}
                  rendermethod={state.renderingmethod}
                />
              );
            }
          );
        });
      }
    }
  }, [state, setState]);

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    // Function to scroll back to the top
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
  return (
    <div>
      <div className="px-4 mb-12 sm:px-0 max-w-4xl mx-auto text-center xss:pt-32 xs:pt-40 md:pt-52 md:pb-15 ">
        <h1 className="spyagencyBoldItal font-normal text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          GROUPS
        </h1>
        <h4 className="text-white font-medium text-lg sm:text-xl lg:text-2xl mt-1">
          MENTORING UMN 2024
        </h4>
      </div>
      <div className="w-full mb-12 flex flex-col items-center justify-center ">
        <Globals.StateContext.Provider value={{ state, setState }}>
          <SearchSubSection kelompokdata={state.statecache.kelompok} />
          <div className="h-12"></div>
          {state.rendercache.length !== state.semuakelompok.kelompok.length && (
            <>
              <div className="w-[90%]  h-12 mb-12 sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] flex flex-row bg-white/[.25] rounded items-center justify-start text-white">
                <div className="w-fit inline-block whitespace-nowrap ml-4">
                  Loading: {state.rendercache.length} /{" "}
                  {state.semuakelompok.kelompok.length}
                </div>
                <div className="m-4 bg-white/[.25] w-full h-8 rounded flex flex-row">
                  <div
                    className="h-full bg-blue-600 rounded"
                    style={{
                      width: `${
                        (state.rendercache.length /
                          state.semuakelompok.kelompok.length) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </>
          )}

          <div className="w-[90%] h-full sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] flex flex-col">
            {state.skeleton ? (
              <KelompokItemSkeleton numberofrows={5} />
            ) : (
              state.rendercache
            )}
          </div>
        </Globals.StateContext.Provider>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-opacity"
          style={{ zIndex: 1000 }}
          >
          ↑ Back to Top
        </button>
      )}
    </div>
  );
}
