import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  sangheon: {
    name: "좌상헌",
    description: "Fronted Engineer @ Laftel Inc.개발자",
  },
  gildong: {
    name: "홍길동",
    description: "전래동화의 주인공",
  },
};

const Profile = () => {
  // const { username } = match.params;
  const { username } = useParams();

  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
