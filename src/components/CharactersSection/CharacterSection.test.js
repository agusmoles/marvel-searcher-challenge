import React from "react";
import { shallow, mount } from "enzyme";
import CharactersSection from "./CharactersSection";

describe("Characters Section", () => {
    const charactersData = {
        "code": 200,
        "status": "Ok",
        "copyright": "© 2020 MARVEL",
        "attributionText": "Data provided by Marvel. © 2020 MARVEL",
        "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
        "etag": "b915a3f9dc3c99a40654d243c9991087d402c1df",
        "data": {
          "offset": 1011,
          "limit": 8,
          "total": 1493,
          "count": 8,
          "results": [
            {
              "id": 1011326,
              "name": "Randall Flagg",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4ce5a67201a4e",
                "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011326",
              "comics": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011326/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/31361",
                    "name": "The Stand: The Night Has Come (2011) #3"
                  }
                ],
                "returned": 1
              },
              "series": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011326/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/9949",
                    "name": "The Stand: The Night Has Come (2011)"
                  }
                ],
                "returned": 1
              },
              "stories": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011326/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/71407",
                    "name": "Interior #71407",
                    "type": "interiorStory"
                  }
                ],
                "returned": 1
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011326/events",
                "items": [],
                "returned": 0
              },
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/characters/1011326/randall_flagg?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "comiclink",
                  "url": "http://marvel.com/comics/characters/1011326/randall_flagg?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                }
              ]
            },
            {
              "id": 1010767,
              "name": "Random",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/4c00375b36bd4",
                "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010767",
              "comics": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010767/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12310",
                    "name": "X-Factor (1986) #88"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/21430",
                    "name": "X-Factor Visionaries: Peter David Vol. 4 (Trade Paperback)"
                  }
                ],
                "returned": 2
              },
              "series": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010767/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
                    "name": "X-Factor (1986 - 1998)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/6689",
                    "name": "X-Factor Annual (1986 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/5068",
                    "name": "X-Factor Visionaries: Peter David Vol. 4 (2008)"
                  }
                ],
                "returned": 3
              },
              "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010767/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/22369",
                    "name": "Cover #22369",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51899",
                    "name": "Contact",
                    "type": "interiorStory"
                  }
                ],
                "returned": 2
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010767/events",
                "items": [],
                "returned": 0
              },
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/characters/1010767/random?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "wiki",
                  "url": "http://marvel.com/universe/Random?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "comiclink",
                  "url": "http://marvel.com/comics/characters/1010767/random?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                }
              ]
            },
            {
              "id": 1010838,
              "name": "Rattler",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010838",
              "comics": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010838/comics",
                "items": [],
                "returned": 0
              },
              "series": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010838/series",
                "items": [],
                "returned": 0
              },
              "stories": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010838/stories",
                "items": [],
                "returned": 0
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010838/events",
                "items": [],
                "returned": 0
              },
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/characters/1876/rattler?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "comiclink",
                  "url": "http://marvel.com/comics/characters/1010838/rattler?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                }
              ]
            },
            {
              "id": 1011154,
              "name": "Ravenous",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011154",
              "comics": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011154/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/5078",
                    "name": "Annihilation (2006) #2"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/5230",
                    "name": "Annihilation (2006) #3"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/5655",
                    "name": "Annihilation (2006) #5"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/4218",
                    "name": "Annihilation: Silver Surfer (2006) #2"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/4470",
                    "name": "Annihilation: Silver Surfer (2006) #4"
                  }
                ],
                "returned": 5
              },
              "series": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011154/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3613",
                    "name": "Annihilation (2006 - 2007)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1078",
                    "name": "Annihilation: Silver Surfer (2006)"
                  }
                ],
                "returned": 2
              },
              "stories": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011154/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/5927",
                    "name": "Annihilation: Silver Surfer (2006) #2",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/5931",
                    "name": "Annihilation: Silver Surfer (2006) #4",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/5958",
                    "name": "2 of 6 - Annihilation",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/5960",
                    "name": "3 of 6 - Annihilation",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/5964",
                    "name": "5 of 6 - Annihilation",
                    "type": "cover"
                  }
                ],
                "returned": 5
              },
              "events": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011154/events",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/229",
                    "name": "Annihilation"
                  }
                ],
                "returned": 1
              },
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/characters/1011154/ravenous?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "wiki",
                  "url": "http://marvel.com/universe/Ravenous?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "comiclink",
                  "url": "http://marvel.com/comics/characters/1011154/ravenous?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                }
              ]
            },
            {
              "id": 1010892,
              "name": "Rawhide Kid",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/90/4ce5a3e0dbd3a",
                "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010892",
              "comics": {
                "available": 125,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010892/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/46180",
                    "name": "Indestructible Hulk (2012) #12"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/19821",
                    "name": "Marvel Fanfare (1982) #45"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/4302",
                    "name": "MARVEL MASTERWORKS: RAWHIDE KID VOL. 1 HC (Hardcover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1137",
                    "name": "Rawhide Kid (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16979",
                    "name": "Rawhide Kid (1955) #17"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16980",
                    "name": "Rawhide Kid (1955) #18"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16981",
                    "name": "Rawhide Kid (1955) #19"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16982",
                    "name": "Rawhide Kid (1955) #20"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16983",
                    "name": "Rawhide Kid (1955) #21"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16984",
                    "name": "Rawhide Kid (1955) #22"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16985",
                    "name": "Rawhide Kid (1955) #23"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16986",
                    "name": "Rawhide Kid (1955) #24"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16987",
                    "name": "Rawhide Kid (1955) #25"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16988",
                    "name": "Rawhide Kid (1955) #26"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16989",
                    "name": "Rawhide Kid (1955) #27"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16990",
                    "name": "Rawhide Kid (1955) #28"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16991",
                    "name": "Rawhide Kid (1955) #29"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16992",
                    "name": "Rawhide Kid (1955) #30"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16993",
                    "name": "Rawhide Kid (1955) #31"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16994",
                    "name": "Rawhide Kid (1955) #32"
                  }
                ],
                "returned": 20
              },
              "series": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010892/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/16583",
                    "name": "Indestructible Hulk (2012 - 2014)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3719",
                    "name": "Marvel Fanfare (1982 - 1992)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1732",
                    "name": "MARVEL MASTERWORKS: RAWHIDE KID VOL. 1 HC (2006)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2988",
                    "name": "Rawhide Kid (1955 - 1979)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/196",
                    "name": "Rawhide Kid (2003)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/8904",
                    "name": "The Rawhide Kid (2010)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3662",
                    "name": "Two-Gun Kid (1948 - 1977)"
                  }
                ],
                "returned": 7
              },
              "stories": {
                "available": 375,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010892/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/236",
                    "name": "Writer Ron Zimmerman and legendary Western comics artist John Severin take aim at the lovable redheaded Western scamp The Rawhid",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35509",
                    "name": "Cover #35509",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35510",
                    "name": "Gunfight At Fury Falls",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35511",
                    "name": "El Sombro",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35512",
                    "name": "I Shot Jesse James!",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35513",
                    "name": "I Shot Jesse James",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35514",
                    "name": "Ambush",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35515",
                    "name": "Cover #35515",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35516",
                    "name": "Guns of the Comancheros",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35517",
                    "name": "The Man Who Couldn't Be Killed",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35518",
                    "name": "Cover #35518",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35519",
                    "name": "The Town Tyrant",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35520",
                    "name": "Branded",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35521",
                    "name": "Shoot-Out at Mesa City!",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35522",
                    "name": "Shoot-Out At Mesa City",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35523",
                    "name": "The Gun That Couldn't Lose",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35524",
                    "name": "War In Chicamaw County",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35525",
                    "name": "Cover #35525",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35526",
                    "name": "The Sinister Sons of Ma Morgan",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35528",
                    "name": "Cover #35528",
                    "type": "cover"
                  }
                ],
                "returned": 20
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010892/events",
                "items": [],
                "returned": 0
              },
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/characters/1010892/rawhide_kid?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "comiclink",
                  "url": "http://marvel.com/comics/characters/1010892/rawhide_kid?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                }
              ]
            },
            {
              "id": 1009531,
              "name": "Raza",
              "description": "",
              "modified": "-0001-11-30T00:00:00-0500",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/70/4ce5a1057fce9",
                "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009531",
              "comics": {
                "available": 35,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009531/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/8652",
                    "name": "Excalibur (1988) #68"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/8581",
                    "name": "Excalibur (1988) #116"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1587",
                    "name": "MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 2 HC (Hardcover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/4114",
                    "name": "New Mutants Classic Vol. 1 (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13695",
                    "name": "Uncanny X-Men (1963) #154"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13697",
                    "name": "Uncanny X-Men (1963) #156"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13698",
                    "name": "Uncanny X-Men (1963) #157"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13699",
                    "name": "Uncanny X-Men (1963) #158"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13708",
                    "name": "Uncanny X-Men (1963) #167"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13715",
                    "name": "Uncanny X-Men (1963) #174"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13716",
                    "name": "Uncanny X-Men (1963) #175"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13741",
                    "name": "Uncanny X-Men (1963) #200"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13742",
                    "name": "Uncanny X-Men (1963) #201"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13744",
                    "name": "Uncanny X-Men (1963) #203"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13816",
                    "name": "Uncanny X-Men (1963) #275"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13817",
                    "name": "Uncanny X-Men (1963) #276"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13818",
                    "name": "Uncanny X-Men (1963) #277"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13928",
                    "name": "Uncanny X-Men (1963) #387"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13932",
                    "name": "Uncanny X-Men (1963) #391"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/4434",
                    "name": "Uncanny X-Men (1963) #475"
                  }
                ],
                "returned": 20
              },
              "series": {
                "available": 13,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009531/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2011",
                    "name": "Excalibur (1988 - 1998)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1440",
                    "name": "MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 2 HC (2005)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1763",
                    "name": "New Mutants Classic Vol. 1 (2006)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
                    "name": "Uncanny X-Men (1963 - 2011)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1723",
                    "name": "Uncanny X-Men Omnibus Vol. 1 (2006)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2555",
                    "name": "Uncanny X-Men: Rise & Fall of the Shi'ar Empire (2007)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
                    "name": "Wolverine (1988 - 2003)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2715",
                    "name": "Women of Marvel Vol. 2 (2007)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3645",
                    "name": "Wonder Man (1991 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/27567",
                    "name": "X-Men (2019 - 2020)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/139",
                    "name": "X-Men Visionaries: Jim Lee (2002)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1319",
                    "name": "X-Men: Eve of Destruction (2005)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1304",
                    "name": "X-Statix Vol. 4: X-Statix Vs. the Avengers (2004)"
                  }
                ],
                "returned": 13
              },
              "stories": {
                "available": 31,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009531/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/776",
                    "name": "UNCANNY X-MEN (1963) #475",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/15393",
                    "name": "Uncanny X-Men (1963) #107",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/15394",
                    "name": "Where No X-Man Has Gone Before!",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/15396",
                    "name": "Armageddon Now !",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/15398",
                    "name": "Home are the Heroes!",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/22442",
                    "name": "Death in Venice",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/22592",
                    "name": "Crimes of War",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/22593",
                    "name": "Facades",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27814",
                    "name": "Reunion",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27818",
                    "name": "Enter The Starjammers!",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27819",
                    "name": "Pursuit!",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27821",
                    "name": "Hide-'N'-Seek!",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27824",
                    "name": "The Life That Late I Led...",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27843",
                    "name": "The Goldilocks Syndrome (Or: Who's Been Sleeping In My Head?)",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27858",
                    "name": "Romances",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27860",
                    "name": "Phoenix",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27910",
                    "name": "The Trial of Magneto",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27912",
                    "name": "Duel",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/27916",
                    "name": "Crossroads",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28060",
                    "name": "The Path Not Taken",
                    "type": "interiorStory"
                  }
                ],
                "returned": 20
              },
              "events": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009531/events",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
                    "name": "Maximum Security"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
                    "name": "Secret Wars II"
                  }
                ],
                "returned": 2
              },
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/characters/1009531/raza?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "comiclink",
                  "url": "http://marvel.com/comics/characters/1009531/raza?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                }
              ]
            },
            {
              "id": 1009532,
              "name": "Reaper",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009532",
              "comics": {
                "available": 18,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009532/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
                    "name": "Age of X: Universe (2011) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
                    "name": "Age of X: Universe (2011) #2"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/73147",
                    "name": "Blade: Vampire Hunter (1999) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/73149",
                    "name": "Blade: Vampire Hunter (1999) #3"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/18094",
                    "name": "Weapon X (2002) #5"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/18097",
                    "name": "Weapon X (2002) #8"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/18098",
                    "name": "Weapon X (2002) #9"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12298",
                    "name": "X-Factor (1986) #77"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12299",
                    "name": "X-Factor (1986) #78"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12307",
                    "name": "X-Factor (1986) #85"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/6023",
                    "name": "X-Factor Visionaries: Peter David Vol. 2 (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/21430",
                    "name": "X-Factor Visionaries: Peter David Vol. 4 (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17942",
                    "name": "X-Force (1991) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17990",
                    "name": "X-Force (1991) #26"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17991",
                    "name": "X-Force (1991) #27"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17992",
                    "name": "X-Force (1991) #28"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/14300",
                    "name": "X-Men (1991) #14"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/14301",
                    "name": "X-Men (1991) #15"
                  }
                ],
                "returned": 18
              },
              "series": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009532/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
                    "name": "Age of X: Universe (2011)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/26394",
                    "name": "Blade: Vampire Hunter (1999 - 2000)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/543",
                    "name": "Weapon X (2002 - 2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
                    "name": "X-Factor (1986 - 1998)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1915",
                    "name": "X-Factor Visionaries: Peter David Vol. 2 (2007)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/5068",
                    "name": "X-Factor Visionaries: Peter David Vol. 4 (2008)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
                    "name": "X-Force (1991 - 2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
                    "name": "X-Men (1991 - 2001)"
                  }
                ],
                "returned": 8
              },
              "stories": {
                "available": 21,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009532/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/22345",
                    "name": "X-Factor (1986) #77",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/22346",
                    "name": "Great X-pectations",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/22348",
                    "name": "Playing With Fire",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/22364",
                    "name": "Snikts and Bones",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/29153",
                    "name": "Fingers on the Trigger",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/29155",
                    "name": "The Camel's Back",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/38161",
                    "name": "X-Force (1991) #1",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/38162",
                    "name": "A Force To Be Reckoned With",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/38258",
                    "name": "And Now--Reignfire",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/38259",
                    "name": "Shadows on the Rock",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/38261",
                    "name": "Liberation Through Subjugation",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/38263",
                    "name": "The Axe Falls",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/50743",
                    "name": "Interior #50743",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/50749",
                    "name": "Interior #50749",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/50751",
                    "name": "Interior #50751",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/84589",
                    "name": "Age of X: Universe (2011) #2",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/84590",
                    "name": "Interior #84590   ",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90010",
                    "name": "Age of X: Universe (2011) #1",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90040",
                    "name": "Age of X: Universe #1",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/162971",
                    "name": "cover from Blade: Vampire Hunter (1999) #1",
                    "type": "cover"
                  }
                ],
                "returned": 20
              },
              "events": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009532/events",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
                    "name": "Age of X"
                  }
                ],
                "returned": 1
              },
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/characters/1009532/reaper?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "comiclink",
                  "url": "http://marvel.com/comics/characters/1009532/reaper?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                }
              ]
            },
            {
              "id": 1009533,
              "name": "Reavers",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/4c003c63deac8",
                "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009533",
              "comics": {
                "available": 16,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009533/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/38182",
                    "name": "MARVEL POINT ONE TPB (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13788",
                    "name": "Uncanny X-Men (1963) #247"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13790",
                    "name": "Uncanny X-Men (1963) #249"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13792",
                    "name": "Uncanny X-Men (1963) #251"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13793",
                    "name": "Uncanny X-Men (1963) #252"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13794",
                    "name": "Uncanny X-Men (1963) #253"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13796",
                    "name": "Uncanny X-Men (1963) #255"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13803",
                    "name": "Uncanny X-Men (1963) #262"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/13810",
                    "name": "Uncanny X-Men (1963) #269"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/14154",
                    "name": "Wolverine (1988) #35"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/14155",
                    "name": "Wolverine (1988) #36"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/14156",
                    "name": "Wolverine (1988) #37"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/14157",
                    "name": "Wolverine (1988) #38"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/14083",
                    "name": "Wolverine (1988) #141"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/62805",
                    "name": "Wolverine and The Punisher: Damaging Evidence (1993) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1079",
                    "name": "X-Men Visionaries: Jim Lee (Trade Paperback)"
                  }
                ],
                "returned": 16
              },
              "series": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009533/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13745",
                    "name": "MARVEL POINT ONE TPB (2011 - Present)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
                    "name": "Uncanny X-Men (1963 - 2011)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
                    "name": "Wolverine (1988 - 2003)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/23035",
                    "name": "Wolverine and The Punisher: Damaging Evidence (1993)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/139",
                    "name": "X-Men Visionaries: Jim Lee (2002)"
                  }
                ],
                "returned": 5
              },
              "stories": {
                "available": 15,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009533/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28004",
                    "name": "The Light That Failed",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28008",
                    "name": "The Dane Curse",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28012",
                    "name": "Fever Dream",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28014",
                    "name": "Where's Wolverine?",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28016",
                    "name": "Storm Warnings",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28020",
                    "name": "Crash and Burn",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28034",
                    "name": "Scary Monsters",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28048",
                    "name": "Rogue Redux",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28655",
                    "name": "Fear the Reaver",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28815",
                    "name": "Blood Sand and Claws!",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28817",
                    "name": "...It Tolls For Thee",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28819",
                    "name": "Fall Back and Spring Forward",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/28821",
                    "name": "See Venice & Die!",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/85265",
                    "name": "Interior From Marvel Point One Postcard",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/141783",
                    "name": "Cover for Wolverine and The Punisher: Damaging Evidence #1",
                    "type": "cover"
                  }
                ],
                "returned": 15
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009533/events",
                "items": [],
                "returned": 0
              },
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/characters/1009533/reavers?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "wiki",
                  "url": "http://marvel.com/universe/Reavers?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                },
                {
                  "type": "comiclink",
                  "url": "http://marvel.com/comics/characters/1009533/reavers?utm_campaign=apiRef&utm_source=ada14d012af330f46d2173dd7c7f15db"
                }
              ]
            }
          ]
        }
    }

    it("should render CharactersSection correctly", () => {
        const component = shallow(<CharactersSection characters={charactersData} />);
        expect(component).toMatchSnapshot();
    });

    it("should not render Modal", () => {
        const component = mount(<CharactersSection characters={charactersData} />);
        expect(component.find(".modal").exists()).toBeFalsy(); 
    })

    it("should render Modal when Character Card clicked", () => {
        const component = mount(<CharactersSection characters={charactersData} />);
        component.find(".character-card").first().simulate('click');
        expect(component.find(".modal")).toBeDefined(); 
    })
    
    it("should not render Modal when closed", () => {
        const component = mount(<CharactersSection characters={charactersData} />);
        component.find(".character-card").first().simulate('click');
        component.find(".modal .close").first().simulate('click');
        expect(component.find(".modal").exists()).toBeFalsy(); 
    })

    it("should exists character name in Modal", () => {
        const component = mount(<CharactersSection characters={charactersData} />);
        component.find(".character-card").first().simulate('click');
        const name = component.find(".modal h1").first()
        expect(name.exists()).toBeTruthy(); 
    })


})
