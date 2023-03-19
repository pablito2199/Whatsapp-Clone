import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<div className='flex flex-row font-whatsapp'>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/404" element={<NotFound />} />
					<Route path="*" element={<Navigate to='/404' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	</React.StrictMode>,
);