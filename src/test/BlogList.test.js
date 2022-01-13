import React from "react";
import renderer from "react-test-renderer";
import BlogList from "../components/BlogsList";

it("Henlo", () => {
  const component = renderer.create(<BlogList />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
