import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SiteCard from '../../components/SiteCard/SiteCard'
import { fetchSites, setSites } from "../../redux/actions/sitesActions";

const SiteScreen = () => {
  const { sites } = useSelector((state) => state.allSites);
  const dispatch = useDispatch();

	useEffect(() => {
		if(!sites){
			dispatch(setSites())
		}
	}, [sites])

  const fetchsites = async () => {
    const response = await axios
      .get("https://interview.staging.atresplayer.com/sites")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setSites(response.data));
  };

  useEffect(() => {
    dispatch(fetchSites())
  }, []);

  return (
    <div className="ui grid container">
			{ sites?.map((site)=>{
				return(
      		<SiteCard key={site._id} site={site}/>
				)
			},[])
			}
    </div>
  );
};

export default SiteScreen;