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
        auth: { uid: "user1" }
      };
      let wrapper = injectMock(mock);
      let input = wrapper.find(Input).at(0);
      // no chat bubbles at first
      expect(wrapper.find(ChatBubbleWrapper).length).toEqual(0);
      // type a chat
      input.simulate("focus");
      const testMessage = "foo bar baz";
      input.simulate("change", { target: { value: testMessage } });
      let button = wrapper.find(Icon).at(0);
      button.simulate("click");
      // message should now appear in both chat windows
      expect(wrapper.find(ChatBubbleWrapper).length).toEqual(2);
    });

    it("syns all messages with cloud datastore", () => {
      let mock = {
        auth: { uid: "user1" }
      };
      let wrapper = injectMock(mock);
      let input = wrapper.find(Input).at(0);

      //type a message
      input.simulate("focus");
      const testMessage = "foo bar baz";
      input.simulate("change", { target: { value: testMessage } });
      let button = wrapper.find(Icon).at(0);
      button.simulate("click");
      let cloudData = fb
        .database()
        .ref()
        .calls()[0][0].text;
      expect(cloudData === testMessage);
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
