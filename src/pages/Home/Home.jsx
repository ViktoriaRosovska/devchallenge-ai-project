import { Container, PageSection } from "../../main.styled";
import assistant from "../../assets/images/monsters.png";
import { ReactComponent as BtnPlay } from "../../assets/svg/play.svg";
import { StyledBtnPlay } from "../../components/buttons/StyledBtnPlay";
import { useDispatch } from "react-redux";
import { getStartChat } from "../../http/chatAPI";
export default function Home() {
  const dispatch = useDispatch();
  return (
    <PageSection>
      <Container>
        <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <img src={assistant} alt="assistant" />
          <StyledBtnPlay>
            <BtnPlay
              onClick={() => {
                try {
                  dispatch(getStartChat());
                } catch (error) {
                  console.log(error.message);
                }
              }}
            />
          </StyledBtnPlay>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <button style={{ border: "1px solid white", padding: "10px 15px", borderRadius: "15px", color: "white" }}>
            Слухати
          </button>
          <br />
          <button style={{ border: "1px solid white", padding: "10px 15px", borderRadius: "15px", color: "white" }}>
            Говорити
          </button>
        </div>
      </Container>
    </PageSection>
  );
}
