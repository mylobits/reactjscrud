import http from "../http-common";

class MovieDataService {
  async getAll () {
    return await http.get("/movies");
  }

  async get(id) {
    return await http.get(`/movies/${id}`);
  }

  async create(data) {
    return await http.post("/movies", data);
  }

  async update(id, data) {
    return await http.put(`/movies/${id}`, data);
  }

  async delete(id) {
    return await http.delete(`/movies/${id}`);
  }

  async deleteAll() {
    return await http.delete(`/movies`);
  }

  async findByTitle(title) {
    return await http.get(`/movies`, title);
  }
}

export default new MovieDataService();