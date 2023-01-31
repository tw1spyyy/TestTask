export  const getBgColor = (passwordLevel: string): string => {
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
  };