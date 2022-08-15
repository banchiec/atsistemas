import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const SiteCard = (site) => {
    const { _id, description, name, image, price, category } = site.site
		console.log(description);
		console.log(site)
    return (
      <div className="four wide column" key={_id}>
        <Link to={`/site/${_id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <div className="header">name: {name}</div>
                <div className="meta price">Descripcion:  {description}</div>
                <div className="meta">{}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
}

export default SiteCard