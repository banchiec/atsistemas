import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const siteCard = () => {
  const sites = useSelector((state) => state.allSites.sites)
  const renderList = sites.map((site) => {
    const { id, title, image, price, category } = site
    return (
      <div className="four wide column" key={id}>
        <Link to={`/site/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
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
    );
  });
  return <>{renderList}</>;
}

export default siteCard