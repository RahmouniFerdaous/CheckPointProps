import React from "react";
import { Card, Button } from "react-bootstrap";
import propTypes from "prop-types";

const ProfileComp = (props) => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header
          style={{ fontSize: "30px", fontFamily: "Roboto", opacity: "0.5" }}
        >
          Profile
        </Card.Header>
        <Card.Body>
          {props.children}
          <Card.Title
            style={{ fontSize: "50px", color: "red", fontFamily: "Roboto" }}
          >
            {props.fullName}
          </Card.Title>
          <Card.Text
            style={{ fontSize: "20px", color: "black", fontFamily: "Roboto" }}
          >
            {props.bio}
          </Card.Text>
          <Card.Text
            style={{ fontSize: "20px", color: "black", fontFamily: "Roboto" }}
          >
            {props.profession}
          </Card.Text>
          <Button
            onClick={(e) =>props.onHandleName(e, "Hello " + props.fullName + "!") ? 
                        props.onHandleName(e, "Hello " + props.fullName + "!")
                      : (e) => props.onHandleName(e, "Hello John Snow!")
            }
            variant="danger"
            size="lg"
          >
            Click Me
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          CopyRights © GoMyCode 2021
        </Card.Footer>
      </Card>
    </div>
  );
};

// Set default props
ProfileComp.defaultProps = {
  fullName: "John Snow",
  bio: "King of the North",
  profession: "Actor",
  children: (
    <Card.Img
      style={{
        width: "350px",
        height: "360px",
        border: "none",
        paddingBottom: "0.3cm",
      }}
      variant="top"
      src="/avatar.jpg"
    />
  ),
};

// ...prop types definitions here
ProfileComp.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  onHandleName: propTypes.func,
  children: propTypes.any,
};

export default ProfileComp;
