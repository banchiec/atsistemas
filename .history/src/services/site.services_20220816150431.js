import axios from 'axios'

class SiteService {
	constructor() {
		this.instance = axios.create({
			baseURL: `https://interview.staging.atresplayer.com`,
		})
	}
}