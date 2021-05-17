import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileComp from "./Profile/ProfileComp";
import Card from "react-bootstrap/Card";

function App() {
  const handleName = (e, fullName) => {
    e.preventDefault();
    alert(fullName);
  };

  return (
    <div className="App">
      <ProfileComp
        fullName="Rahmouni Ferdaous"
        bio="I am a FullStack Js Developer, Laravel Developer and a Mobile/Computer Network  Expert"
        profession="Telecommunication Engineer"
        onHandleName={handleName}
      >
        <Card.Img
          style={{
            width: "300px",
            height: "280px",
            border: "none",
            paddingBottom: "0.3cm",
          }}
          variant="top"
          src="/me.jpg"
        />
      </ProfileComp>
    </div>
  );
}

export default App;
