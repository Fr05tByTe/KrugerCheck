const STORAGE_KEY = "kruger-trip-tracker-v2";

const MAMMAL_NAMES = [
  "Aardvark",
  "Aardwolf",
  "African Wild Cat",
  "African Wild Dog",
  "Angolan Free-tailed Bat",
  "Banana Bat",
  "Bat-eared Fox",
  "Black-backed Jackal",
  "Black-footed Cat",
  "Black Rhinoceros",
  "Blue Duiker",
  "Blue Wildebeest",
  "Bushbuck",
  "Bushpig",
  "Cape Clawless Otter",
  "Cape Fox",
  "Cape Hare",
  "Cape Porcupine",
  "Caracal",
  "Cheetah",
  "Chacma Baboon",
  "Civet",
  "Common Dwarf Mongoose",
  "Common Eland",
  "Common Genet",
  "Common Reedbuck",
  "Common Warthog",
  "Crested Porcupine",
  "Egyptian Free-tailed Bat",
  "Four-toed Elephant Shrew",
  "Giraffe",
  "Greater Cane Rat",
  "Greater Galago",
  "Greater Kudu",
  "Grey Duiker",
  "Grey Rhebok",
  "Honey Badger",
  "Hippopotamus",
  "Impala",
  "Jameson’s Red Rock Hare",
  "Klipspringer",
  "Leopard",
  "Lesser Bushbaby",
  "Lion",
  "Marabou Stork Bat",
  "Marsh Mongoose",
  "Meerkat",
  "Meller’s Mongoose",
  "Mountain Reedbuck",
  "Natal Long-fingered Bat",
  "Nile Rat",
  "Nyala",
  "Pangolin",
  "Peter’s Epauletted Fruit Bat",
  "Plaintive Free-tailed Bat",
  "Plains Zebra",
  "Red Duiker",
  "Roan Antelope",
  "Rock Dassie",
  "Rusty-spotted Genet",
  "Sable Antelope",
  "Sharpe’s Grysbok",
  "Side-striped Jackal",
  "Slender Mongoose",
  "Southern African Hedgehog",
  "Southern African Spring Hare",
  "Southern Reedbuck",
  "Spotted Hyena",
  "Steenbok",
  "Striped Hyena",
  "Suni",
  "Tsessebe",
  "Vervet Monkey",
  "Waterbuck",
  "White Rhinoceros",
  "White-tailed Mongoose",
  "Wahlberg’s Epauletted Fruit Bat",
  "Wahlberg’s Velvet Gecko Mouse",
  "Yellow Mongoose",
  "African Bush Elephant",
  "African Buffalo",
  "Large-spotted Genet",
  "Serval",
  "African Civet",
  "Banded Mongoose",
  "Dwarf Mongoose",
  "Mongoose (unidentified)",
  "Scrub Hare",
  "Springhare",
  "Bushveld Gerbil",
  "Woodland Dormouse",
  "South African Ground Squirrel",
  "Tree Squirrel",
  "Striped Polecat",
  "Zorilla",
  "African Striped Weasel",
  "Spotted-necked Otter",
  "Brown Hyena",
  "African Palm Civet",
  "Large Grey Mongoose",
  "Selous' Mongoose",
  "Water Mongoose",
  "Bushy-tailed Mongoose",
  "Cape Ground Squirrel",
  "Red Squirrel",
  "Lesser Dwarf Shrew",
  "Forest Shrew",
  "Elephant Shrew",
  "Natal Red Rock Rabbit",
  "Wahlberg’s Fruit Bat",
  "Noack’s Roundleaf Bat",
  "Mauritian Tomb Bat",
  "Little Free-tailed Bat",
  "Schlieffen’s Bat",
  "Horseshoe Bat",
  "Leaf-nosed Bat",
  "Mouse-eared Bat",
  "Pipistrelle Bat",
  "Yellow-bellied House Bat",
  "Long-tailed Seps Bat",
  "Rufous-eared Bat",
  "Tomb Bat",
  "Epauletted Fruit Bat"
];

const OTHER_ANIMALS = [
  { name: "Common Ostrich", category: "Bird" },
  { name: "Southern Ground Hornbill", category: "Bird" },
  { name: "Lilac-breasted Roller", category: "Bird" },
  { name: "Martial Eagle", category: "Bird" },
  { name: "African Fish Eagle", category: "Bird" },
  { name: "Saddle-billed Stork", category: "Bird" },
  { name: "Secretarybird", category: "Bird" },
  { name: "Pied Kingfisher", category: "Bird" },
  { name: "Nile Crocodile", category: "Reptile" },
  { name: "African Rock Python", category: "Reptile" },
  { name: "Nile Monitor", category: "Reptile" }
];

function toId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const IMAGE_CACHE_KEY = "kruger-animal-image-cache-v1";
const animalImageCache = loadAnimalImageCache();
const animalImageRequests = new Map();

