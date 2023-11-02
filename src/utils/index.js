import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import mjml2html from "mjml";

export function renderReactToMjml(email) {
  return mjml2html(renderToMjml(email));
}
