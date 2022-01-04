export enum eCategory {
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

export interface iWork {
  mainTitle: eCategory
  title: string
  image: string
  icons: eIcon[]
  ocupation: number
}

const work = {
  1: {
    mainTitle: eCategory.BF,
    title: "OCBC Pay Anyone",
    image: `./images/PAO-0@2x.jpg`,
    icons: [eIcon.APP, eIcon["UI/UX"]],
    ocupation: 2,
  },
  2: {
    mainTitle: eCategory.OT,
    title: "Ecolab",
    image: `./images/ECO-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 1,
  },
  3: {
    mainTitle: `${eCategory.OT} ${eCategory.SU}`,
    title: "KIWI Auto Marketplace",
    image: `./images/KIWI-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 1,
  },
  4: {
    mainTitle: eCategory.LS,
    title: "Furama Hotels",
    image: `./images/FURAMA-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.WEB],
    ocupation: 1,
  },
  5: {
    mainTitle: eCategory.TL,
    title: "Woodlands Transport",
    image: `./images/WTS-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon["UI/UX"], eIcon.WEB],
    ocupation: 1,
  },
  6: {
    mainTitle: `${eCategory.LS}, ${eCategory.RE}, ${eCategory.SU}`,
    title: "Ready To Travel (SATS)",
    image: `./images/RTT-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 2,
  },
  7: {
    mainTitle: `${eCategory.LS}`,
    title: "Yoga Movement",
    image: `./images/YM-0@2x-1.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 2,
  },
  8: {
    mainTitle: eCategory.RE,
    title: "Don Don Donki",
    image: `./images/DONKI-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 2,
  },
  9: {
    mainTitle: eCategory.TL,
    title: "TAP Ride Hailing",
    image: `./images/TAP-0@2x.jpg`,
    icons: [eIcon.APP],
    ocupation: 1,
  },
  10: {
    mainTitle: eCategory.OT,
    title: "FWD Insurance",
    image: `./images/FWD-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 2,
  },
  11: {
    mainTitle: eCategory.RE,
    title: "Isatan",
    image: `./images/ISETAN-0@2x.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon["UI/UX"]],
    ocupation: 1,
  },
  12: {
    mainTitle: eCategory.RE,
    title: "HBO GO",
    image: `./images/HBO-0@2x.jpg`,
    icons: [eIcon.APP, eIcon["UI/UX"]],
    ocupation: 2,
  },
  13: {
    mainTitle: eCategory.TC,
    title: "MyRepublic Mobile",
    image: `./images/MYR.jpg`,
    icons: [eIcon.APP, eIcon["UI/UX"]],
    ocupation: 1,
  },

  14: {
    mainTitle: eCategory.TL,
    title: "ComfortDelGro",
    image: `./images/CDG-2-1.jpg`,
    icons: [eIcon.APP],
    ocupation: 1,
  },

  15: {
    mainTitle: eCategory.RE,
    title: "7Rewards",
    image: `./images/711.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS],
    ocupation: 2,
  },
  16: {
    mainTitle: eCategory.RE,
    title: "FairPrice Online",
    image: `./images/FPOL.jpg`,
    icons: [eIcon["UI/UX"]],
    ocupation: 2,
  },
  17: {
    mainTitle: eCategory.RE,
    title: "Charlies & Keith / Pedro",
    image: `./images/ck.jpg`,
    icons: [eIcon.APP],
    ocupation: 2,
  },
  18: {
    mainTitle: eCategory.RE,
    title: "Justice League",
    image: `./images/thumbnail-justice_league@2x.jpg`,
    icons: [eIcon.APP],
    ocupation: 2,
  },
  19: {
    mainTitle: eCategory.HC,
    title: "Fullerton Health",
    image: `./images/fullerton-health-thumbnail@2x.jpg`,
    icons: [eIcon.APP],
    ocupation: 1,
  },

  20: {
    mainTitle: eCategory.LS,
    title: "Sky Premium",
    image: `./images/skypremium-thumbnail@2x.jpg`,
    icons: [eIcon.APP, eIcon.WEB],
    ocupation: 1,
  },
  21: {
    mainTitle: eCategory.LS,
    title: "T Singapore",
    image: `./images/TSingapore-thumbnail@2x.jpg`,
    icons: [eIcon.WEB, eIcon.CMS],
    ocupation: 2,
  },
  22: {
    mainTitle: eCategory.TL,
    title: "SingPost",
    image: `./images/singpost-thumbnail@2x.jpg`,
    icons: [eIcon.APP, eIcon["UI/UX"]],
    ocupation: 1,
  },
  23: {
    mainTitle: `${eCategory.CI}, ${eCategory.SU} ${eCategory.FB}`,
    title: "Dine Inn",
    image: `./images/dineinn.jpg`,
    icons: [eIcon.APP, eIcon.CMS, eIcon.WEB],
    ocupation: 1,
  },
  24: {
    mainTitle: eCategory.TL,
    title: "Siemens Engineering",
    image: `./images/siemens.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS],
    ocupation: 1,
  },

  25: {
    mainTitle: eCategory.NT,
    title: "Singapore Grand Prix",
    image: `./images/f1.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS],
    ocupation: 1,
  },
  26: {
    mainTitle: `${eCategory.TL}, ${eCategory.CI}, ${eCategory.SU}`,
    title: "FastFast Delivery",
    image: `./images/FF-1.jpg`,
    icons: [eIcon.APP, eIcon.WEB, eIcon.CMS],
    ocupation: 2,
  },
  27: {
    mainTitle: eCategory.FB,
    title: "McDonald's",
    image: `./images/mc-cafe-thumbnail@2x.jpg`,
    icons: [eIcon.APP],
    ocupation: 1,
  },
}

export const AL = {
  title: eCategory.AL,
  work: Object.values(work),
}
export const TL = {
  title: eCategory.TL,
  work: [work[5], work[9], work[14], work[22], work[24], work[26]],
}

export const CI = {
  title: eCategory.CI,
  work: [work[23], work[26]],
}

export const TC = {
  title: eCategory.TC,
  work: [work[13]],
}

export const FB = {
  title: eCategory.FB,
  work: [work[23], work[27]],
}

export const BF = {
  title: eCategory.BF,
  work: [work[1]],
}

export const HC = {
  title: eCategory.HC,
  work: [work[19]],
}

export const OT = {
  title: eCategory.OT,
  work: [work[2], work[3], work[10]],
}

export const LS = {
  title: eCategory.LS,
  work: [work[4], work[6], work[7], work[20], work[21]],
}

export const RE = {
  title: eCategory.RE,
  work: [work[6], work[11], work[8], work[12], work[15], work[16], work[17], work[18]],
}

export const SU = {
  title: eCategory.SU,
  work: [work[3], work[6], work[23], work[26]],
}
