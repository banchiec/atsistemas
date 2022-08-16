import axios from "axios"
import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const urlImage = 'data:image/png;base64,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'
const SiteCard = ({ site, handleDeleteSite }) => {
  const dispatch = useDispatch()
  const { _id, description, name, path, publicPath } = site


  return (
    <div className="four wide column" key={_id}>
      <div className="ui link cards">
        <div className="card">
          <Link to={`/site/${_id}`}>
            <div className="image">
              <img src={urlImage} alt={name} />
            </div>
          </Link>
          <div className="content">
            <div className="header">Name: {name}</div>
            <div className="meta list">Descripcion: {description}</div>
            <div className="meta list">Path: {path}</div>
            <div className="meta list">PublicPath: {publicPath}</div>
            <button onClick={() => handleDeleteSite(_id)}>Eliminar</button>
            <Link to='/site/update-site'>
              <button onClick={() => handleDeleteSite(_id)}>Actualizar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteCard