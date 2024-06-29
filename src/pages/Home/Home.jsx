import { Container, PageSection } from "../../main.styled";
import assistant from "../../assets/images/monsters.png";
import { ReactComponent as BtnPlay } from "../../assets/svg/play.svg";
import { ReactComponent as BtnStop } from "../../assets/svg/stop.svg";
import { StyledBtnPlay } from "../../components/buttons/StyledBtnPlay";
// import topics from "../../data/beginTopics.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectResult, selectStartTheme, selectVoice } from "../../redux/userChat/userChatSelector";
import { AudioRecorder } from "../../utils/audioRecorder";
import { getSendVoice, getStartChat, getStopChat } from "../../redux/userChat/userChatOperations";
import { StyledOperationBtn } from "../../components/buttons/StyledOperationBtn";
import {
  StyledAssistantWrapper,
  StyledBtnControlWrapper,
  StyledHeroWrapper,
  StyledListenControls,
  StyledPageWrapper,
  StyledTopicTitle,
  StyledTopicWrapper,
} from "./Home.styled";
import { Modal } from "../../components/Modal/Modal";
import { ResultModal } from "../../components/Modal/ResultModal/ResultModal";

export default function Home() {
  const [showTopic, setShowTopic] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const newTopic = useSelector(selectStartTheme);
  const dispatch = useDispatch();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isStop, setIsStop] = useState(false);

  const audioReady = (blob) => {
    const myFile = new File([blob], "record.wav", {
      type: "audio/wav",
    });

    let fd = new FormData();
    fd.append("audio", myFile, "record.wav");
    dispatch(getSendVoice({ voice: fd, chat_id: newTopic.chat_id }));
  };
  const [recorder] = useState(new AudioRecorder());
  const voice = useSelector(selectVoice);

  const onBackdropClose = () => {
    setShowModal(false);
  };
  const result = useSelector(selectResult);
  return (
    <PageSection>
      <Container>
        <StyledPageWrapper>
          <StyledHeroWrapper>
            <StyledAssistantWrapper>
              <img src={assistant} alt="assistant" />
            </StyledAssistantWrapper>
            <StyledBtnControlWrapper>
              <StyledBtnPlay>
                <BtnPlay
                  onClick={() => {
                    try {
                      dispatch(getStartChat());
                      setShowTopic(true);
                      setIsStop(true);
                    } catch (error) {
                      console.log(error.message);
                    }
                  }}
                />
              </StyledBtnPlay>
              <StyledBtnPlay
                onClick={() => {
                  try {
                    dispatch(getStopChat(newTopic.chat_id));
                    if (result) {
                      setShowModal(true);
                    }
                  } catch (error) {
                    console.log(error.message);
                  }
                }}
                disabled={!isStop}
              >
                <BtnStop />
              </StyledBtnPlay>
            </StyledBtnControlWrapper>
          </StyledHeroWrapper>

          <StyledTopicWrapper>
            {showTopic && (
              <>
                <StyledTopicTitle>{"Today we speak about:"}</StyledTopicTitle>
                <div>{newTopic ? newTopic?.topic : "Loading topic..."}</div>
              </>
            )}
            <StyledListenControls>
              <StyledOperationBtn
                onClick={() => {
                  const a = new Audio(voice);
                  a.play();
                }}
              >
                Listen
              </StyledOperationBtn>

              <StyledOperationBtn
                disabled={isSpeaking}
                onClick={() => {
                  setIsSpeaking(true);
                  recorder?.start();
                }}
              >
                Speak
              </StyledOperationBtn>
              <StyledOperationBtn
                disabled={!isSpeaking}
                onClick={() => {
                  recorder?.stop(audioReady);
                  setIsSpeaking(false);
                }}
              >
                Stop
              </StyledOperationBtn>
            </StyledListenControls>
          </StyledTopicWrapper>
        </StyledPageWrapper>
      </Container>
      {showModal && (
        <Modal onBackdropClose={onBackdropClose}>
          <ResultModal />
        </Modal>
      )}
    </PageSection>
  );
}
