export  const getBgColor = (passwordLevel: string): string => {
    switch (passwordLevel) {
      case "none":
        return "red";
        break;
      case "easy":
        return "red";
        break;
      case "medium":
        return "yellow";
        break;
      case "strong":
        return "green";
        break;
      default:
        return "grey";
    }
  };