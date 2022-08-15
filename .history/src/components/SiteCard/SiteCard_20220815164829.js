import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const SiteCard = (site) => {
    const { _id, name, image, price, category } = site
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
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
}

export default SiteCard