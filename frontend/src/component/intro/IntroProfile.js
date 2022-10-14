import { useEffect, useState } from "react";
import "./style.scss";
import Bio from "./Bio";
import { Axios } from "../../helpers/Axios";
import { useSelector } from "react-redux";

export default function IntroProfile({ detailss, visitor }) {
  const [details, setDetails] = useState(detailss);
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    setDetails(detailss);
  }, [detailss]);
  const initial = {
    bio: details?.bio ? details.bio : "",
    othername: details?.othername ? details.othername : "",
    job: details?.job ? details.job : "",
    workplace: details?.workplace ? details.workplace : "",
    highschool: details?.highschool ? details.highschool : "",
    college: details?.college ? details.college : "",
    currentCity: details?.currentCity ? details.currentCity : "",
    hometown: details?.hometown ? details.hometown : "",
    relationship: details?.relationship ? details.relationship : "",
  };
  const [infos, setInfos] = useState(initial);
  const [showBio, setShowBio] = useState(false);
  const [max, setMax] = useState(infos?.bio ? 100 - infos?.bio.length : 100);
  const handleBioChange = (e) => {
    setInfos({ ...infos, bio: e.target.value });
    setMax(100 - e.target.value.length);
  };
  const updateDetails = async () => {
    try {
      const { data } = await Axios.put(
        "/updateDetails",
        { infos },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setShowBio(false);
      setDetails(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="profile_card ">
      <div className="profile_card_header">Intros</div>
      {details?.bio && !showBio && (
        <div className="info_col">
          <span className="info_text">{details?.bio}</span>
          {!visitor && (
            <button
              className="gray_btn hover1"
              onClick={() => setShowBio(true)}
            >
              Edit Bio
            </button>
          )}
        </div>
      )}
      {!visitor && !details?.bio && !showBio && (
        <button className="gray_btn hover1 w100" onClick={() => setShowBio(true)}>
          Add Bio
        </button>
      )}
      {showBio && (
        <Bio
          infos={infos}
          handleBioChange={handleBioChange}
          max={max}
          setShowBio={setShowBio}
          updateDetails={updateDetails}
        />
      )}
      {details?.job && !details?.workplace ? (
        <div className="info_profile">
          <img src="../../../icons/job.png" alt="" />
          work as {details?.job}
        </div>
      ) : details?.job && details?.workplace ? (
        <div className="info_profile">
          <img src="../../../icons/job.png" alt="" />
          work as {details?.job} at <b>{details?.workplace}</b>
        </div>
      ) : (
        details?.workplace &&
        !details?.job && (
          <div className="info_profile">
            <img src="../../../icons/job.png" alt="" />
            works at <b>{details?.workplace}</b>
          </div>
        )
      )}
      {details?.relationship && (
        <div className="info_profile">
          <img src="../../../icons/relationship.png" alt="" />
          Relation {details?.relationship}
        </div>
      )}
      {details?.college && (
        <div className="info_profile">
          <img src="../../../icons/studies.png" alt="" />
          Studied at {details?.college}
        </div>
      )}
      {details?.highschool && (
        <div className="info_profile">
          <img src="../../../icons/studies.png" alt="" />
          Studied at {details?.highschool}
        </div>
      )}
      {details?.currentCity && (
        <div className="info_profile">
          <img src="../../../icons/home.png" alt="" />
          Lives in {details?.currentCity}
        </div>
      )}
      {details?.hometown && (
        <div className="info_profile">
          <img src="../../../icons/home.png" alt="" />
          From {details?.hometown}
        </div>
      )}
      {!visitor && (
        <button className="gray_btn hover1 w100">Edit Details</button>
      )}
    </div>
  );
}
