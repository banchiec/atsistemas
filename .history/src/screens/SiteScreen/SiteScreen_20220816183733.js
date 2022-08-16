import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SiteCard from '../../components/SiteCard/SiteCard'
import { setSites } from "../../redux/actions/sitesActions";

const SiteScreen = () => {
  const { sites } = useSelector((state) => state.allSites);
  const dispatch = useDispatch();

  const fetchsites = async () => {
    const response = await axios
      .get("https://interview.staging.atresplayer.com/sites")
      .catch((err) => {
        console.log("Error api: ", err)
      })
  };

  const handleDeleteSite = async (_id) => {
    console.log(_id)
    const response = await axios
      .delete(`https://interview.staging.atresplayer.com/site/${_id}`)
      .catch((err) => {
        console.log("Error api: ", err)
      })
    fetchsites()
  }

  useEffect(() => {
    fetchsites()
  }, [])

  return (
    <div className="ui grid container">
      {sites?.map((site) => {
        return (
          <SiteCard key={site._id} site={site} handleDeleteSite={handleDeleteSite} />
        )
      })
      }
    </div>
  );
};

export default SiteScreen;