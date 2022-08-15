import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedSite,
  removeSelectedSite,
} from "../../redux/actions/sitesActions";
const SiteDetailsScreen = () => {
  const { siteId } = useParams();
  const dispatch = useDispatch();
  const site = useSelector((state) => state.site);
  const {_id, name,description, path, publicPath, image, title, price, category } = site;
  // const { image, title, price, category, description } = site;

  const fetchSiteDetail = async (id) => {
    const response = await axios
      .get(`https://interview.staging.atresplayer.com/site/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedSite(response.data));
  };

	console.log(site);

  useEffect(() => {
    if (siteId && siteId !== "") fetchSiteDetail(siteId);
    return () => {
      dispatch(removeSelectedSite());
    };
  }, [siteId]);

  return (
    <div className="ui grid container">
      {Object.keys(site).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{name}</h3>
                <h3 className="ui brown block header">{description}</h3>
                <h3 className="ui brown block header">{path}</h3>
                <h3 className="ui brown block header">{publicPath}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteDetailsScreen;
