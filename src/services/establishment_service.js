import Api from './api';

const EstablishmentService = {
  index: (lat, lng) => Api.get(`/google_stores?latitude=${lat}&longitude=${lng}`),
  show: (place_id) => Api.get(`/google_stores/${place_id}`)
}

export default EstablishmentService;