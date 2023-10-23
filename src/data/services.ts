type Service = {
  order: number;
  shortcut: string;
  name: string;
  tagline: string;
  desc: string;
};

const services: Service[] = [
  {
    order: 1,
    shortcut: "atvs",
    name: "ATVS traveling",
    tagline: "Feel the adrenaline rush",
    desc: "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
  },
  {
    order: 2,
    shortcut: "climb",
    name: "Rock climbing",
    tagline: "Destroy your limitations",
    desc: "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
  },
  {
    order: 3,
    shortcut: "balloon",
    name: "Hot air ballooning",
    tagline: "Get Inspired",
    desc: "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
  },
  {
    order: 4,
    shortcut: "skydive",
    name: "Skydiving",
    tagline: "Overcome your fears",
    desc: "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
  },
  {
    order: 5,
    shortcut: "raft",
    name: "Rafting",
    tagline: "Trust the flow",
    desc: "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
  },
];

export default services;
