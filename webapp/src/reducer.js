import {
  SAMPLE_ACTION,
  SAMPLE_THUNKED_ACTION,
  LOAD_MODEL
} from './actions'

const initialState = {
  startDate: "",
  endDate: "",
  station: {'name': 'Sydney - Observatory Hill', 'number': 66062},
  weatherDataTypes: [
    {value: "bom id", label: "bom id"}
  ],
  obsDataTypes: [
  ],
  interval: 10,
  stationList: [],
  mapCentre: [-33.854944, 151.225610],
  searchedLocations : null,
  selectedLocation: null,
  searchText: "",
  nearbyStations : [],
  obsModalOpen: false,
  presetSelected: 'Select',
  visibleMapLayers: ['Weather Station'],
  loadedObject: null
}

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case SAMPLE_ACTION: {
      return {
        ...state,
        loadedObject: payload
      }
    }
    case SAMPLE_THUNKED_ACTION: {
      return {
        ...state,
        loadedObject: payload
      }
    }
    case LOAD_MODEL: {
      return {
        ...state,
        loadedObject: payload
      }
    }
    default:
      return state
  }
}
