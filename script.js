const STORAGE_KEY = "kruger-trip-tracker-v2";

const ANIMAL_DATA = [
  {
    name: "African Bush Elephant",
    category: "Mammal",
    about:
      "African bush elephants move through Kruger in family groups led by experienced matriarchs, and their long-term memory helps them revisit old water routes during dry months."
  },
  {
    name: "Lion",
    category: "Mammal",
    about:
      "Kruger lions spend much of the heat of the day resting, then become active in cooler hours when coordinated pride behavior gives them an advantage over larger prey."
  },
  {
    name: "Leopard",
    category: "Mammal",
    about:
      "Leopards in Kruger rely on stealth and strength, often dragging kills into trees where scavengers and competing predators struggle to reach them."
  },
  {
    name: "Cheetah",
    category: "Mammal",
    about:
      "Cheetahs favor open ground where explosive speed can be used in short bursts, and many sightings come from scanning roadsides near grassland edges."
  },
  {
    name: "Spotted Hyena",
    category: "Mammal",
    about:
      "Spotted hyenas are highly social and intelligent hunters, and their vocal whoops across Kruger often reveal clan activity before the animals are visible."
  },
  {
    name: "Giraffe",
    category: "Mammal",
    about:
      "Kruger giraffes browse high acacia leaves with prehensile tongues, giving them access to food above the reach of most other herbivores."
  },
  {
    name: "Plains Zebra",
    category: "Mammal",
    about:
      "Plains zebras usually feed in loose herds and stay alert with constant movement, while their stripe patterns make each individual recognizable at close range."
  },
  {
    name: "Hippopotamus",
    category: "Mammal",
    about:
      "Hippopotamuses spend daylight hours in water to stay cool, then travel out to graze at night, leaving broad paths between rivers and feeding grounds."
  },
  {
    name: "Black Rhinoceros",
    category: "Mammal",
    about:
      "Black rhinos are selective browsers with hooked lips adapted for shrubs, and most sightings are fleeting because they prefer thicker cover."
  },
  {
    name: "White Rhinoceros",
    category: "Mammal",
    about:
      "White rhinos are broad-lipped grazers that favor open areas, and their calm posture can be deceptive because they respond quickly when disturbed."
  },
  {
    name: "African Buffalo",
    category: "Mammal",
    about:
      "African buffalo gather in large, shifting herds whose collective vigilance and defensive behavior make them one of the most formidable grazers in the park."
  },
  {
    name: "Impala",
    category: "Mammal",
    about:
      "Impalas are among Kruger’s most adaptable antelope, switching between grazing and browsing and using dramatic leaps to evade predators."
  },
  {
    name: "Greater Kudu",
    category: "Mammal",
    about:
      "Greater kudu bulls carry spiral horns and rely on stillness and camouflage in woodland, where they can disappear surprisingly quickly among branches."
  },
  {
    name: "Nyala",
    category: "Mammal",
    about:
      "Nyala prefer dense riverine thickets, and their striped coats break up their outline so effectively that they are often seen only after movement."
  },
  {
    name: "Warthog",
    category: "Mammal",
    about:
      "Warthogs frequently kneel on their front knees while grazing and retreat tail-up to burrows, creating one of the most distinctive silhouettes on safari."
  },
  {
    name: "Honey Badger",
    category: "Mammal",
    about:
      "Honey badgers are solitary, tenacious foragers that investigate burrows, logs, and termite mounds with relentless energy regardless of their size."
  },
  {
    name: "Banded Mongoose",
    category: "Mammal",
    about:
      "Banded mongooses travel in busy family troops that communicate constantly while turning over leaf litter and soil in search of insects and small prey."
  },
  {
    name: "African Wild Dog",
    category: "Mammal",
    about:
      "African wild dogs are endurance hunters with exceptional teamwork, and when a pack is on the move their pace and focus are unmistakable."
  },
  {
    name: "Vervet Monkey",
    category: "Mammal",
    about:
      "Vervet monkeys use different alarm calls for different threats, giving nearby animals useful warning cues in mixed-species habitats."
  },
  {
    name: "Chacma Baboon",
    category: "Mammal",
    about:
      "Chacma baboons live in structured troops with clear social ranks, and they often use elevated rocks and trees as strategic lookout points."
  },
  {
    name: "Common Ostrich",
    category: "Bird",
    about:
      "The common ostrich is the world’s largest bird, and in Kruger its long stride and powerful legs let it cover open ground with remarkable efficiency."
  },
  {
    name: "Southern Ground Hornbill",
    category: "Bird",
    about:
      "Southern ground hornbills patrol the ground in family parties, probing for reptiles and invertebrates while staying in contact with deep resonant calls."
  },
  {
    name: "Lilac-breasted Roller",
    category: "Bird",
    about:
      "Lilac-breasted rollers often perch conspicuously on exposed branches, making them a colorful highlight as they dart down to catch insects."
  },
  {
    name: "Martial Eagle",
    category: "Bird",
    about:
      "Martial eagles soar high before descending with speed on medium-sized prey, and their presence signals healthy raptor habitat."
  },
  {
    name: "African Fish Eagle",
    category: "Bird",
    about:
      "African fish eagles are strongly tied to water and are often detected first by their iconic call echoing across dams and river channels."
  },
  {
    name: "Saddle-billed Stork",
    category: "Bird",
    about:
      "Saddle-billed storks hunt in shallow wetlands with measured steps, using precise bill strikes to capture fish, frogs, and aquatic invertebrates."
  },
  {
    name: "Secretarybird",
    category: "Bird",
    about:
      "Secretarybirds hunt mainly on foot in open savanna, where their long legs allow them to stamp and strike effectively at snakes and other prey."
  },
  {
    name: "Pied Kingfisher",
    category: "Bird",
    about:
      "Pied kingfishers are famous for hovering over water before diving, a fishing style that makes their feeding behavior easy to recognize."
  },
  {
    name: "Nile Crocodile",
    category: "Reptile",
    about:
      "Nile crocodiles regulate body temperature by shifting between sun and shade, remaining motionless for long periods before sudden bursts of power."
  },
  {
    name: "African Rock Python",
    category: "Reptile",
    about:
      "African rock pythons are ambush constrictors that rely on camouflage near watercourses and game paths where prey movement is predictable."
  },
  {
    name: "Nile Monitor",
    category: "Reptile",
    about:
      "Nile monitors are strong swimmers and opportunistic hunters, frequently seen basking on banks before slipping quickly into the water when approached."
  }
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
  "Plains Zebra": ["Plains zebra"],
  Warthog: ["Warthog"]
};

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
    card.querySelector("h3").textContent = animal.name;
    fact.textContent = animal.about;

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

    const toggleFlip = () => {
      article.classList.toggle("is-flipped");
    };

    image.addEventListener("click", toggleFlip);
    cardBack.addEventListener("click", toggleFlip);

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

rerender();
saveState();


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // no-op
    });
  });
}
