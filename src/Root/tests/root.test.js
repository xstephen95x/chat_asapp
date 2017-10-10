import React from "react";
import Enzyme from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { ChatWindowWrapper } from "ChatMain/ChatWindow";
import { ChatBubbleWrapper } from "ChatMain/ChatBubble";
import { Input, Icon } from "ChatMain/TypeBox";
import ChatMain from "ChatMain";

// Configure Enzyme to work with React 16
// http://airbnb.io/enzyme/docs/installation/index.html
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

// Mock out firebase calls
import "jest-styled-components";
import fb from "firebase";
jest.mock("firebase");

const injectMock = data => {
  fb.setMock(data);
  return Enzyme.mount(
    <MemoryRouter>
      <ChatMain />
    </MemoryRouter>
  );
};

describe("ChatMain", () => {
  it("Displays 2 Chat Windows", () => {
    let mock = {
      auth: { uid: "user1" }
    };
    let wrapper = injectMock(mock);
    expect(wrapper.find(ChatWindowWrapper).length).toEqual(2);
  });

  describe("TypeBox", () => {
    it("sends a message when you click on send button", () => {
      let mock = {
        auth: { uid: "user1" },
        chats: [{ to: "left", from: "right", text: "foo bar" }]
      };
      let wrapper = injectMock(mock);
      //TODO:
    });
  });

  describe("MessageView", () => {
    it("should display messages returned from firebase", () => {
      let mock = {
        auth: { uid: "user1" },
        chats: [{ to: "left", from: "right", text: "foo bar" }]
      };
      let wrapper = injectMock(mock);
      // one message in each chat window
      expect(wrapper.find(ChatBubbleWrapper).length).toEqual(2);
    });
  });
});
