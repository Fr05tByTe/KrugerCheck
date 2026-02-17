const STORAGE_KEY = "kruger-trip-tracker-v2";

const BASE_ANIMAL_NAMES = [
  "Aardvark",
  "Aardwolf",
  "Acacia rat",
  "African buffalo",
  "African civet",
  "African clawless otter",
  "African elephant",
  "African marsh rat",
  "African pygmy mouse",
  "African wild cat",
  "African wild dog",
  "Angola free-tailed bat",
  "Angoni vlei rat",
  "Ansorge’s free-tailed bat",
  "Banana bat",
  "Banded mongoose",
  "Bat-eared fox",
  "Black-backed jackal",
  "Black rat",
  "Black rhinoceros",
  "Blue wildebeest (Blou wildebeest)",
  "Botswana long-eared bat",
  "Brant’s climbing mouse",
  "Brown hyena",
  "Burchell’s zebra",
  "Bushbuck",
  "Bushpig",
  "Bushveld gerbil",
  "Bushveld horseshoe bat",
  "Butterfly bat",
  "Cane rat",
  "Cape hairy bat",
  "Cape hare",
  "Cape porcupine",
  "Cape warthog",
  "Caracal",
  "Chacma baboon",
  "Cheetah",
  "Chestnut climbing mouse",
  "Commerson’s leaf-nosed bat",
  "Common duiker",
  "Common mole rat",
  "Damara woolly bat",
  "Darling’s horseshoe bat",
  "Dwarf mongoose",
  "Egyptian free-tailed bat",
  "Egyptian fruit bat",
  "Egyptian slit-faced bat",
  "Eland",
  "Fat mouse",
  "Four-toed elephant shrew",
  "Geoffroy’s horseshoe bat",
  "Giant rat",
  "Greater dwarf shrew",
  "Grey rhebok",
  "Hildebrandt’s horseshoe bat",
  "Hippopotamus",
  "Honey badger",
  "House mouse",
  "Impala",
  "African scops owl",
  "African cuckoo hawk",
  "African fish eagle",
  "African harrier-hawk",
  "African rock python",
  "Amur falcon",
  "Klipspringer",
  "Kudu",
  "Kuhl’s bat",
  "Lander’s horseshoe bat",
  "Large grey mongoose",
  "Large spotted genet",
  "Leopard",
  "Lesser bushbaby",
  "Lesser grey-brown musk shrew",
  "Lesser red musk shrew",
  "Lesser woolly bat",
  "Lesser yellow house bat",
  "Lichtenstein’s hartebeest",
  "Lion",
  "Little free-tailed bat",
  "Long-tailed house bat",
  "Madagascan large free-tailed bat",
  "Mauritian tomb bat",
  "Ayres's hawk-eagle",
  "Barn owl",
  "Bateleur",
  "Black kite",
  "Black-shouldered kite",
  "Blou wildebeest",
  "Boomslang",
  "Brown house snake",
  "Meller’s mongoose",
  "Midas free-tailed bat",
  "Mountain reedbuck",
  "Multimammate mouse",
  "Namaqua rock mouse",
  "Natal multimammate mouse",
  "Natal red rock hare",
  "Nyala",
  "Oribi",
  "Cape vulture",
  "Crocodile",
  "Dark chanting goshawk",
  "European honey buzzard",
  "Flap-necked chameleon",
  "Gabar goshawk",
  "Hooded vulture",
  "Peak-saddle horseshoe bat",
  "Peters’s epauletted fruit bat",
  "Pouched mouse",
  "Red duiker",
  "Red veld rat",
  "Reddish-grey musk shrew",
  "Roan antelope",
  "Rock elephant shrew",
  "Rock hyrax (Dassie)",
  "Rock monitor",
  "Rooihartebeest",
  "Rothschild’s giraffe",
  "Rufous hairy bat",
  "Rüppell’s bat",
  "Rüppell’s horseshoe bat",
  "Rusty bat",
  "Sable antelope",
  "Samango monkey",
  "Schlieffen’s bat",
  "Schreiber’s long-fingered bat",
  "Scrub hare",
  "Selous’ mongoose",
  "Serval",
  "Sharpe’s grysbok",
  "Short-snouted elephant shrew",
  "Side-striped jackal",
  "Single-striped mouse",
  "Slender mongoose",
  "Small spotted genet",
  "South African springhare",
  "Southern African hedgehog",
  "Southern reedbuck",
  "Spiny mouse",
  "Spotted hyena",
  "Steenbok",
  "Striped polecat",
  "Sundevall’s leaf nosed bat",
  "Southern red-billed hornbill",
  "Southern tree agama",
  "Southern yellow-billed hornbill",
  "Spotted eagle-owl",
  "Springbok",
  "Swamp musk shrew",
  "Swinny’s horseshoe bat",
  "Thick-tailed bushbaby",
  "Tiny musk shrew",
  "Tree squirrel",
  "Tsessebe",
  "Vervet monkey",
  "Wahlberg’s epauletted fruit bat",
  "Water mongoose",
  "Waterbuck",
  "Welwitsch’s bat",
  "White rhinoceros",
  "White-tailed mongoose",
  "Woodland dormouse",
  "Woodland thicket rat",
  "Wood’s slit-faced bat",
  "Yellow-billed kite",
  "Yellow house bat",
  "Yellow-spotted rock hyrax",
  "Peregrine falcon",
  "Red-footed falcon",
  "Lanner falcon",
  "Martial eagle",
  "Wahlberg's eagle",
  "Ostrich",
  "African wood owl",
  "White-headed vulture",
  "White-backed vulture",
  "Palm-nut vulture",
  "Cape grysbok",
  "Leopard tortoise",
  "Secretarybird",
  "Tawny eagle",
  "Mozambique spitting cobra",
  "Puff adder",
];

