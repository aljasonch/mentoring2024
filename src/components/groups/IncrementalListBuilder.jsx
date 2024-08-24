/* eslint-disable no-unused-vars */
import { useImmer } from "use-immer";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
/**
 * @param {Object} props
 * @param {any[]} props.items
 * @param {(x: any) => JSX.Element} props.itemgenerator
 * @param {string} props.generationid
 */
export function IncrementalListBuilder({ items, itemgenerator, generationid }) {
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
        setTimeout(() => {
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