const WIKIPEDIA_TITLE_OVERRIDES = {
  "African Bush Elephant": ["African bush elephant"],
  "African Buffalo": ["African buffalo"],
  "Common Ostrich": ["Common ostrich"],
  "Common Warthog": ["Warthog"],
  "Plains Zebra": ["Plains zebra"],
  "Rock Dassie": ["Rock hyrax"],
  "Civet": ["African civet"],
  "Large-spotted Genet": ["Large-spotted genet"],
  "Jameson’s Red Rock Hare": ["Jameson's red rock hare"],
  "Sharpe’s Grysbok": ["Sharpe's grysbok"],
  "Peter’s Epauletted Fruit Bat": ["Peters's epauletted fruit bat"],
  "Wahlberg’s Epauletted Fruit Bat": ["Wahlberg's epauletted fruit bat"],
  "Wahlberg’s Fruit Bat": ["Wahlberg's epauletted fruit bat"],
  "Selous' Mongoose": ["Selous's mongoose"]
};

function buildFallbackImage(name, category) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='520'><rect width='100%' height='100%' fill='#355c3b'/><text x='50%' y='44%' text-anchor='middle' fill='white' font-family='Arial' font-size='30'>${name}</text><text x='50%' y='56%' text-anchor='middle' fill='#d8efd9' font-family='Arial' font-size='22'>${category}</text><text x='50%' y='72%' text-anchor='middle' fill='#d8efd9' font-family='Arial' font-size='20'>Image unavailable</text></svg>`)}`;
}

