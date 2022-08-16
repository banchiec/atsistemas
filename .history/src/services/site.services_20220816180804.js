import axios from 'axios'

class SiteService {
	constructor() {
		this.instance = axios.create({
			baseURL: `https://interview.staging.atresplayer.com`,
		})
		getSites = () => this.instance.get('/sites')
		createSite = (site) => this.instance.post('/site', site)
	}

}
export default SiteService