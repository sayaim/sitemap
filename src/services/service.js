import http from "../http-common";


const client = {
	all() {
	return http.get(`/client`);
	},
	select(id) {
		return http.get(`/client/${id}`);
	},
	create(data) {
		return http.post(`/client/create`, data);
	},
	update(data) {
		return http.put(`/client/edit`, data);
	},
	destroy(id) {
		return http.delete(`/client/delete/${id}`);
	},
}

const user = {
	login(data) {
		return http.post(`user/login`, data);
	},
	select(id) {
		return http.get(`/user/${id}`);
	},
	create(data) {
		return http.post(`/user/create`, data);
	},
	update(data) {
		return http.put(`/user/edit`, data);
	},
	destroy(id) {
		return http.delete(`/user/delete/${id}`);
	},
}

export { client, user };
