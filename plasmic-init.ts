import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "qEkrN6GQj486Q1PvZcJReH";
export const projectApiToken = "wESqSjlRNkZKIUK0x6OrHkGbaDK6URKlTRKxnWKNrlLiscpW4Ipbh50QF8yD2Adg9HjvhE2oRdXh3myneqDA";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