const GROUPED_SMALL_MAMMALS = ["Bat", "Rat", "Mouse", "Shrew"];

const COLLAPSED_ANIMAL_NAMES = BASE_ANIMAL_NAMES
  .filter((name) => {
    const lowerName = name.toLowerCase();
    if (/\brat\b/.test(lowerName)) {
      return false;
    }

    if (/\bmouse\b/.test(lowerName)) {
      return false;
    }

    if (/\bshrew\b/.test(lowerName)) {
      return false;
    }

    if (/\bbat\b/.test(lowerName) && !/\bbat-eared fox\b/.test(lowerName)) {
      return false;
    }

    return true;
  })
  .concat(GROUPED_SMALL_MAMMALS);

const ABOUT_BEHAVIORS = [
  "is often most active in cooler dawn and dusk periods, when patient scanning along roads and drainage lines improves sightings",
  "uses camouflage and stillness effectively, so brief movement is often the clue that gives it away in Kruger habitats",
  "shows highly tuned feeding behavior linked to season and rainfall, making location and timing important for reliable encounters",
  "depends on cover, water access, and quiet movement patterns, which is why repeated visits to the same area can pay off",
  "is best found by watching tracks, droppings, and fresh signs first, then slowing down in likely habitat patches",
  "often shares space with other species but keeps distinct routines, so behavior is usually more useful than color for identification"
];

const ABOUT_HABITATS = [
  "wooded savanna edges",
  "riverine thickets and drainage lines",
  "open grassland mosaics",
  "rocky outcrops and koppies",
  "mixed mopane and acacia zones",
  "seasonal wetland margins"
];



const CATEGORY_OVERRIDES = {
  "African scops owl": "Bird",
  "African cuckoo hawk": "Bird",
  "African fish eagle": "Bird",
  "African harrier-hawk": "Bird",
  "African wood owl": "Bird",
  "Amur falcon": "Bird",
  "Ayres's hawk-eagle": "Bird",
  "Barn owl": "Bird",
  "Bateleur": "Bird",
  "Black kite": "Bird",
  "Black-shouldered kite": "Bird",
  "Cape vulture": "Bird",
  "Dark chanting goshawk": "Bird",
  "European honey buzzard": "Bird",
  "Gabar goshawk": "Bird",
  "Hooded vulture": "Bird",
  "Lanner falcon": "Bird",
  "Martial eagle": "Bird",
  "Ostrich": "Bird",
  "Palm-nut vulture": "Bird",
  "Peregrine falcon": "Bird",
  "Red-footed falcon": "Bird",
  "Secretarybird": "Bird",
  "Southern red-billed hornbill": "Bird",
  "Southern yellow-billed hornbill": "Bird",
  "Spotted eagle-owl": "Bird",
  "Tawny eagle": "Bird",
  "Wahlberg's eagle": "Bird",
  "White-backed vulture": "Bird",
  "White-headed vulture": "Bird",
  "Yellow-billed kite": "Bird",
  "African rock python": "Reptile",
  "Boomslang": "Reptile",
  "Brown house snake": "Reptile",
  "Crocodile": "Reptile",
  "Flap-necked chameleon": "Reptile",
  "Mozambique spitting cobra": "Reptile",
  "Puff adder": "Reptile",
  "Rock monitor": "Reptile",
  "Southern tree agama": "Reptile",
  "Leopard tortoise": "Reptile"
};
const SORTED_ANIMAL_NAMES = [...COLLAPSED_ANIMAL_NAMES].sort((a, b) => a.localeCompare(b));

