import http from "../http-common";
class DataService {
	getAll() {
		return http.get("/memo");
	}
	get(id) {
		return http.get(`/memo/${id}`);
	}
	create(data) {
		return http.post("/memo", data);
	}
	update(id, data) {
		return http.put(`/memo/${id}`, data);
	}
	delete(id) {
		return http.delete(`/memo/${id}`);
	}
}
export default new DataService();
