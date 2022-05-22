import http from "../http-common";

const admin = {
	all() {
	return http.get(`/admin`);
	},
	edit(id) {
		return http.get(`/admin/edit/${id}`);
	},
	create(data) {
		return http.post(`/admin/create`, data);
	},
	update(data) {
		return http.put(`/admin/edit`, data);
	},
	destroy(id) {
		return http.delete(`/admin/delete/${id}`);
	},
}

const client = {
	all() {
	return http.get(`/client`);
	},
	edit(id) {
		return http.get(`/client/edit/${id}`);
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

const member = {
	all() {
	return http.get(`/member`);
	},
	edit(id) {
		return http.get(`/member/edit/${id}`);
	},
	create(data) {
		return http.post(`/member/create`, data);
	},
	update(data) {
		return http.put(`/member/edit`, data);
	},
	destroy(id) {
		return http.delete(`/member/delete/${id}`);
	},
}

export { admin,client,member };
