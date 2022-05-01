import http from "../http-common";
class DataService {
	index() {
	return http.get(`/`);
	}
	
	edit(id) {
		return http.get(`/edit/${id}`);
	}
	
	store(data) {
		return http.post(`/create`, data);
	}
	
	update(data) {
		return http.put(`/edit`, data);
	}
	
	destroy(id) {
		return http.delete(`/delete/${id}`);
	}
}

export default new DataService();
