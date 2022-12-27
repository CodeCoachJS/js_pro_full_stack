import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

if (process.env.NODE_ENV === "test") {
  require("react-dom").hydrate(<RemixBrowser />, document);
} else {
  hydrateRoot(document, <RemixBrowser />);
}
