import { render } from "@testing-library/react";
import RegisterInputCheck from "../../components/molecules/register/RegisterInputCheck";

describe("<RegisterInputOrg />", () => {
  it("matches snapshot", () => {
    const utils = render(
      <RegisterInputCheck placeholder={"test"} id={"test"} onClick={() => {}} />
    );
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(
      <RegisterInputCheck placeholder={"test"} id={"test"} onClick={() => {}} />
    );
    utils.getByPlaceholderText("test");
  });
});
