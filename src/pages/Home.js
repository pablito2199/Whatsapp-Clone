import React, { useState } from "react";
import ChatContent from "../components/ChatContent";
import ChatHeader from "../components/ChatHeader";
import ChatList from "../components/ChatList";
import SwitchModeButton from "../components/SwitchModeButton";
import { ThemeProvider } from "../context/ThemeContext";

import previousMessages from "../data/previousMessages.json"

export default function Home() {
	const [selectedChatId, setSelectedChatId] = useState(null);
	const [chatList, setChatList] = useState(previousMessages);

	return <div className="flex h-screen w-screen p-4 dark:bg-app-background">
		<div className="w-1/3 border-r border-gray-300 dark:border-gray-600 p-4 bg-gray-200 dark:bg-intro-background">
			<ChatList chatList={chatList} setSelectedChatId={setSelectedChatId} />
			<ThemeProvider>
				<SwitchModeButton />
			</ThemeProvider>
		</div>
		<div className="flex-1 flex flex-col">
			<div>
				{selectedChatId && <ChatHeader chatList={chatList} chatId={selectedChatId} />}
			</div>
			<div className="flex-1 bg-white">
				{selectedChatId && <ChatContent chatList={chatList} setChatList={setChatList} chatId={selectedChatId} />}
			</div>
		</div>
	</div>
}