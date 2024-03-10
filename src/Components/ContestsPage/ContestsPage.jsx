import React, { useState, useEffect } from "react";
import './ContestsPage.css'
import Clock from "../Clock/Clock";
import Contest from "../Contest/Contest";
import ContestBar from "./ContestBar";

const ContestsPage = (props) => {
  const [isInContest, setIsInContest] = useState(false);
  const [selectedContest, setSelectedContest] = useState(null);
  const [ContestsList, setContestsList] = useState([
    {
      ContestName: "Name for a Pizza Restaurant",
      ContestDescription:
        "Create a mouth-watering and memorable name for a new pizzeria that stands out in a crowded market. This pizzeria prides itself on using traditional, artisan methods, and locally sourced ingredients to craft pizzas that are both authentic and innovative. The name should evoke the warmth, community, and delicious flavors associated with the best pizzeria experiences.",
      suggestedEntities: ["Entity", "Entity", "Entity", "Entity", "Entity"],
      ContestUserEntities: [],
    },
    {
      ContestName: "Name for a Texan craft brewery",
      ContestDescription:
        "Brew up a unique and memorable name for a craft brewery that prides itself on innovative flavors and local ingredients. The name should capture the spirit of community and the art of brewing.",
      suggestedEntities: ["Entity", "Entity", "Entity", "Entity", "Entity"],
      ContestUserEntities: [],
    },
    {
      ContestName: "Name for an Adventure Travel Agency",
      ContestDescription:
        "Come up with an adventurous and inspiring name for a travel agency that specializes in off-the-beaten-path experiences and adventure travel. The name should evoke a sense of exploration and discovery.",
      suggestedEntities: ["Entity", "Entity", "Entity", "Entity", "Entity"],
      ContestUserEntities: [],
    },
    {
      ContestName: "Name for a Children's Educational App",
      ContestDescription:
        "Create a mouth-watering and memorable name for a new pizzeria that stands out in a crowded market. This pizzeria prides itself on using traditional, artisan methods, and locally sourced ingredients to craft pizzas that are both authentic and innovative. The name should evoke the warmth, community, and delicious flavors associated with the best pizzeria experiences.",
      suggestedEntities: ["Entity", "Entity", "Entity", "Entity", "Entity"],
      ContestUserEntities: [],
    },
    {
      ContestName: "Name for a Vegan Restaurant Chain",
      ContestDescription:
        "Brew up a unique and memorable name for a  brewery that prides itself on innovative flavors and local ingredients. The name should capture the spirit of community and the art of brewing.",
      suggestedEntities: ["Entity", "Entity", "Entity", "Entity", "Entity"],
      ContestUserEntities: [],
    },
    {
      ContestName: "Name for a Home Decor Brand Website",
      ContestDescription:
        "Come up with an adventurous and inspiring name for a travel agency that specializes in off-the-beaten-path experiences and adventure travel. The name should evoke a sense of exploration and discovery.",
      suggestedEntities: ["Entity", "Entity", "Entity", "Entity", "Entity"],
      ContestUserEntities: [],
    },
  ]);

  const contestDetails = [
    { prize: 15, isOpen: true },
    { prize: 15, isOpen: false },
    { prize: 30, isOpen: true },
    { prize: 30, isOpen: false },
    { prize: 60, isOpen: true },
    { prize: 60, isOpen: false },
  ];
  const handleSelectContest = (selectedContest) => {
    const index = shuffledContests.findIndex(
      (contest) => contest.ContestName === selectedContest.ContestName
    );

    const dynamicDetails = contestDetails[index];

    const updatedContest = {
      ...selectedContest,
      prize: dynamicDetails.prize,
      isOpen: dynamicDetails.isOpen,
    };

    setIsInContest(true);
    setSelectedContest(updatedContest);
  };

  const addEntityToContest = (entity, contestName) => {
    const updatedContests = ContestsList.map((contest) => {
      if (contest.ContestName === contestName) {
        return {
          ...contest,
          ContestUserEntities: [...contest.ContestUserEntities, entity],
        };
      }
      return contest;
    });
    setContestsList(updatedContests);
  };

  const removeEntityFromContest = (entityToRemove, contestName) => {
    const updatedContests = ContestsList.map((contest) => {
      if (contest.ContestName === contestName) {
        const updatedEntities = contest.ContestUserEntities.filter(
          (entity) => entity.entity !== entityToRemove.entity
        );
        return { ...contest, ContestUserEntities: updatedEntities };
      }
      return contest;
    });
    setContestsList(updatedContests);
  };

  const [shuffledContests, setShuffledContests] = useState([]);

  useEffect(() => {
    const test = shuffleArray([...ContestsList]);
    setShuffledContests(test);
  }, []);

  useEffect(() => {
    if (shuffledContests.length > 0) {
      setShuffledContests([...ContestsList]);
    }
  }, [ContestsList]);

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setContestsList(array);
    return array;
  };

  return (
    <div className="contestsMainDiv">
      <Clock setStage={props.setStage} />
      {isInContest && selectedContest ? (
        <Contest
          ContestName={selectedContest.ContestName}
          ContestDescription={selectedContest.ContestDescription}
          ContestPrize={`${selectedContest.prize}`}
          IsOpenContest={selectedContest.isOpen}
          ContestUserEntities={selectedContest.ContestUserEntities}
          suggestedEntities={selectedContest.suggestedEntities}
          setIsInContest={setIsInContest}
          addEntityToContest={addEntityToContest}
          removeEntityFromContest={removeEntityFromContest}
        />
      ) : (
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="headerDiv">Our Contests</div>
          <div className="contentDiv">
            {shuffledContests.map((contest, index) => (
              <ContestBar
                key={index}
                ContestName={contest.ContestName}
                ContestPrize={contestDetails[index].prize}
                IsOpenContest={contestDetails[index].isOpen}
                setIsInContest={() => handleSelectContest(contest)}
              />
            ))}
          </div>
          <div>
            <button onClick={() => props.setStage(4)} className="leaveBtn">
              Leave
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContestsPage;
