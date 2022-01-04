export enum eWork {
  AL = "ALL",
  FB = "Food & Beverage",
  MD = "Media",
  TL = "Transport & Logistics",
  BF = "Banking & Finance",
  LS = "Lifestyle",
  CI = "Co-incubation",
  HC = "Healthcare",
  RE = "Retail & Entertainment",
  TC = "Telco",
  OT = "Others",
  SU = "Start-ups",
  NT = "",
}

export enum eIcon {
  APP = "./icons/ico-app.svg",
  CMS = "./icons/ico-cms.svg",
  "UI/UX" = "./icons/ico-uiux.svg",
  WEB = "./icons/ico-web.svg",
}

const work = {
  1: {
    mainTitle: eWork.BF,
    title: "OCBC Pay Anyone",
    image: `./images/PAO-0@2x.jpg`,
    icons: [eIcon.APP, eIcon["UI/UX"]],
    ocupation: 2,
  },
  2: {
    mainTitle: eWork.OT,
    title: "Ecolab",
    image: `./images/ECO-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 1,
  },
  3: {
    mainTitle: `${eWork.OT} ${eWork.SU}`,
    title: "KIWI Auto Marketplace",
    image: `./images/KIWI-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 1,
  },
  4: {
    mainTitle: eWork.LS,
    title: "Furama Hotels",
    image: `./images/FURAMA-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.WEB],
    ocupation: 1,
  },
  5: {
    mainTitle: eWork.TL,
    title: "Woodlands Transport",
    image: `./images/WTS-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon["UI/UX"], eIcon.WEB],
    ocupation: 1,
  },
  6: {
    mainTitle: `${eWork.LS}, ${eWork.RE}, ${eWork.SU}`,
    title: "Ready To Travel (SATS)",
    image: `./images/RTT-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 2,
  },
  7: {
    mainTitle: `${eWork.LS}`,
    title: "Yoga Movement",
    image: `./images/YM-0@2x-1.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 2,
  },
  8: {
    mainTitle: eWork.RE,
    title: "Don Don Donki",
    image: `./images/DONKI-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 2,
  },
  9: {
    mainTitle: eWork.TL,
    title: "TAP Ride Hailing",
    image: `./images/TAP-0@2x.jpg`,
    icons: [eIcon.APP],
    ocupation: 1,
  },
  10: {
    mainTitle: eWork.OT,
    title: "FWD Insurance",
    image: `./images/fFWD-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 2,
  },
  11: {
    mainTitle: eWork.RE,
    title: "Isatan",
    image: `./images/ISETAN-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 1,
  },
  12: {
    mainTitle: eWork.RE,
    title: "HBO GO",
    image: `./images/HBO-0@2x.jpg`,
    icons: [eIcon.APP, eIcon["UI/UX"]],
    ocupation: 2,
  },
  13: {
    mainTitle: eWork.TC,
    title: "MyRepublic Mobile",
    image: `./images/MYR.jpg`,
    icons: [eIcon.APP, eIcon["UI/UX"]],
    ocupation: 1,
  },

  14: {
    mainTitle: eWork.TL,
    title: "ComfortDelGro",
    image: `./images/CDG-2-1.jpg`,
    icons: [eIcon.APP],
    ocupation: 1,
  },

  15: {
    mainTitle: eWork.RE,
    title: "7Rewards",
    image: `./images/711.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS],
    ocupation: 2,
  },
  16: {
    mainTitle: eWork.RE,
    title: "FairPrice Online",
    image: `./images/FPOL.jpg`,
    icons: [eIcon["UI/UX"]],
    ocupation: 2,
  },
  17: {
    mainTitle: eWork.RE,
    title: "Charlies & Keith / Pedro",
    image: `./images/ck.jpg`,
    icons: [eIcon.APP],
    ocupation: 2,
  },
  18: {
    mainTitle: eWork.RE,
    title: "Justice League",
    image: `./images/thumbnail-justice_league@2x.jpg`,
    icons: [eIcon.APP],
    ocupation: 2,
  },
  19: {
    mainTitle: eWork.HC,
    title: "Fullerton Health",
    image: `./images/fullerton-health-thumbnail@2x.jpg`,
    icons: [eIcon.APP],
    ocupation: 1,
  },

  20: {
    mainTitle: eWork.LS,
    title: "Sky Premium",
    image: `./images/skypremium-thumbnail@2x.jpg`,
    icons: [eIcon.APP, eIcon.WEB],
    ocupation: 1,
  },
  21: {
    mainTitle: eWork.LS,
    title: "T Singapore",
    image: `./images/TSingapore-thumbnail@2x.jpg`,
    icons: [eIcon.WEB, eIcon.CMS],
    ocupation: 2,
  },
  22: {
    mainTitle: eWork.TL,
    title: "SingPost",
    image: `./images/singpost-thumbnail@2x.jpg`,
    icons: [eIcon.APP, eIcon["UI/UX"]],
    ocupation: 1,
  },
  23: {
    mainTitle: `${eWork.CI}, ${eWork.SU} ${eWork.FB}`,
    title: "Dine Inn",
    image: `./images/dineinn.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon.WEB],
    ocupation: 1,
  },
  24: {
    mainTitle: eWork.TL,
    title: "Siemens Engineering",
    image: `./images/siemens.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS],
    ocupation: 1,
  },

  25: {
    mainTitle: eWork.NT,
    title: "Singapore Grand Prix",
    image: `./images/f1.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS],
    ocupation: 1,
  },
  26: {
    mainTitle: `${eWork.TL}, ${eWork.CI}, ${eWork.SU}`,
    title: "FastFast Delivery",
    image: `./images/FF-1.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS],
    ocupation: 2,
  },
  27: {
    mainTitle: eWork.FB,
    title: "McDonald's",
    image: `./images/mc-cafe-thumbnail@2x.jpg`,
    icons: [eIcon.APP],
    ocupation: 1,
  },
}

export const AL = {
  title: eWork.AL,
  work: [Object.values(work)],
}
export const TL = {
  title: eWork.TL,
  work: [work[5], work[9], work[14], work[22], work[24], work[26]],
}

export const CI = {
  title: eWork.CI,
  work: [work[23], work[26]],
}

export const TC = {
  title: eWork.TC,
  work: [work[13]],
}

export const FB = {
  title: eWork.FB,
  work: [work[23], work[27]],
}

export const BF = {
  title: eWork.BF,
  work: [work[1]],
}

export const HC = {
  title: eWork.HC,
  work: [work[19]],
}

export const OT = {
  title: eWork.OT,
  work: [work[2], work[3], work[10]],
}

export const LS = {
  title: eWork.LS,
  work: [work[4], work[6], work[7], work[20], work[21]],
}

export const RE = {
  title: eWork.RE,
  work: [work[6], work[11], work[8], work[12], work[15], work[16], work[17], work[18]],
}

export const SU = {
  title: eWork.SU,
  work: [work[3], work[6], work[23], work[26]],
}