function loadAnimalImageCache() {
  try {
    const raw = localStorage.getItem(IMAGE_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function persistAnimalImageCache() {
  localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(animalImageCache));
}

function wikipediaTitlesFor(animal) {
  const overrides = WIKIPEDIA_TITLE_OVERRIDES[animal.name] || [];
  const cleanedName = animal.name.replace(/’/g, "'");
  const candidates = [
    ...overrides,
    cleanedName,
    `${cleanedName} (${animal.category.toLowerCase()})`,
    cleanedName.replace(/\bCommon\s+/i, ""),
    cleanedName.replace(/\bAfrican\s+/i, "")
  ];

  return [...new Set(candidates.filter(Boolean))];
}

async function fetchWikipediaThumbnail(title) {
  const url = new URL("https://en.wikipedia.org/w/api.php");
  url.searchParams.set("origin", "*");
  url.searchParams.set("format", "json");
  url.searchParams.set("action", "query");
  url.searchParams.set("prop", "pageimages");
  url.searchParams.set("piprop", "thumbnail");
  url.searchParams.set("pithumbsize", "640");
  url.searchParams.set("redirects", "1");
  url.searchParams.set("titles", title);

  const response = await fetch(url.toString());
  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const pages = data.query && data.query.pages ? Object.values(data.query.pages) : [];
  const withThumb = pages.find((page) => page && page.thumbnail && page.thumbnail.source);
  return withThumb ? withThumb.thumbnail.source : null;
}

async function resolveAnimalImage(animal) {
  const cached = animalImageCache[animal.id];
  if (typeof cached === "string") {
    return cached;
  }

  if (animalImageRequests.has(animal.id)) {
    return animalImageRequests.get(animal.id);
  }

  const request = (async () => {
    for (const title of wikipediaTitlesFor(animal)) {
      try {
        const thumbnail = await fetchWikipediaThumbnail(title);
        if (thumbnail) {
          animalImageCache[animal.id] = thumbnail;
          persistAnimalImageCache();
          return thumbnail;
        }
      } catch {
        // Try next possible title.
      }
    }

    animalImageCache[animal.id] = null;
    persistAnimalImageCache();
    return null;
  })();

  animalImageRequests.set(animal.id, request);
  request.finally(() => {
    animalImageRequests.delete(animal.id);
  });
  return request;
}

const ANIMALS = [
  ...MAMMAL_NAMES.map((name) => ({
    id: toId(name),
    name,
    category: "Mammal",
    image: null
  })),
  ...OTHER_ANIMALS.map((animal) => ({
    id: toId(animal.name),
    name: animal.name,
    category: animal.category,
    image: null
  }))
];

const els = {
  tripName: document.getElementById("trip-name"),
  createTrip: document.getElementById("create-trip"),
  deleteTrip: document.getElementById("delete-trip"),
  tripSelect: document.getElementById("trip-select"),
  tripMeta: document.getElementById("trip-meta"),
  search: document.getElementById("search"),
  categoryFilter: document.getElementById("category-filter"),
  animalList: document.getElementById("animal-list"),
  summaryText: document.getElementById("summary-text"),
  seenList: document.getElementById("seen-list"),
  cardTemplate: document.getElementById("animal-card-template")
};

let state = loadState();

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const defaultTripId = createTripId();
    return {
      selectedTripId: defaultTripId,
      trips: {
        [defaultTripId]: {
          id: defaultTripId,
          name: "My First Kruger Trip",
          createdAt: new Date().toISOString(),
          sightings: {}
        }
      }
    };
  }

  try {
    return JSON.parse(raw);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return loadState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createTripId() {
  return `trip-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
}

function populateCategories() {
  const categories = [...new Set(ANIMALS.map((a) => a.category))].sort();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categoryFilter.append(option);
  });
}

function getSelectedTrip() {
  return state.trips[state.selectedTripId] || null;
}

function ensureSelectedTripExists() {
  if (!getSelectedTrip()) {
    const firstTrip = Object.values(state.trips)[0];
    state.selectedTripId = firstTrip ? firstTrip.id : null;
  }
}

function renderTrips() {
  ensureSelectedTripExists();
  els.tripSelect.innerHTML = "";

  const trips = Object.values(state.trips).sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  if (trips.length === 0) {
    const id = createTripId();
    state.trips[id] = {
      id,
      name: "My First Kruger Trip",
      createdAt: new Date().toISOString(),
      sightings: {}
    };
    state.selectedTripId = id;
    saveState();
    return renderTrips();
  }

  trips.forEach((trip) => {
    const option = document.createElement("option");
    option.value = trip.id;
    option.textContent = trip.name;
    option.selected = trip.id === state.selectedTripId;
    els.tripSelect.append(option);
  });

  const selected = getSelectedTrip();
  const date = new Date(selected.createdAt).toLocaleString();
  els.tripMeta.textContent = `Created: ${date}`;
}

function renderAnimals() {
  const searchTerm = els.search.value.trim().toLowerCase();
  const category = els.categoryFilter.value;
  const trip = getSelectedTrip();

  const filtered = ANIMALS.filter((animal) => {
    const categoryMatch = category === "all" || animal.category === category;
    const searchMatch = animal.name.toLowerCase().includes(searchTerm);
    return categoryMatch && searchMatch;
  });

  els.animalList.innerHTML = "";

  filtered.forEach((animal) => {
    const card = els.cardTemplate.content.cloneNode(true);
    const checkbox = card.querySelector("input[type='checkbox']");
    const image = card.querySelector("img");
    card.querySelector("h3").textContent = animal.name;
    card.querySelector(".animal-category").textContent = animal.category;

    image.src = buildFallbackImage(animal.name, animal.category);
    image.alt = animal.name;
    resolveAnimalImage(animal).then((resolvedImage) => {
      if (resolvedImage) {
        image.src = resolvedImage;
      }
    });

    checkbox.checked = Boolean(trip.sightings[animal.id]);
    checkbox.addEventListener("change", () => {
      trip.sightings[animal.id] = checkbox.checked;
      saveState();
      renderSummary();
    });

    els.animalList.append(card);
  });
}

function renderSummary() {
  const trip = getSelectedTrip();
  const seenAnimals = ANIMALS.filter((animal) => Boolean(trip.sightings[animal.id]));
  const total = ANIMALS.length;

  els.summaryText.textContent = `${trip.name}: ${seenAnimals.length} / ${total} animals marked as seen.`;
  els.seenList.innerHTML = "";

  seenAnimals
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((animal) => {
      const li = document.createElement("li");
      li.textContent = `${animal.name} (${animal.category})`;
      els.seenList.append(li);
    });

  if (seenAnimals.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No sightings yet for this trip.";
    els.seenList.append(li);
  }
}

function createTrip() {
  const name = els.tripName.value.trim();
  const id = createTripId();
  state.trips[id] = {
    id,
    name: name || `Kruger Trip ${Object.keys(state.trips).length + 1}`,
    createdAt: new Date().toISOString(),
    sightings: {}
  };
  state.selectedTripId = id;
  els.tripName.value = "";
  saveState();
  rerender();
}

function deleteTrip() {
  const tripIds = Object.keys(state.trips);
  if (tripIds.length <= 1) {
    alert("You need at least one trip. Create another trip before deleting this one.");
    return;
  }

  delete state.trips[state.selectedTripId];
  state.selectedTripId = Object.keys(state.trips)[0];
  saveState();
  rerender();
}

function rerender() {
  renderTrips();
  renderAnimals();
  renderSummary();
}

els.createTrip.addEventListener("click", createTrip);
els.deleteTrip.addEventListener("click", deleteTrip);
els.tripSelect.addEventListener("change", (event) => {
  state.selectedTripId = event.target.value;
  saveState();
  rerender();
});
els.search.addEventListener("input", renderAnimals);
els.categoryFilter.addEventListener("change", renderAnimals);

populateCategories();
rerender();
saveState();


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // no-op
    });
  });
}
