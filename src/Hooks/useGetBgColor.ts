import React from "react";

export  const useGetBgColor = (passwordLevel: string): string => {
    return React.useMemo(() =>{
      switch (passwordLevel) {
        case "enter at least 8 characters":
          return "red";
        case "easy":
          return "red";
        case "medium":
          return "yellow";
        case "strong":
          return "green";
        default:
          return "grey";
      }
    }, [passwordLevel])
  };