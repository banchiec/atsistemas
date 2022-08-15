import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setsites } from "../redux/actions/sitesActions";
import SiteComponent from "./SiteComponent";

const SiteScreen = () => {
  const sites = useSelector((state) => state.allsites.sites);
  const dispatch = useDispatch();
  const fetchsites = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/sites")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setsites(response.data));
  };

  useEffect(() => {
    fetchsites();
  }, []);

  console.log("sites :", sites);
  return (
    <div className="ui grid container">
      <SiteComponent />
    </div>
  );
};

export default SiteScreen;
