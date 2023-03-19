import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LastMessage({ status }) {

    return (
        <FontAwesomeIcon
            icon={status === "seen" || status === "received" ? faCheckDouble : faCheck}
            className={`h-4 pr-1 rounded-full ${status === "seen" ? "text-blue-400" : "text-gray-400"}`}
        />
    );
}