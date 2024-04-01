import React from "react";
import { useSelector } from "react-redux";
import "./detail.css";
import Container from "../../Components/Container/Container";
import SecondaryNavbar from "../../Components/secondary navbar/SecondaryNavbar";
import TextToSpeech from "./TextToSpeech";
import { useState, useEffect } from "react";

export default function DetailOfBook() {
  const single_book = useSelector((state) => state.book.individual_book);
  console.log(single_book);
  const [text, setText] = useState("");

  useEffect(() => {
    const paragraphElement = document.getElementById("x");
    setText(paragraphElement.textContent);
  }, []);
  return (
    <Container>
      <SecondaryNavbar name={single_book.title} />
      <div className="grid">
        <div className="main-img">
          <img src={single_book.book_image} alt="" />
        </div>
        <div className="text">
          <h2>{single_book.title}</h2>
          <p>
            <strong>Description</strong>: {single_book.description}
          </p>
          <span>
            <strong>Author</strong>: {single_book.author}
          </span>
          <span>
            <strong>Publisher</strong> :{single_book.publisher}
          </span>
          <span>
            <strong>Contributor</strong> :{single_book.contributor}
          </span>
          {/* <a href={single_book.amazon_product_url} target='_blank'>Buy directly from Amazon</a> */}
        </div>
      </div>
      <div>
        <p hidden id="x">
          These problems illustrate the four-step process in Learning from Data.
          First, there was a problem or question to be addressed. Next, for each
          prob- lem a study or experiment was proposed to collect meaningful
          data to solve the problem. The government meat inspection agency had
          to decide both how many packages to inspect per day and how to select
          the sample of packages from the total daily output in order to obtain
          a valid prediction. The polling groups had to decide how many voters
          to sample and how to select these individuals in order to obtain
          information that is representative of the population of all voters.
          Simi- larly, it was necessary to carefully plan how many participants
          in the weight-gain study were needed and how they were to be selected
          from the list of all such participants. Furthermore, what variables
          did the researchers have to measure on each participant? Was it
          necessary to know each participant’s age, sex, physi- cal fitness, and
          other health-related variables, or was weight the only important
          variable? The results of the study may not be relevant to the general
          population if many of the participants in the study had a particular
          health condition. In the wheat experiment, it was important to measure
          both the soil characteristics of the fields and the environmental
          conditions, such as temperature and rainfall, to obtain results that
          could be generalized to fields not included in the study. The design
          of a study or experiment is crucial to obtaining results that can be
          general- ized beyond the study. Finally, having collected, summarized,
          and analyzed the data, it is important to report the results in
          unambiguous terms to interested people. For the meat inspection
          example, the government inspection agency and the personnel in the
          beef-processing plant would need to know the distribution of fat
          content in the daily production of ground beef. Based on this
          distribution, the agency could then impose fines or take other
          remedial actions against the production facility. Also, knowledge of
          this distribution would enable company production personnel to make
          adjustments to the process in order to obtain acceptable fat content
          in their ground beef packages. Therefore, the results of the
          statistical analyses cannot be presented in ambiguous terms; decisions
          must be made from a well-defined knowledge base. The results of the
          weight-gain study would be of vital interest to physicians who have
          patients participating in the smoking-cessation program. If a
          significant increase in weight was recorded for those individuals who
          had quit smoking, physicians would have to recommend diets so that the
          former smokers
        </p>

        <script>text = document.getElementById("x").innerHTML;</script>
        <TextToSpeech text={text} />
        <p>{text}</p>
      </div>
    </Container>
  );
}
