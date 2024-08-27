type Character = {
    _id: string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    created: string;
    edited: string;
    url: string;
    hair_colors: string;
  };
  
  type Species = {
    _id: string;
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: string;
    edited: string;
    eye_colors: string;
    hair_colors: string;
    homeworld: string;
    language: string;
    name: string;
    skin_colors: string;
    url: string;
  };
  
  type Starship = {
    _id: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    name: string;
    passengers: string;
    starship_class: string;
    url: string;
    model: string;
  };
  
  type Vehicle = {
    _id: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    name: string;
    passengers: string;
    url: string;
    vehicle_class: string;
    model:string;
  };

  type Planets = {
    _id: string;
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
  };
  
  export type SimpleFilm = {
    _id: string;
    episode_id: number;
    characters: Character[];
    created: Date;
    director: string;
    edited: Date;
    isApi: boolean;
    opening_crawl: string;
    planets: Planets[];
    producer: string;
    release_date: string;
    species: Species[];
    starships: Starship[];
    title: string;
    url: string;
    vehicles: Vehicle[];
  };
  
  

    export const filmStub = (): SimpleFilm => {
            return {
              _id: "66ccec94ce56ccd0dd47c946",
              episode_id: 4,
              characters: [
                {
                  _id: "66ccec942101d862500aa085",
                  name: "Luke Skywalker",
                  height: "172",
                  mass: "77",
                  hair_color: "blond",
                  skin_color: "fair",
                  eye_color: "blue",
                  birth_year: "19BBY",
                  gender: "male",
                  homeworld: "https://swapi.dev/api/planets/1/",
                  created: "2014-12-10T13:52:11.567000Z",
                  edited: "2014-12-10T13:52:11.567000Z",
                  url: "https://swapi.dev/api/people/1/",
                  hair_colors: "brown"
                }
              ],
              created: new Date("2014-12-10T14:23:31.880000Z"),
              director: "George Lucas",
              edited:new Date("2014-12-10T13:52:11.567000Z"),
              isApi: true,
              opening_crawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
              planets: [
                {
                  _id: "66cd599f06d83b31186eac64",
                  climate: "arid",
                  created: "2014-12-09T13:50:49.641000Z",
                  diameter: "10465",
                  edited: "2014-12-20T20:58:18.411000Z",
                  gravity: "1 standard",
                  name: "Tatooine",
                  orbital_period: "304",
                  population: "200000",
                  rotation_period: "23",
                  surface_water: "1",
                  terrain: "desert",
                  url: "https://swapi.dev/api/planets/1/"
                },
              ],
              producer: "Gary Kurtz, Rick McCallum",
              release_date: "1977-05-25",
              species: [
                {
                  _id: "66ccec942101d862500aa074",
                  average_height: "180",
                  average_lifespan: "120",
                  classification: "mammal",
                  created: "2014-12-10T13:52:11.567000Z",
                  edited: "2014-12-10T13:52:11.567000Z",
                  eye_colors: "brown, blue, green, hazel, grey, amber",
                  hair_colors: "blonde, brown, black, red",
                  homeworld: "https://swapi.dev/api/planets/9/",
                  language: "Galactic Basic",
                  name: "Human",
                  skin_colors: "caucasian, black, asian, hispanic",
                  url: "https://swapi.dev/api/species/1/"
                },
                {
                  _id: "66ccec942101d862500aa078",
                  average_height: "300",
                  average_lifespan: "1000",
                  classification: "gastropod",
                  created: "2014-12-10T13:52:11.567000Z",
                  edited: "2014-12-10T13:52:11.567000Z",
                  eye_colors: "yellow, red",
                  hair_colors: "n/a",
                  homeworld: "https://swapi.dev/api/planets/24/",
                  language: "Huttese",
                  name: "Hutt",
                  skin_colors: "green, brown, tan",
                  url: "https://swapi.dev/api/species/5/"
                }
              ],
              starships: [
                {
                  _id: "66ccec942101d862500aa07d",
                  MGLT: "60",
                  cargo_capacity: "3000000",
                  consumables: "1 year",
                  cost_in_credits: "3500000",
                  created: "2014-12-10T13:52:11.567000Z",
                  crew: "30-165",
                  edited: "2014-12-10T13:52:11.567000Z",
                  hyperdrive_rating: "2.0",
                  length: "150",
                  manufacturer: "Corellian Engineering Corporation",
                  max_atmosphering_speed: "950",
                  name: "CR90 corvette",
                  passengers: "600",
                  starship_class: "corvette",
                  url: "https://swapi.dev/api/starships/2/",
                  model: ""
                }
              ],
              title: "A New Hope",
              url: "https://swapi.dev/api/films/1/",
              vehicles: [
                {
                  _id: "66ccec942101d862500aa079",
                  cargo_capacity: "50000",
                  consumables: "2 months",
                  cost_in_credits: "150000",
                  created:"2014-12-10T13:52:11.567000Z",
                  crew: "46",
                  edited: "2014-12-10T13:52:11.567000Z",
                  length: "36.8 ",
                  manufacturer: "Corellia Mining Corporation",
                  max_atmosphering_speed: "30",
                  name: "Sand Crawler",
                  passengers: "30",
                  url: "https://swapi.dev/api/vehicles/4/",
                  vehicle_class: "wheeled",
                  model: ""
                }
              ]
            };
}

