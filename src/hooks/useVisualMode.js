import { useState } from "react";


export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {

    if (replace) {
      const diffHistory = [...history]
      diffHistory.pop()
      setHistory([...diffHistory, newMode])
    } else {
      setHistory([...history, newMode])
    }

    setMode(newMode);
  };

  function back() {

    if (history.length > 1) {
      const diffHistory = [...history]
      diffHistory.pop()
      setHistory([...diffHistory])
      setMode(diffHistory[diffHistory.length - 1])

    }
  };
  return { mode, transition, back }
};





