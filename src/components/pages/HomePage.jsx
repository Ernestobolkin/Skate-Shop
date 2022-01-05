import "./pagesStyle/HomePage.style.scss";
export const HomePage = (props) => {
  const onSubmitBtn = (e) => {
    e.preventDefault();
    if (
      props.userData.userPassword === "admin" &&
      props.userData.userName === "admin"
    ) {
      props.setIsShownAdmin(!props.isShownAdmin)
    }
  };

  const renderLogin = () => {
    return (
      <div className="pageContainer">
        <div className="loginContainer">
          <form>
            <label htmlFor="userName">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="userName"
              required
              value={props.userData.userName}
              onChange={(e) =>
                props.setUserData({
                  ...props.userData,
                  userName: e.target.value,
                })
              }
            />{" "}
            <br />
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={props.userData.userPassword}
              onChange={(e) =>
                props.setUserData({
                  ...props.userData,
                  userPassword: e.target.value,
                })
              }
            />
            <br />
            <button onClick={(e) => onSubmitBtn(e)} type="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

  return <>{props.isShownAdmin && renderLogin()}</>;
};
