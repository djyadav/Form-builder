import FORM_TEMPLATES from "./stubs/FORM_TEMPLATES";
const getData = (routeTemplateId) => {
  try {
    console.log("rou", routeTemplateId);
    return FORM_TEMPLATES.filter(
      ({ templateId }) => templateId == routeTemplateId
    )[0];
  } catch (e) {
    return null;
  }
};
export default getData;
