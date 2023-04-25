import { useEffect, useState } from "react";

function useTitle(title) {
  const [tle, setTle] = useState(title);
  useEffect(() => {
    document.title = tle;
  }, [title, tle]);
}

export default useTitle;
