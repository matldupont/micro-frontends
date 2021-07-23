import * as React from "react";
import { mount } from "marketing/MarketingApp";

export function MarketingApp() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
}