export const updateFilmStub = (): SimpleFilm => {
    return {
      _id: "66ccec94ce56ccd0dd47c946",
      episode_id: 6,
      characters: [
        {
          _id: "66ccec942101d862500aa085",
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/1/",
          created: "2014-12-10T13:52:11.567000Z",
          edited: "2014-12-10T13:52:11.567000Z",
          url: "https://swapi.dev/api/people/1/",
          hair_colors: "brown"
        }
      ],
      created: new Date("2014-12-10T13:52:11.567000Z"),
      director: "George Lucas",
      edited: new Date("2014-12-10T13:52:11.567000Z"),
      isApi: true,
      opening_crawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      planets: [],
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      species: [
        {
          _id: "66ccec942101d862500aa074",
          average_height: "180",
          average_lifespan: "120",
          classification: "mammal",
          created: "2014-12-10T13:52:11.567000Z",
          edited: "2014-12-10T13:52:11.567000Z",
          eye_colors: "brown, blue, green, hazel, grey, amber",
          hair_colors: "blonde, brown, black, red",
          homeworld: "https://swapi.dev/api/planets/9/",
          language: "Galactic Basic",
          name: "Human",
          skin_colors: "caucasian, black, asian, hispanic",
          url: "https://swapi.dev/api/species/1/"
        },
        {
          _id: "66ccec942101d862500aa078",
          average_height: "300",
          average_lifespan: "1000",
          classification: "gastropod",
          created: "2014-12-10T13:52:11.567000Z",
          edited: "2014-12-10T13:52:11.567000Z",
          eye_colors: "yellow, red",
          hair_colors: "n/a",
          homeworld: "https://swapi.dev/api/planets/24/",
          language: "Huttese",
          name: "Hutt",
          skin_colors: "green, brown, tan",
          url: "https://swapi.dev/api/species/5/"
        }
      ],
      starships: [
        {
          _id: "66ccec942101d862500aa07d",
          MGLT: "60",
          cargo_capacity: "3000000",
          consumables: "1 year",
          cost_in_credits: "3500000",
          created: "2014-12-10T13:52:11.567000Z",
          crew: "30-165",
          edited: "2014-12-10T13:52:11.567000Z",
          hyperdrive_rating: "2.0",
          length: "150",
          manufacturer: "Corellian Engineering Corporation",
          max_atmosphering_speed: "950",
          name: "CR90 corvette",
          passengers: "600",
          starship_class: "corvette",
          url: "https://swapi.dev/api/starships/2/",
          model: ""
        }
      ],
      title: "Roge One",
      url: "https://swapi.dev/api/films/1/",
      vehicles: [
        {
          _id: "66ccec942101d862500aa079",
          cargo_capacity: "50000",
          consumables: "2 months",
          cost_in_credits: "150000",
          created:"2014-12-10T13:52:11.567000Z",
          crew: "46",
          edited: "2014-12-10T13:52:11.567000Z",
          length: "36.8 ",
          manufacturer: "Corellia Mining Corporation",
          max_atmosphering_speed: "30",
          name: "Sand Crawler",
          passengers: "30",
          url: "https://swapi.dev/api/vehicles/4/",
          vehicle_class: "wheeled",
          model: ""
        }
      ]
    };
}
