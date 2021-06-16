/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./";

describe("Given <Input /> and `_type`", () => {
  describe("When rendered by a User", () => {
    it("should show an editable area by `_type`", async () => {
      render(<Input type={"number"} name="test" />);

      await waitFor(() => screen.getByRole("input"));

      expect(screen.getByRole("input")).toHaveTextContent("");
    });
  });
});