const ANIMAL_DATA = SORTED_ANIMAL_NAMES.map((name, index) => ({
  name,
  category: CATEGORY_OVERRIDES[name] || "Mammal",
  about: `${name} ${ABOUT_BEHAVIORS[index % ABOUT_BEHAVIORS.length]} around ${ABOUT_HABITATS[index % ABOUT_HABITATS.length]}.`
}));

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
  "Burchell's zebra": ["Plains zebra", "Burchell's zebra"],
  "Kudu": ["Greater kudu", "Kudu"],
  "African elephant": ["African bush elephant", "African elephant"],
  "Gabar goshawk": ["Gabar goshawk", "Gabar hawk"],
  "Blue wildebeest (Blou wildebeest)": ["Blue wildebeest", "Common wildebeest"],
  "Blou wildebeest": ["Blue wildebeest", "Common wildebeest"],
  "Rock hyrax (Dassie)": ["Rock hyrax", "Dassie"],
  "Wahlberg's eagle": ["Wahlberg's eagle"],
  "African wood owl": ["African wood owl", "Wood owl"],
  "Barn owl": ["Barn owl"],
  "Brown house snake": ["Brown house snake"],
  "Cape grysbok": ["Cape grysbok", "Grysbok"],
  "Leopard tortoise": ["Leopard tortoise"],
  "Ostrich": ["Common ostrich", "Ostrich"],
  "Rooihartebeest": ["Red hartebeest", "Rooihartebeest"],
  "Shrew": ["Shrew"],
  "Southern tree agama": ["Southern tree agama"]
};

const IMAGE_URL_OVERRIDES = {
  "leopard-tortoise": buildSpeciesIllustration("Leopard tortoise", "Stigmochelys pardalis", "#6d7d53", "🐢"),
  "ostrich": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ostrich_male_RWD.jpg/640px-Ostrich_male_RWD.jpg",
  "shrew": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Common_shrew.jpg/640px-Common_shrew.jpg",
  // These species intentionally use live Wikimedia/Wikipedia lookups in resolveAnimalImage,
  // so cards display real wildlife photos instead of generated illustrations.
  // - barn-owl
  // - brown-house-snake
  // - cape-grysbok
  // - rooihartebeest / rooihardbees
  // - southern-tree-agama
};

function buildSpeciesIllustration(name, subtitle, accent, emoji) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='520'><defs><linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='${accent}'/><stop offset='100%' stop-color='#1f3325'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#bg)'/><circle cx='96' cy='96' r='72' fill='rgba(255,255,255,0.15)'/><text x='96' y='118' text-anchor='middle' fill='white' font-family='Arial' font-size='70'>${emoji}</text><text x='50%' y='56%' text-anchor='middle' fill='white' font-family='Arial' font-size='44' font-weight='700'>${name}</text><text x='50%' y='66%' text-anchor='middle' fill='#f0f7ef' font-family='Arial' font-size='28'>${subtitle}</text><text x='50%' y='80%' text-anchor='middle' fill='#d7e6d2' font-family='Arial' font-size='20'>Kruger wildlife card</text></svg>`)}`;
}

