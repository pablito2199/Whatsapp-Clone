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

	return <div className="relative">
		<div className="bg-emerald-500 w-full h-[17.5%] z-10 fixed top-0 left-0 w-full h-1/5 transition-all"></div>
		<div className="flex h-screen w-screen p-4 bg-gray-200 dark:bg-app-background z-1 relative shadow-lg">
			<div className="w-[30%] border-r border-gray-300 dark:border-gray-600 bg-white dark:bg-intro-background flex flex-col justify-between z-20">
				<ChatList chatList={chatList} setChatList={setChatList} setSelectedChatId={setSelectedChatId} />
				<ThemeProvider>
					<div className="flex justify-center items-center">
						<div className="flex flex-col justify-center divide-y-2 dark:divide-gray-700 w-11/12">
							<div className="flex justify-center">
								<SwitchModeButton />
							</div>
							<div className="flex justify-center">
								<GitHubButton />
								<LinkedInButton />
							</div>
						</div>
					</div>
				</ThemeProvider>
			</div>
			<div className="flex-1 flex flex-col z-20">
				<div>
					{selectedChatId && <ChatHeader chatId={selectedChatId} chatList={chatList} />}
				</div>
				<div className="flex-1 h-full">
					{
						selectedChatId
							?
							<ChatContent chatList={chatList} setChatList={setChatList} chatId={selectedChatId} />
							:
							<div className="w-full h-full no-chat-selected" />
					}
				</div>
			</div>
		</div>
	</div>
}