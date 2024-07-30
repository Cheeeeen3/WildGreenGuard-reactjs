import axios from "axios";

const plantData = [
  {
    name: "Flossflower",
    scientificName: "Ageratum houstonianum",
    imageUrl: "/src/assets/Plants/Flossflower.jpg",
    isInvasive: true,
    info: "It is an annual plant with a height ranging from 30 to 100 cm. The leaves are ovate to triangular-ovate, with a length of 2 to 7 cm, having a blunt apex and a shallow heart-shaped base. The edges of the leaves are serrated. It is distributed in regions with an elevation of up to 1,300 m.",
  },
  {
    name: "Spiny Pigweed",
    scientificName: "Amaranthus spinosus",
    imageUrl: "/src/assets/Plants/Spiny_Pigweed.jpg",
    isInvasive: false,
    info: "The plant reaches a height of approximately 30 to 100 cm. The flower color is green. It is distributed throughout Taiwan, particularly commonly found around cultivated fields.",
  },
  {
    name: "Pilose Beggarticks",
    scientificName: "Bidens pilosa var radiata",
    imageUrl: "/src/assets/Plants/Pilose_Beggarticks.jpg",
    isInvasive: true,
    info: "The plant reaches a height of 2m, blooms throughout the year, and is highly resistant to natural disasters. It is distributed in low-altitude areas throughout Taiwan, up to an elevation of 1,000 m.",
  },
  {
    name: "Silver cock's comb",
    scientificName: "Celosia argentea",
    imageUrl: "/src/assets/Plants/Silver_cocks_comb.jpg",
    isInvasive: true,
    info: "Commonly known as plumed cockscomb, it grows to a height of 30 to 100 cm, with cylindrical-shaped flowers in white or purplish-red.It is distributed in low-altitude areas throughout Taiwan.",
  },
  {
    name: "Swollen finger grass",
    scientificName: "Chloris barbata",
    imageUrl: "/src/assets/Plants/Swollen_finger_grass.jpg",
    isInvasive: true,
    info: "It grows to a height of 30 to 120 cm, with spike-like inflorescences in a purplish-red color. It is distributed in low-altitude and coastal areas throughout Taiwan.",
  },
  {
    name: "Redflower ragleaf",
    scientificName: "Crassocephalum crepidioides",
    imageUrl: "/src/assets/Plants/Redflower_ragleaf.jpg",
    isInvasive: true,
    info: "It reaches a height of up to 1 meter, with flowers in a reddish-brown color, and is distributed in broad regions at low to mid-altitudes throughout Taiwan.",
  },
  {
    name: "Goosegrass",
    scientificName: "Eleusine indica",
    imageUrl: "/src/assets/Plants/Goosegrass.jpg",
    isInvasive: false,
    info: "The roots penetrate deeply, making it hard to remove. It has a spike-like inflorescence, with the flower cluster measuring 3-9 cm in length, and it is distributed throughout Taiwan.",
  },
  {
    name: "Common lantana",
    scientificName: "Lantana camara",
    imageUrl: "/src/assets/Plants/Common_lantana.jpg",
    isInvasive: true,
    info: "The leaves are wedge-shaped or heart-shaped. With ball-shaped flowers, the corolla color is extremely diverse in Common lantana. It is distributed in low-altitude throughout Taiwan.",
  },
  {
    name: "River tamarind",
    scientificName: "Leucaena leucocephala",
    imageUrl: "/src/assets/Plants/River_tamarind.jpg",
    isInvasive: true,
    info: "It reaches a height of up to 10 m, with pods measuring 10-15 cm in length. The seeds are brown, smooth, and shiny. It is distributed in areas below 3,000 m altitude throughout Taiwan.",
  },
  {
    name: "Bitter vine",
    scientificName: "Mikania micrantha",
    imageUrl: "/src/assets/Plants/Bitter_vine.jpg",
    isInvasive: true,
    info: "The corolla is white, leaves are heart-shaped. The stems are slender and long, usually climbing and twining around other objects. It is distributed in areas below 1,000 m altitude throughout Taiwan.",
  },
  {
    name: "Silver grass",
    scientificName: "Pennisetum purpureum",
    imageUrl: "/src/assets/Plants/Silver_grass.jpg",
    isInvasive: false,
    info: "It reaches a height of approximately 1 to 3 m. During the start of the flowering stage, the inflorescence color presents as pale yellow. It is distributed in low-altitude regions throughout Taiwan.",
  },
  {
    name: "Napier grass",
    scientificName: "Miscanthus species",
    imageUrl: "/src/assets/Plants/Napier_grass.jpg",
    isInvasive: true,
    info: "It reaches a height of up to 3 m. The inflorescence is a stiff terminal bristly spike, with a soft texture. It is distributed in areas below 1,500 m altitude throughout Taiwan.",
  },
  {
    name: "Arrowhead Plant",
    scientificName: "Syngonium podophyllum",
    imageUrl: "/src/assets/Plants/Arrowhead_Plant.jpg",
    isInvasive: true,
    info: "With its arrowhead-shaped leaves, this climbing plant exhibits a lovely leaf color featuring a mix of white and green. It is commonly found in low-altitude areas in northern Taiwan.",
  },
  {
    name: "Tree marigold",
    scientificName: "Tithonia diversifolia",
    imageUrl: "/src/assets/Plants/Tree_marigold.jpg",
    isInvasive: true,
    info: "It reaches a height of up to 3 m and has yellow petals. It is distributed throughout Taiwan in low to mid-altitude areas.",
  },
];

async function getPlantData() {
  try {
    // const response = await axios.get("https://0268-2001-b400-e35d-c280-a9f7-5438-8d07-77ca.ngrok-free.app/plants/info/data", {headers: {'ngrok-skip-browser-warning': 'any'}});
    // const response = await axios.get("host:port/plant/database", {
    //   headers: { "ngrok-skip-browser-warning": "any" },
    // });
    return plantData;
  //   if (response.status === 200) {
  //     // return response.data;
  //   }
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 500) {
      console.log(error.response.data.message);
    } else if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(String(error));
    }
  }
}

export default getPlantData;
