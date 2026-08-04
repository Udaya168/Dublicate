import { useState, useCallback } from "react";

export interface HistoryState<T> {
  past: T[];
  present: T;
  future: T[];
}

export interface UseUndoRedoReturn<T> {
  state: T;
  set: (newState: T | ((prev: T) => T)) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  history: T[];
  future: T[];
  reset: (newInitialState?: T) => void;
}

export function useUndoRedo<T>(initialState: T, maxHistoryDepth = 50): UseUndoRedoReturn<T> {
  const [history, setHistory] = useState<HistoryState<T>>({
    past: [],
    present: initialState,
    future: [],
  });

  const set = useCallback((newState: T | ((prev: T) => T)) => {
    setHistory((current) => {
      const resolvedState =
        typeof newState === "function"
          ? (newState as (prev: T) => T)(current.present)
          : newState;

      if (Object.is(current.present, resolvedState)) {
        return current;
      }

      const updatedPast = [...current.past, current.present];
      if (updatedPast.length > maxHistoryDepth) {
        updatedPast.shift();
      }

      return {
        past: updatedPast,
        present: resolvedState,
        future: [],
      };
    });
  }, [maxHistoryDepth]);

  const undo = useCallback(() => {
    setHistory((current) => {
      if (current.past.length === 0) return current;

      const previous = current.past[current.past.length - 1];
      const newPast = current.past.slice(0, current.past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [current.present, ...current.future],
      };
    });
  }, []);

  const redo = useCallback(() => {
    setHistory((current) => {
      if (current.future.length === 0) return current;

      const next = current.future[0];
      const newFuture = current.future.slice(1);

      return {
        past: [...current.past, current.present],
        present: next,
        future: newFuture,
      };
    });
  }, []);

  const reset = useCallback((newInitialState?: T) => {
    setHistory({
      past: [],
      present: newInitialState !== undefined ? newInitialState : initialState,
      future: [],
    });
  }, [initialState]);

  const canUndo = history.past.length > 0;
  const canRedo = history.future.length > 0;

  return {
    state: history.present,
    set,
    undo,
    redo,
    canUndo,
    canRedo,
    history: history.past,
    future: history.future,
    reset,
  };
}