function buildFallbackImage(name, category) {
  const emoji = category === "Bird" ? "🦅" : category === "Reptile" ? "🐊" : "🐾";
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='520'><defs><linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='#2d4f35'/><stop offset='100%' stop-color='#4f7a52'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#bg)'/><text x='50%' y='34%' text-anchor='middle' fill='white' font-family='Arial' font-size='84'>${emoji}</text><text x='50%' y='52%' text-anchor='middle' fill='white' font-family='Arial' font-size='30'>${name}</text><text x='50%' y='63%' text-anchor='middle' fill='#e3f4e4' font-family='Arial' font-size='22'>${category}</text><text x='50%' y='78%' text-anchor='middle' fill='#d8efd9' font-family='Arial' font-size='20'>Kruger wildlife card</text></svg>`)}`;
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

async function fetchWikimediaCommonsImage(animal) {
  const url = new URL("https://commons.wikimedia.org/w/api.php");
  url.searchParams.set("origin", "*");
  url.searchParams.set("format", "json");
  url.searchParams.set("action", "query");
  url.searchParams.set("generator", "search");
  url.searchParams.set("gsrsearch", `${animal.name} ${animal.category}`);
  url.searchParams.set("gsrlimit", "1");
  url.searchParams.set("prop", "pageimages");
  url.searchParams.set("piprop", "thumbnail");
  url.searchParams.set("pithumbsize", "640");

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
  const forcedImage = IMAGE_URL_OVERRIDES[animal.id];
  if (forcedImage) {
    animalImageCache[animal.id] = forcedImage;
    persistAnimalImageCache();
    return forcedImage;
  }

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

    try {
      const commonsImage = await fetchWikimediaCommonsImage(animal);
      if (commonsImage) {
        animalImageCache[animal.id] = commonsImage;
        persistAnimalImageCache();
        return commonsImage;
      }
    } catch {
      // Use local fallback image below.
    }

    animalImageCache[animal.id] = buildFallbackImage(animal.name, animal.category);
    persistAnimalImageCache();
    return animalImageCache[animal.id];
  })();

  animalImageRequests.set(animal.id, request);
  request.finally(() => {
    animalImageRequests.delete(animal.id);
  });
  return request;
}

const ANIMALS = [
  ...ANIMAL_DATA.map((animal) => ({
    id: toId(animal.name),
    name: animal.name,
    category: animal.category,
    about: animal.about,
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
  animalList: document.getElementById("animal-list"),
  summaryText: document.getElementById("summary-text"),
  seenList: document.getElementById("seen-list"),
  tripNotes: document.getElementById("trip-notes"),
  cardTemplate: document.getElementById("animal-card-template"),
  imageModal: document.getElementById("image-modal"),
  imageModalPreview: document.getElementById("image-modal-preview")
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
          sightings: {},
          notes: ""
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
      sightings: {},
      notes: ""
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
  if (typeof selected.notes !== "string") {
    selected.notes = "";
    saveState();
  }
  const date = new Date(selected.createdAt).toLocaleString();
  els.tripMeta.textContent = `Created: ${date}`;
  els.tripNotes.value = selected.notes;
}

function renderAnimals() {
  const searchTerm = els.search.value.trim().toLowerCase();
  const trip = getSelectedTrip();

  const filtered = ANIMALS.filter((animal) => {
    const searchMatch = animal.name.toLowerCase().includes(searchTerm);
    return searchMatch;
  });

  els.animalList.innerHTML = "";

  filtered.forEach((animal) => {
    const card = els.cardTemplate.content.cloneNode(true);
    const article = card.querySelector(".animal-card");
    const checkbox = card.querySelector("input[type='checkbox']");
    const image = card.querySelector("img");
    const cardBack = card.querySelector(".animal-back");
    const fact = card.querySelector(".animal-fact");
    const expandButton = card.querySelector(".expand-image");
    card.querySelector("h3").textContent = animal.name;
    fact.textContent = animal.about;

    const fallbackImage = buildFallbackImage(animal.name, animal.category);
    image.src = fallbackImage;
    image.alt = animal.name;
    image.addEventListener("error", () => {
      if (image.src !== fallbackImage) {
        image.src = fallbackImage;
      }
    });
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

    const toggleFlip = () => {
      article.classList.toggle("is-flipped");
    };

    image.addEventListener("click", toggleFlip);
    cardBack.addEventListener("click", toggleFlip);
    expandButton.addEventListener("click", (event) => {
      event.stopPropagation();
      els.imageModalPreview.src = image.src;
      els.imageModalPreview.alt = `${animal.name} enlarged preview`;
      els.imageModal.showModal();
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
      li.textContent = animal.name;
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
    sightings: {},
    notes: ""
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
els.tripNotes.addEventListener("input", (event) => {
  const trip = getSelectedTrip();
  if (!trip) {
    return;
  }

  trip.notes = event.target.value;
  saveState();
});
els.imageModal.addEventListener("click", (event) => {
  const box = els.imageModal.getBoundingClientRect();
  const inside =
    event.clientX >= box.left &&
    event.clientX <= box.right &&
    event.clientY >= box.top &&
    event.clientY <= box.bottom;
  if (!inside) {
    els.imageModal.close();
  }
});

rerender();
saveState();


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // no-op
    });
  });
}
