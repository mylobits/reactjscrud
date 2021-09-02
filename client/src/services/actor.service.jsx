import http from "../http-common";

class ActorDataService {
  getAll() {
    return http.get("/actors");
  }

  get(id) {
    return http.get(`/actors/${id}`);
  }

  create(data) {
    return http.post("/actors", data);
  }

  update(id, data) {
    return http.put(`/actors/${id}`, data);
  }

  delete(id) {
    return http.delete(`/actors/${id}`);
  }

  deleteAll() {
    return http.delete(`/actors`);
  }

  findByTitle(title) {
    return http.get(`/actors?title=${title}`);
  }
}

export default new ActorDataService();