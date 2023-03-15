import React, { useEffect, useRef, useState } from "react";
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
	const [chatList, setChatList] = useState(() => {
		let savedChatList = localStorage.getItem('chatList');
		if (savedChatList) {
			savedChatList = JSON.parse(savedChatList);
			const prevSelectedChat = savedChatList.find(c => c.isSelected);
			if (prevSelectedChat) {
				prevSelectedChat.isSelected = false;
			}
			return savedChatList.sort((a, b) => {
				return new Date(b.messages[b.messages.length - 1].timestamp) - new Date(a.messages[a.messages.length - 1].timestamp);
			});
		}
		return previousMessages.sort((a, b) => {
			return new Date(b.messages[b.messages.length - 1].timestamp) - new Date(a.messages[a.messages.length - 1].timestamp);
		});
	});
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const leftSideRef = useRef(null);
	const rightSideRef = useRef(null);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [windowWidth, selectedChatId]);


	const handleClick = (chat) => {
		const prevSelectedChat = chatList.find(c => c.isSelected);
		if (prevSelectedChat) {
			prevSelectedChat.isSelected = false;
		}

		chat.isSelected = true;
		chat.unread = 0;
		setSelectedChatId(chat.id);
		setChatList([...chatList]);
		localStorage.setItem('chatList', JSON.stringify(chatList));
	}

	return <div className="relative max-h-screen">
		{windowWidth >= 1039 && <div className="bg-emerald-500 w-full h-[17.5%] z-10 fixed top-0 left-0 w-full h-1/5 transition-all"></div>}
		<div className="flex h-screen w-screen p-4 bg-gray-200 dark:bg-app-background z-1 relative shadow-lg whatsapp-container">
			{((windowWidth < 1039 && selectedChatId == null) || windowWidth >= 1039) && <div className="w-[30%] border-r border-gray-300 dark:border-gray-600 bg-white dark:bg-intro-background flex flex-col justify-between z-20 left-side" ref={leftSideRef}>
				<ChatList chatList={chatList} handleClick={handleClick} />
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
			}
			{((windowWidth < 1039 && selectedChatId != null) || windowWidth >= 1039) && <div className="flex-1 flex flex-col z-20 right-side" ref={rightSideRef}>
				<div>
					{selectedChatId && <ChatHeader chatId={selectedChatId} chatList={chatList} windowWidth={windowWidth} setSelectedChatId={setSelectedChatId} />}
				</div>
				<div className="flex-1 h-full overflow-y-auto">
					{
						selectedChatId
							?
							<ChatContent chatList={chatList} setChatList={setChatList} chatId={selectedChatId} />
							:
							<div className="w-full h-full no-chat-selected" />
					}
				</div>
			</div>
			}
		</div>
	</div>
}