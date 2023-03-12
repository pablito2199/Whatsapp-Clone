import React, { useState } from "react";
import GitHubButton from "../components/Buttons/GitHubButton";
import LinkedInButton from "../components/Buttons/LinkedInButton";
import SwitchModeButton from "../components/Buttons/SwitchModeButton";
import ChatContent from "../components/ChatContent/ChatContent";
import ChatHeader from "../components/ChatContent/ChatHeader";
import ChatList from "../components/ChatList/ChatList";
import { ThemeProvider } from "../context/ThemeContext";

import previousMessages from "../data/previousMessages.json"

export default function Home() {

	const [selectedChatId, setSelectedChatId] = useState(null);
	const [chatList, setChatList] = useState(previousMessages);

	return <div className="flex h-screen w-screen p-4 dark:bg-app-background">
		<div className="w-1/3 border-r border-gray-300 dark:border-gray-600 p-4 bg-gray-200 dark:bg-intro-background flex flex-col justify-between">
			<ChatList chatList={chatList} setChatList={setChatList} setSelectedChatId={setSelectedChatId} />
			<ThemeProvider className="flex justify-end">
				<div className="flex flex-col justify-center divide-y-2 divide-gray-600">
					<div className="flex justify-center">
						<SwitchModeButton />
					</div>
					<div className="flex justify-center">
						<GitHubButton />
						<LinkedInButton />
					</div>
				</div>
			</ThemeProvider>
		</div>
		<div className="flex-1 flex flex-col">
			<div>
				{selectedChatId && <ChatHeader chatId={selectedChatId} chatList={chatList} />}
			</div>
			<div className="flex-1 bg-white">
				{selectedChatId && <ChatContent chatList={chatList} setChatList={setChatList} chatId={selectedChatId} />}
			</div>
		</div>
	</div>
}