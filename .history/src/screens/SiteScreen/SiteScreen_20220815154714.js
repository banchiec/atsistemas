import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSites } from "../redux/actions/sitesActions";

const SiteScreen = () => {
  const sites = useSelector((state) => state.allsites.sites);
  const dispatch = useDispatch();
  const fetchsites = async () => {
    const response = await axios
      .get("https://interview.staging.atresplayer.com/sites")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setSites(response.data));
  };

  useEffect(() => {
    fetchsites();
  }, []);

  return (
    <div className="ui grid container">
			<h1>sites</h1>
    </div>
  );
};

export default SiteScreen;