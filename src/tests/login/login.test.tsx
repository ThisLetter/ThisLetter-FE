import { render } from "@testing-library/react";
import LoginInputCheck from "../../components/molecules/login/LoginInputCheck";

describe("<LoginInputOrg />", () => {
  it("matches snapshot", () => {
    const utils = render(
      <LoginInputCheck placeholder={"test"} id={"test"} onClick={() => {}} />
    );
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(
      <LoginInputCheck placeholder={"test"} id={"test"} onClick={() => {}} />
    );
    utils.getByPlaceholderText("test");
  });
});
